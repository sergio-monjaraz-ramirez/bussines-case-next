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
    <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-x-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow">
        <Link href="/">
          <button
            className="mb-6 p-2 cursor-pointer bg-gray-500 text-white rounded-full hover:bg-gray-700 flex items-center"
            aria-label="Regresar"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={500}
              height={400}
              className=" object-cover rounded-md"
            />
            <div className="mt-3 grid grid-cols-4 gap-2">
              {product.images?.slice(0, 4).map((img: string, idx: number) => (
                <Image
                  key={idx}
                  src={img}
                  width={100}
                  height={80}
                  className="object-cover rounded"
                  alt={`Imagen ${idx + 1} de ${product.title}`}
                />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4 text-3xl font-extrabold">
              {formatCurrency(product.price)}
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Stock: {product.stock}
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Fecha de lanzamiento: {formatDate(product.meta.createdAt)}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl w-full mx-auto bg-white p-6 rounded-md shadow">
        <h3 className="text-lg font-semibold">Reseñas del producto</h3>
        <div className="mt-4 px-10">
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
