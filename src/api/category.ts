import { Product } from "./product";

export interface Category {
  name: string;
  slug: string;
  products: Product[];
}

const categories = [
  {
    name: "Вино",
    slug: "wine",
    products: [
      {
        id: 1,
        name: "Вино Shiraz Mr Borio's, Simonsig, 2021",
        description:
          "Светло-соломенный цвет с зеленоватыми оттенками. Аромат с тонами цветов, миндаля и экзотических фруктов. Сбалансированное, освежающее вино с гармоничной кислотностью, гармоничным сочетанием фруктового вкуса и минеральной солёности в послевкусии.",
        price: 2490,
        sku: "147564",
        slug: "shiraz_mr_borio_s_2021",
        status: "visible",
      },
    ],
  },
  { name: "Шампанское и игристое", slug: "champagne", products: [] },
  { name: "Виски", slug: "whiskey", products: [] },
  { name: "Коньяк", slug: "cognac", products: [] },
  { name: "Крепкие напитки", slug: "ksn", products: [] },
  { name: "Пиво", slug: "beer", products: [] },
  { name: "Вода", slug: "water", products: [] },
  { name: "Безалкогольные напитки", slug: "drinks", products: [] },
] satisfies Category[];

export async function all() {
  return categories;
}

export async function getBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
