'use client'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts, fetchCategories, fetchProductById } from '../lib/api'
import { FetchProductsParams } from '@/types'

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  })
}

export const useProductById = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
  })
}

export const useProducts = (query: FetchProductsParams) => {
    return useQuery({
        queryKey: ['products', query],
        queryFn: () => fetchProducts(query),
    })
}