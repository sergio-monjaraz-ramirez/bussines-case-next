export type FetchProductsParams = {
  q?: string;
  category?: string | null;
  delay?: number;
  sort?: "asc" | "desc" | '';
  sortBy?: 'price' | 'title' | 'rating' | 'stock' | '';
  page?: number;
};

export type SearchProps = {
  onChange: (v: string) => void;
};

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  meta: {
    barcode: string;
    createdAt: string;
    updatedAt: string;
    qrCode: string;
  },
  reviews: {
    date: string;
    rating: number;
    comment: string;
  }[];
}

export interface Category {
  name: string;
  slug: string;
  url?: string;
}

export interface PaginationProps {
  page: number;
  total: number | undefined;
  onPrevious: () => void;
  onNext: () => void;
}

export interface DataChartProps {
  data: DataChart[];
}

export interface DataChart {
  date: string;
  rating: number;
}
