import { NextResponse } from "next/server";

const BASE_URL = "https://dummyjson.com/products";


export async function GET(req: Request) {
const { searchParams } = new URL(req.url);
const q = searchParams.get("q");
const category = searchParams.get("category");
const limit = searchParams.get("limit") ?? "20";
const skip = searchParams.get("skip") ?? "0";
const delay = parseInt(searchParams.get("delay") ?? "0", 10);
const sort = searchParams.get("sort") ?? "";
const sortBy = searchParams.get("sortBy") ?? "";

if (delay > 0) {
await new Promise((resolve) => setTimeout(resolve, delay));
}

let endpoint = `${BASE_URL}`;

if (q) {
  endpoint += `/search?q=${encodeURIComponent(q)}`;
} else if (category) {
  endpoint += `/category/${encodeURIComponent(category)}`;
}  else {
  endpoint += `?limit=${limit}&skip=${skip}&order=${sort}&sortBy=${sortBy}`;
}


const res = await fetch(endpoint, {signal: req.signal});
const data = await res.json();
return NextResponse.json(data);
}