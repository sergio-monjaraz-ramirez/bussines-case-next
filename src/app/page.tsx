"use client";
import React from "react";
import { useState } from "react";
import { useCategories, useProducts } from "./hooks/useProducts";
import Filters from "./components/Filters";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import { Product } from "@/types";
import { useDebouncedSearch } from "./hooks/useDebouncedSearch";
import ErrorComponent from "./components/ErrorComponent";
import SkeletonCard from "./components/skeletons/SkeletonCard";
import Pagination from "./components/Pagination";

export default function Page() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [order, setOrder] = useState<"asc" | "desc" | "">("");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<
    "price" | "title" | "rating" | "stock" | ""
  >("");
  const debouncedSetQ = useDebouncedSearch(q, 500);
  const { data: categoriesData } = useCategories();
  const { data, isLoading, isError } = useProducts({
    q: debouncedSetQ,
    category,
    sort: order,
    sortBy,
    page,
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1" aria-label="Filters Section">
        <Filters
          categories={categoriesData ?? []}
          selected={category}
          onSelectCategory={(c) => {
            setCategory(c);
            setPage(1);
          }}
          order={order}
          sortBy={sortBy}
          onChangeSortBy={(sb) => {
            setSortBy(sb);
            setPage(1);
          }}
          onChangeOrder={(o) => {
            setOrder(o);
            setPage(1);
          }}
        />
      </div>
      <div className="lg:col-span-3" aria-label="Products Section">
        <div className="mb-4 flex gap-4" aria-label="Search Bar Section">
          <div className="flex-1">
            <SearchBar onChange={(v) => setQ(v)} />
          </div>
        </div>

        {isLoading && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            aria-label="Loading Products"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}
        {isError && (
          <ErrorComponent
            message="Error al cargar los productos"
            aria-label="Error Loading Products"
          />
        )}

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          aria-label="Products List"
        >
          {data?.products?.map((p: Product) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <Pagination
          page={page}
          total={data?.total}
          onPrevious={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() => setPage((p) => p + 1)}
          aria-label="Pagination Controls"
        />
      </div>
    </div>
  );
}
