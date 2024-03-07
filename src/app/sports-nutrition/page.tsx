import { Suspense } from "react";
import Loading from "./loading";
import { decodeSportNutritionListResponse } from "@/utils/sport-nutrition.utils";
import Container from "@/components/common/container";
import Breadcrumb from "@/components/common/breadcrumb";
import SportNutritionList from "@/components/sports-nutrition/list";
import FilterList from "@/components/common/filter/filter-list";
import { FilterProvider } from "@/hooks/use-filters";
import {
  convertSearchParamsToFilters,
  formatSearchParamsToUrlString,
} from "@/utils/utils";

async function loadProducts(searchParams: Record<string, any>) {
  const apiUrl = formatSearchParamsToUrlString(searchParams);

  const response = await fetch(
    `https://gymbeam.sk/rest/V1/gb/catalog/products?category_ids[]=2416${apiUrl}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok || response.json == null) {
    throw new Error("Failed to load products");
  }

  const json = await response.json();
  const products = decodeSportNutritionListResponse(json);

  return products;
}

export default async function SportsNutrition({
  searchParams,
}: {
  searchParams: Record<string, any>;
}) {
  const response = await loadProducts(searchParams);
  const { items: products, filters } = response;

  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <FilterProvider
          values={{
            ...convertSearchParamsToFilters(new URLSearchParams(searchParams)),
          }}
        >
          <Breadcrumb items={["Sports nutrition"]} />
          <FilterList filters={filters} />
          <SportNutritionList products={products ?? []} />
        </FilterProvider>
      </Container>
    </Suspense>
  );
}
