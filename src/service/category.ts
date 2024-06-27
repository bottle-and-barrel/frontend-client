import * as categoryApi from "@/api/category";

export interface Category extends categoryApi.Category {
  link: string;
}

export async function all() {
  const categories = await categoryApi.all();
  return categories.map((c) => ({ ...c, link: `/${c.slug}` }) as Category);
}
