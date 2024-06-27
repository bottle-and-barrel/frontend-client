export interface Category {
  name: string;
  slug: string;
}

const categories = [
  { name: "Вино", slug: "err" },
  { name: "Шампанское и игристое", slug: "err" },
  { name: "Виски", slug: "err" },
  { name: "Коньяк", slug: "err" },
  { name: "Крепкие напитки", slug: "err" },
  { name: "Пиво", slug: "err" },
  { name: "Вода", slug: "err" },
  { name: "Безалкогольные напитки", slug: "err" },
] satisfies Category[];

export async function all() {
  return categories;
}
