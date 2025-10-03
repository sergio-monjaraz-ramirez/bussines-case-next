import { render, screen } from "@testing-library/react";
import ProductCard from "../components/ProductCard";
import { Product } from "@/types";
import '@testing-library/jest-dom';


describe("ProductCard Component", () => {
  const mockProduct: Product = {
    id: 1,
    title: "Test Product",
    description: "This is a test product description.",
    price: 100,
    stock: 20,
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    images:[
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
     ],
    meta: {
      createdAt: "2025-10-01",
      updatedAt: "2025-10-02",
      barcode: "123456789",
      qrCode: "test-qr-code",
    },
    reviews: [],
    discountPercentage: 10,
    rating: 4.5,
    brand: "Test Brand",
    category: "Test Category",
  };

  it("renders the product card correctly", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByTestId("product-card-1")).toBeInTheDocument();
    expect(screen.getByTestId("product-image-1")).toBeInTheDocument();
    expect(screen.getByTestId("product-title-1")).toHaveTextContent("Test Product");
    expect(screen.getByTestId("product-description-1")).toHaveTextContent(
      "This is a test product description."
    );
    expect(screen.getByTestId("product-price-1")).toHaveTextContent("$100.00");
    expect(screen.getByTestId("product-stock-1")).toHaveTextContent("Stock: 20");
  });

  it("links to the correct product detail page", () => {
    render(<ProductCard product={mockProduct} />);

    const linkElement = screen.getByTestId("product-card-1");
    expect(linkElement).toHaveAttribute("href", "/products/1");
  });

});