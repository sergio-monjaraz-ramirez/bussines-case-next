import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filters from "../components/Filters";
import { Category } from "@/types";
import '@testing-library/jest-dom';

describe("Filters Component", () => {
  const mockCategories: Category[] = [
    { slug: "electronics", name: "Electronics" },
    { slug: "fashion", name: "Fashion" },
  ];

  const mockOnSelectCategory = jest.fn();
  const mockOnChangeSortBy = jest.fn();
  const mockOnChangeOrder = jest.fn();

  it("renders the filters component correctly", () => {
    render(
      <Filters
        categories={mockCategories}
        selected={null}
        onSelectCategory={mockOnSelectCategory}
        sortBy=""
        order=""
        onChangeSortBy={mockOnChangeSortBy}
        onChangeOrder={mockOnChangeOrder}
      />
    );

    expect(screen.getByTestId("filters-container")).toBeInTheDocument();
    expect(screen.getByTestId("category-select")).toBeInTheDocument();
    expect(screen.getByTestId("sort-by-select")).toBeInTheDocument();
    expect(screen.getByTestId("order-select")).toBeInTheDocument();
  });

  it("calls onSelectCategory when a category is selected", () => {
    render(
      <Filters
        categories={mockCategories}
        selected={null}
        onSelectCategory={mockOnSelectCategory}
        sortBy=""
        order=""
        onChangeSortBy={mockOnChangeSortBy}
        onChangeOrder={mockOnChangeOrder}
      />
    );

    const categorySelect = screen.getByTestId("category-select");
    fireEvent.change(categorySelect, { target: { value: "electronics" } });

    expect(mockOnSelectCategory).toHaveBeenCalledWith("electronics");
  });

  it("calls onChangeSortBy when a sort option is selected", () => {
    render(
      <Filters
        categories={mockCategories}
        selected={null}
        onSelectCategory={mockOnSelectCategory}
        sortBy=""
        order=""
        onChangeSortBy={mockOnChangeSortBy}
        onChangeOrder={mockOnChangeOrder}
      />
    );

    const sortBySelect = screen.getByTestId("sort-by-select");
    fireEvent.change(sortBySelect, { target: { value: "price" } });

    expect(mockOnChangeSortBy).toHaveBeenCalledWith("price");
  });

  it("calls onChangeOrder when an order option is selected", () => {
    render(
      <Filters
        categories={mockCategories}
        selected={null}
        onSelectCategory={mockOnSelectCategory}
        sortBy=""
        order=""
        onChangeSortBy={mockOnChangeSortBy}
        onChangeOrder={mockOnChangeOrder}
      />
    );

    const orderSelect = screen.getByTestId("order-select");
    fireEvent.change(orderSelect, { target: { value: "asc" } });

    expect(mockOnChangeOrder).toHaveBeenCalledWith("asc");
  });

it("calls onSelectCategory with null when 'Todas' is selected", () => {
    render(
        <Filters
            categories={mockCategories}
            selected={"electronics"}
            onSelectCategory={mockOnSelectCategory}
            sortBy=""
            order=""
            onChangeSortBy={mockOnChangeSortBy}
            onChangeOrder={mockOnChangeOrder}
        />
    );

    const categorySelect = screen.getByTestId("category-select");
    fireEvent.change(categorySelect, { target: { value: "" } });

    expect(mockOnSelectCategory).toHaveBeenCalledWith(null);
});

it("calls onChangeSortBy with empty string when 'Sin ordenar' is selected", () => {
    render(
        <Filters
            categories={mockCategories}
            selected={null}
            onSelectCategory={mockOnSelectCategory}
            sortBy="price"
            order=""
            onChangeSortBy={mockOnChangeSortBy}
            onChangeOrder={mockOnChangeOrder}
        />
    );

    const sortBySelect = screen.getByTestId("sort-by-select");
    fireEvent.change(sortBySelect, { target: { value: "" } });

    expect(mockOnChangeSortBy).toHaveBeenCalledWith("");
});

it("calls onChangeOrder with empty string when 'Sin ordenar' is selected", () => {
    render(
        <Filters
            categories={mockCategories}
            selected={null}
            onSelectCategory={mockOnSelectCategory}
            sortBy=""
            order="asc"
            onChangeSortBy={mockOnChangeSortBy}
            onChangeOrder={mockOnChangeOrder}
        />
    );

    const orderSelect = screen.getByTestId("order-select");
    fireEvent.change(orderSelect, { target: { value: "" } });

    expect(mockOnChangeOrder).toHaveBeenCalledWith("");
});
});