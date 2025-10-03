import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Pagination from "../components/Pagination";

describe("Pagination Component", () => {
  const onPreviousMock = jest.fn();
  const onNextMock = jest.fn();

  const setup = (page: number, total: number) => {
    render(
      <Pagination
        page={page}
        total={total}
        onPrevious={onPreviousMock}
        onNext={onNextMock}
      />
    );
  };

  it("renders the pagination component", () => {
    setup(1, 100);

    expect(screen.getByTestId("pagination-container")).toBeInTheDocument();
    expect(screen.getByTestId("previous-button")).toBeInTheDocument();
    expect(screen.getByTestId("next-button")).toBeInTheDocument();
    expect(screen.getByTestId("current-page")).toHaveTextContent("Página 1");
  });

  it("disables the previous button on the first page", () => {
    setup(1, 100);

    const previousButton = screen.getByTestId("previous-button");
    expect(previousButton).toBeDisabled();
  });

  it("disables the next button when on the last page", () => {
    setup(10, 100);

    const nextButton = screen.getByTestId("next-button");
    expect(nextButton).toBeDisabled();
  });

  it("calls onPrevious when the previous button is clicked", () => {
    setup(2, 100);

    const previousButton = screen.getByTestId("previous-button");
    fireEvent.click(previousButton);

    expect(onPreviousMock).toHaveBeenCalledTimes(1);
  });

  it("calls onNext when the next button is clicked", () => {
    setup(1, 100);

    const nextButton = screen.getByTestId("next-button");
    fireEvent.click(nextButton);

    expect(onNextMock).toHaveBeenCalledTimes(1);
  });
});