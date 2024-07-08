import getQueryClient from "@/components/util/query-client";
import { KEY, getBySlug } from "@/service/product";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import CarouselSection from "./components/CarouselSection";
import DescriptionSection from "./components/DescriptionSection";
import PriceSection from "./components/PriceSection";
import ProductSection from "./components/ProductSection";

interface ProductViewPageProps {
  params: { slug: string };
}

export default async function ProductViewPage({
  params,
}: ProductViewPageProps) {
  const queryClient = getQueryClient();
  const queryKey = [KEY, params.slug];

  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => getBySlug(params.slug),
  });

  const productData = queryClient.getQueryData(queryKey);
  if (productData === null) notFound();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr_1fr] md:gap-8">
          <CarouselSection slug={params.slug} />
          <ProductSection slug={params.slug} attributesAnchor="#attributes" />
          <PriceSection slug={params.slug} />
        </div>
        <DescriptionSection slug={params.slug} id="attributes" />
      </div>
    </HydrationBoundary>
  );
}
