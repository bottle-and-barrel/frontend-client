export type ProductStatus = "visible" | "hidden";
export type ProductImage = string[];

export interface Product {
  id: number;
  sku: string;
  name: string;
  description: string;
  status: ProductStatus;
  slug: string;
  price: number;
  images?: ProductImage;
}
