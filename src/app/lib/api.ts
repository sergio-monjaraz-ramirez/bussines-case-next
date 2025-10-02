import { Category, Product } from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: "/api/dummy",
});

export const fetchProducts = async (params: {
  q?: string;
  category?: string | null;
  delay?: number;
  sort?: "asc" | "desc" | '';
  sortBy?: 'price' | 'title' | 'rating' | 'stock' | '';
  page?: number;
}) => {
  const { q, category, delay, sort, sortBy, page = 1 } = params;
  const limit = 20;
  const skip = (page - 1) * limit;

  const res = await api.get("/products", {
    params: {
      q,
      category,
      limit,
      skip,
      delay,
      sort,
      sortBy
    },
  },);

  return res.data;
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await api.get(`/products/${id}`);
  if (response.data.message) {
    throw new Error('Product not found');
  }
  return response.data;
};

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await api.get("/categories");
  return response.data;
};