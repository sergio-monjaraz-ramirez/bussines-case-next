import React from "react";
import { render, screen } from "@testing-library/react";
import ProductDetail from "../components/ProductDetail";
import { useProductById } from "../hooks/useProducts";
import '@testing-library/jest-dom';

jest.mock("../hooks/useProducts");
jest.mock("../components/skeletons/SkeletonDetail", () => jest.fn(() => <div data-testid="skeleton-detail" />));
jest.mock("../components/ErrorComponent", () => jest.fn(({ message }) => <div data-testid="error-component">{message}</div>));

describe("ProductDetail Component", () => {
  const mockUseProductById = useProductById as jest.Mock;

  it("renders loading state", () => {
    mockUseProductById.mockReturnValue({ isLoading: true, isError: false, data: null });

    render(<ProductDetail id={1} />);

    expect(screen.getByTestId("skeleton-detail")).toBeInTheDocument();
  });

  it("renders error state", () => {
    mockUseProductById.mockReturnValue({ isLoading: false, isError: true, data: null });

    render(<ProductDetail id={1} />);

    expect(screen.getByTestId("error-component")).toBeInTheDocument();
    expect(screen.getByTestId("error-component")).toHaveTextContent(
      "Error al obtener los detalles del producto."
    );
  });

  it("renders product details correctly", () => {
    const mockProduct = {
      thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
      title: "Product Title",
      description: "Product Description",
      price: 100,
      stock: 20,
      meta: { createdAt: "2025-10-01T09:41:02.053Z" },
      images:[
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
     ],
      reviews: [
        { date: "2025-09-01T09:41:02.053Z", rating: 4 },
        { date: "2025-09-02T09:41:02.053Z", rating: 5 },
      ],
    };

    mockUseProductById.mockReturnValue({ isLoading: false, isError: false, data: mockProduct });

    render(<ProductDetail id={1} />);

    expect(screen.getByTestId("product-detail-container")).toBeInTheDocument();
    expect(screen.getByTestId("product-title")).toHaveTextContent("Product Title");
    expect(screen.getByTestId("product-description")).toHaveTextContent("Product Description");
    expect(screen.getByTestId("product-price")).toHaveTextContent("$100.00");
    expect(screen.getByTestId("product-stock")).toHaveTextContent("Stock: 20");
    expect(screen.getByTestId("product-release-date")).toHaveTextContent("Fecha de lanzamiento: 1/10/2025");
    expect(screen.getByTestId("product-thumbnail")).toBeInTheDocument();
    expect(screen.getByTestId("product-images")).toBeInTheDocument();
    expect(screen.getAllByTestId(/product-image-/)).toHaveLength(1);
    expect(screen.getByTestId("reviews-chart")).toBeInTheDocument();
  });
});