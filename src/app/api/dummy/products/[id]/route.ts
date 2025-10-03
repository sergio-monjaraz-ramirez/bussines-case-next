import { Product } from "@/types";
import { NextResponse } from "next/server";

const BASE_URL = "https://dummyjson.com/products";

export async function GET(_: Request, context: { params: Promise<{ id: string }> }): Promise<NextResponse<Product>> {
  const { id } = await context.params;
  const res = await fetch(`${BASE_URL}/${id}`, { signal: _.signal });
  const data = await res.json();
  return NextResponse.json(data);
}