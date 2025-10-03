import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  it("renders correctly", () => {
    render(<SearchBar onChange={jest.fn()} />);
    const inputElement = screen.getByTestId("search-bar");
    expect(inputElement).toBeInTheDocument();
  });

  it("calls onChange when input value changes", () => {
    const mockOnChange = jest.fn();
    render(<SearchBar onChange={mockOnChange} />);
    const inputElement = screen.getByTestId("search-input");

    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(mockOnChange).toHaveBeenCalledWith("test");
  });

  it("updates the input value when typed into", () => {
    const mockOnChange = jest.fn();
    render(<SearchBar onChange={mockOnChange} />);
    const inputElement = screen.getByTestId("search-input");

    fireEvent.change(inputElement, { target: { value: "example" } });
    expect(inputElement).toHaveValue("example");
  });
});