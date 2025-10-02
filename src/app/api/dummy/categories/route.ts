import { NextResponse } from "next/server";

const BASE_URL = "https://dummyjson.com/products";

export async function GET(req: Request) {
const res = await fetch(`${BASE_URL}/categories`, {signal: req.signal});
const data = await res.json();
return NextResponse.json(data);
}