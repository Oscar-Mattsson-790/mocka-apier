import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import AddTodo from "./AddTodo";

describe("AddTodo", () => {
  it("should add a todo", () => {
    render(<AddTodo />);
    const fetch = vi.spyOn(window, "fetch");

    const todoInput = screen.getByRole("textbox");
    fireEvent.change(todoInput, { target: { value: "Skriver test" } });

    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("todo-text")).toHaveTextContent(/^Skriver test$/);
    expect(fetch).toHaveBeenCalled();
  });
});
