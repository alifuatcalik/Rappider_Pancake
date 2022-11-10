export class Product {
  products?: Array<ProductDto>;
  total?: number;
  skip?: number;
  limit?: number;
}

export class ProductDto {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
}
