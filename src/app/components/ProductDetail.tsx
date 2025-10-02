"use client";
import { useProductById } from "../hooks/useProducts";
import { formatCurrency, formatDate } from "../utils";
import React from "react";
import SkeletonDetail from "./skeletons/SkeletonDetail";
import ErrorComponent from "./ErrorComponent";
import Link from "next/link";
import ChartReviews from "./Chart";
import Image from "next/image";

const ProductDetail = ({ id }: { id: number }) => {
  const { data: product, isLoading, isError } = useProductById(id);

  if (isLoading) {
    return <SkeletonDetail />;
  }

  if (isError || !product) {
    return (
      <ErrorComponent message="Error al obtener los detalles del producto." />
    );
  }

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-x-6"
      data-testid="product-detail-container"
    >
      <div
        className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow"
        data-testid="product-detail-main"
      >
        <Link href="/">
          <button
            className="mb-6 p-2 cursor-pointer bg-gray-500 text-white rounded-full hover:bg-gray-700 flex items-center"
            aria-label="Regresar a la página principal"
            data-testid="back-button"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </Link>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-testid="product-detail-content"
        >
          <div>
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={500}
              height={400}
              className="object-cover rounded-md"
              data-testid="product-thumbnail"
            />
            <div
              className="mt-3 grid grid-cols-4 gap-2"
              data-testid="product-images"
            >
              {product.images?.slice(0, 4).map((img: string, idx: number) => (
                <Image
                  key={idx}
                  src={img}
                  width={100}
                  height={80}
                  className="object-cover rounded"
                  alt={`Imagen ${idx + 1} de ${product.title}`}
                  data-testid={`product-image-${idx}`}
                />
              ))}
            </div>
          </div>
          <div>
            <h2
              className="text-2xl font-bold"
              data-testid="product-title"
              aria-label={`Título del producto: ${product.title}`}
            >
              {product.title}
            </h2>
            <p
              className="text-gray-600 mt-2"
              data-testid="product-description"
              aria-label={`Descripción del producto: ${product.description}`}
            >
              {product.description}
            </p>
            <div
              className="mt-4 text-3xl font-extrabold"
              data-testid="product-price"
              aria-label={`Precio del producto: ${formatCurrency(
                product.price
              )}`}
            >
              {formatCurrency(product.price)}
            </div>
            <div
              className="mt-2 text-sm text-gray-500"
              data-testid="product-stock"
              aria-label={`Stock disponible: ${product.stock}`}
            >
              Stock: {product.stock}
            </div>
            <div
              className="mt-4 text-sm text-gray-500"
              data-testid="product-release-date"
              aria-label={`Fecha de lanzamiento: ${formatDate(
                product.meta.createdAt
              )}`}
            >
              Fecha de lanzamiento: {formatDate(product.meta.createdAt)}
            </div>
          </div>
        </div>
      </div>
      <div
        className="max-w-4xl w-full mx-auto bg-white p-6 rounded-md shadow"
        data-testid="product-reviews-section"
      >
        <h3
          className="text-lg font-semibold"
          data-testid="reviews-title"
          aria-label="Reseñas del producto"
        >
          Reseñas del producto
        </h3>
        <div className="mt-4 px-10" data-testid="reviews-chart">
          <ChartReviews
            data={product.reviews.map((r) => ({
              date: formatDate(r.date),
              rating: r.rating,
            }))}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
