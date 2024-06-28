import * as categoryApi from "@/api/category";

export interface Category extends categoryApi.Category {
  link: string;
}

function mapCategory(category: categoryApi.Category) {
  return { ...category, link: `/catalog/${category.slug}` } as Category;
}

export async function all() {
  const categories = await categoryApi.all();
  return categories.map(mapCategory);
}

export async function getBySlug(slug: string) {
  const category = await categoryApi.getBySlug(slug);
  if (!category) return null;
  return mapCategory(category);
}
