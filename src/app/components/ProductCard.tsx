"use client";
import React from "react";
import Link from "next/link";
import { Product } from "@/types";
import { formatCurrency } from "../utils";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="border rounded-md p-3 hover:shadow-md flex flex-col"
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={300}
        height={80}
        className=" self-center object-cover rounded-md mb-2"
        priority
      />
      <div className="flex-1">
        <h3 className="font-semibold text-sm">{product.title}</h3>
        <p className="text-xs text-gray-500 line-clamp-2">
          {product.description}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="mt-2 font-bold">{formatCurrency(product.price)}</div>
        <div className="mt-2 text-gray-500">Stock: {product.stock}</div>
      </div>
    </Link>
  );
}
