import { Heading } from "@/components/common/heading";
import { Suspense, useState } from "react";
import Loading from "./loading";
import { decodeSportNutritionListResponse } from "@/utils/sport-nutrition.utils";
import SportNutritionThumbnail from "@/components/sports-nutrition/thumbnail";
import Grid from "@/components/common/grid/grid";
import GridItem from "@/components/common/grid/grid-item";
import { Container } from "@/components/common/container";
import Breadcrumb from "@/components/common/breadcrumb";
import SportNutritionList from "@/components/sports-nutrition/list";
import FilterList from "@/components/common/filter/filter-list";
import Button from "@/components/common/button";

type Params = {
  page: number;
  perPage: number;
  filters: {
    category: string;
    brand: string;
    price: {
      min: number;
      max: number;
    };
  };
};

async function loadProducts({ filters, page, perPage }: Params) {
  const response = await fetch(
    "https://gymbeam.sk/rest/V1/gb/catalog/products?category_ids[]=2416",
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok || response.json == null) {
    throw new Error("Failed to load products");
  }

  const json = await response.json();
  const products = decodeSportNutritionListResponse(json);

  console.log(products.filters.map((filter) => filter.code));

  return products;
}

export default async function SportsNutrion() {
  const response = await loadProducts({
    filters: { category: "protein", brand: "", price: { min: 0, max: 100 } },
    page: 1,
    perPage: 10,
  });

  const { items: products, filters } = response;

  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <Breadcrumb items={["Sports nutrition"]} />
        <FilterList filters={filters} />
        <SportNutritionList products={products} />
      </Container>
    </Suspense>
  );
}
