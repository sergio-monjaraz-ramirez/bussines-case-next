import { Product } from "@/types";
import { NextResponse } from "next/server";

const BASE_URL = "https://dummyjson.com/products";

export async function GET(_: Request, { params }: { params: { id: string } }): Promise<NextResponse<Product>> {
    console.log('Fetching product with id:', params.id);
const res = await fetch(`${BASE_URL}/${params.id}`, {signal: _.signal});
const data = await res.json();
return NextResponse.json(data);
}