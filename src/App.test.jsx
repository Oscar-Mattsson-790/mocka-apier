import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

import App from "./App";
import { afterAll, beforeAll } from "vitest";

const server = setupServer(
  http.get("https://jsonplaceholder.typicode.com/todos", () => {
    return HttpResponse.json([
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
      },
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true,
      },
    ]);
  })
);

// Innan alla tester körs så starta och lyssna på servern
beforeAll(() => server.listen());

// Efter alla tester körts så stäng ner servern
afterAll(() => server.close());

describe("App", () => {
  it("should display four todos at rendering", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Inga todos")).not.toBeInTheDocument();
    });

    const listItems = screen.getAllByRole("list-item");
    const todoNames = listItems.map((item) => item.textContent);

    expect(todoNames).toMatchInlineSnapshot(`
    [
      "delectus aut autem - Ej klar",
      "quis ut nam facilis et officia qui - Ej klar",
      "fugiat veniam minus - Ej klar",
      "et porro tempora - Klar",
    ]
    `);
  });
});
