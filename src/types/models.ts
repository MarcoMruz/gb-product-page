import { optional } from "@/utils/utils";
import * as t from "io-ts";

const SportNutritionLabel = t.type({
  type: t.number,
  label_text: t.string,
  image: t.string,
  image_size: t.string,
  position: t.number,
  style: t.string,
});

const SportNutrition = t.type({
  id: t.number,
  sku: t.string,
  name: t.string,
  price: t.number,
  formatted_price: t.string,
  product_url: t.string,
  image: t.string,
  thumbnail: t.string,
  small_image: t.string,
  reviews_count: t.number,
  rating_summary: t.number,
  saleable: t.boolean,
  form_inputs: t.string,
  form_action: t.string,
  labels: t.array(SportNutritionLabel),
});

export type SportNutrition = t.TypeOf<typeof SportNutrition>;

const SportNutritionFilterOptions = t.type({
  name: optional(t.union([t.string, t.boolean])),
  slug: t.union([t.string, t.null]),
  count: t.number,
  value: t.string,
});

const SportNutritionFilter = t.type({
  name: t.string,
  code: t.string,
  global_name: t.string,
  display_mode: optional(t.string),
  type: t.union([
    t.literal("range"),
    t.literal("multiselect"),
    t.literal("checkbox"),
  ]),
  position: optional(t.union([t.number, t.string])),
  options: optional(t.array(SportNutritionFilterOptions)),
  min: optional(t.number),
  max: optional(t.number),
});

export type SportNutritionFilter = t.TypeOf<typeof SportNutritionFilter>;

const PageInfoPages = t.type({
  url: t.string,
  label: t.union([t.string, t.number]),
  active: t.boolean,
  class_name: t.string,
  page: t.number,
});

const PageInfoMeta = t.type({
  pages: t.array(PageInfoPages),
  current_page: t.number,
  last_page: t.number,
  from: t.number,
  to: t.number,
  total: t.number,
  per_page: t.number,
  next_url: t.union([t.string, t.null]),
  next_page: t.union([t.number, t.null]),
});

export type PageInfoMeta = t.TypeOf<typeof PageInfoMeta>;

export const SportNutritionListResponse = t.type({
  items: optional(t.array(SportNutrition)),
  meta: PageInfoMeta,
  filters: t.array(SportNutritionFilter),
});
