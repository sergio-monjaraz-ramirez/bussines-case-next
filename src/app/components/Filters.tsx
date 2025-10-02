"use client";
import { Category } from "@/types";
import React from "react";

type Props = {
  categories: Category[];
  selected?: string | null;
  onSelectCategory: (c: string | null) => void;
  order?: "asc" | "desc" | "";
  sortBy?: "price" | "title" | "rating" | "stock" | "";
  onChangeSortBy: (sortBy: "price" | "title" | "rating" | "stock" | "") => void;
  onChangeOrder: (order: "asc" | "desc" | "") => void;
};

export default function Filters({
  categories,
  selected,
  onSelectCategory,
  order,
  sortBy,
  onChangeOrder,
  onChangeSortBy,
}: Props) {
  return (
    <aside
      className="p-4 border rounded-md space-y-4"
      data-testid="filters-container"
      aria-label="Contenedor de filtros"
    >
      <div>
        <h4 className="font-semibold">Categoría</h4>
        <select
          value={selected ?? ""}
          onChange={(e) =>
            onSelectCategory(e.target.value === "" ? null : e.target.value)
          }
          className="w-full p-2 rounded-md border"
          data-testid="category-select"
          aria-label="Seleccionar categoría"
        >
          <option value="">Todas</option>
          {categories.map((c: Category) => (
            <option
              value={c.slug}
              key={c.slug}
              data-testid={`category-option-${c.slug}`}
            >
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h4 className="font-semibold">Ordenar por</h4>
        <select
          value={sortBy ?? ""}
          onChange={(e) => {
            const value = e.target.value as
              | "price"
              | "title"
              | "rating"
              | "stock"
              | "";
            onChangeSortBy(value);
          }}
          className="w-full p-2 rounded-md border"
          data-testid="sort-by-select"
          aria-label="Ordenar por"
        >
          <option value="">Sin ordenar</option>
          <option value="price" data-testid="sort-by-price">
            Precio
          </option>
          <option value="title" data-testid="sort-by-title">
            Titulo
          </option>
          <option value="rating" data-testid="sort-by-rating">
            Rating
          </option>
          <option value="stock" data-testid="sort-by-stock">
            Stock
          </option>
        </select>
      </div>

      <div>
        <h4 className="font-semibold">Orden</h4>
        <select
          value={order ?? ""}
          onChange={(e) => {
            const value = e.target.value as "asc" | "desc" | "";
            onChangeOrder(value);
          }}
          className="w-full p-2 rounded-md border"
          data-testid="order-select"
          aria-label="Seleccionar orden"
        >
          <option value="">Sin ordenar</option>
          <option value="asc" data-testid="order-asc">
            Menor a mayor
          </option>
          <option value="desc" data-testid="order-desc">
            Mayor a menor
          </option>
        </select>
      </div>
    </aside>
  );
}
