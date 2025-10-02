'use client'
import { Category } from '@/types';
import React from 'react'

type Props = {
  categories: Category[];
  selected?: string | null;
  onSelectCategory: (c: string | null) => void;
  order?: 'asc' | 'desc' | '';
  sortBy?: 'price' | 'title' | 'rating' | 'stock' | '';
  onChangeSortBy: (sortBy: 'price' | 'title' | 'rating' | 'stock' | '') => void;
  onChangeOrder: (order: 'asc' | 'desc' | '') => void;
}

export default function Filters({ categories, selected, onSelectCategory, order, sortBy, onChangeOrder, onChangeSortBy }: Props) {
  return (
    <aside className="p-4 border rounded-md space-y-4">
      <div>
        <h4 className="font-semibold">Categoría</h4>
        <select
          value={selected ?? ''}
          onChange={(e) => onSelectCategory(e.target.value === '' ? null : e.target.value)}
          className="w-full p-2 rounded-md border"
        >
          <option value="">Todas</option>
          {categories.map((c: Category) => (
            <option value={c.slug} key={c.slug}>{c.name}</option>
          ))}
        </select>
      </div>

       <div>
        <h4 className="font-semibold">Ordenar por</h4>
        <select
          value={sortBy ?? ''}
          onChange={(e) => {
            const value = e.target.value as 'price' | 'title' | 'rating' | 'stock' | '';
            onChangeSortBy(value);
          }}
          className="w-full p-2 rounded-md border"
        >
          <option value="">Sin ordenar</option>
          <option value="price">Precio</option>
          <option value="title">Titulo</option>
          <option value="rating">Rating</option>
          <option value="stock">Stock</option>
        </select>
      </div>


    <div>
        <h4 className="font-semibold">Orden</h4>
        <select
            value={order ?? ''}
            onChange={(e) => {
                const value = e.target.value as 'asc' | 'desc' | '';
                onChangeOrder(value);
            }}
            className="w-full p-2 rounded-md border"
        >
            <option value="">Sin ordenar</option>
            <option value="asc">menor a mayor</option>
            <option value="desc">mayor a menor</option>
        </select>
    </div>

     
    </aside>
  )
}
