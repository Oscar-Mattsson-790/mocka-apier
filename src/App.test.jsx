import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import App from "./App";

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
