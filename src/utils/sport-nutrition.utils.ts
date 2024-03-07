import {
  SportNutritionFilter,
  SportNutritionListResponse,
} from "@/types/models";
import { extractResult } from "./utils";
import {
  SportNutritionActions,
  SportNutritionState,
} from "@/hooks/use-filters";

export const INITIAL_FILTERS: SportNutritionState = {
  default_category: [],
  tea_package: [],
  manufacturer: [],
  flavor: [],
  mass_grams_g: [],
  mass_mililiter_ml: [],
  tablets: [],
  colors: [],
  capsules: [],
  form: [],
  blend: [],
  method_of_protein_processing: [],
  protein_sourcee: [],
  legal_category_of_product: [],
  product_labels: [],
};

export function decodeSportNutritionListResponse(data: unknown) {
  return extractResult(SportNutritionListResponse.decode(data));
}

export function handleOnMultiSelectClick(
  filter: SportNutritionFilter,
  actions: SportNutritionActions,
  value: string | boolean | number
) {
  switch (filter.code) {
    case "default_category":
      actions.setMainCategory(String(value));
      break;
    case "tea_package":
      actions.setPackagingTeas(String(value));
      break;
    case "manufacturer":
      actions.setBrand(String(value));
      break;
    case "flavor":
      actions.setFlavor(String(value));
      break;
    case "mass_grams_g":
      actions.setPackagingG(String(value));
      break;
    case "mass_mililiter_ml":
      actions.setPackagingMl(String(value));
      break;
    case "tablets":
      actions.setTablets(String(value));
      break;
    case "colors":
      actions.setColor(String(value));
      break;
    case "capsules":
      actions.setCapsules(String(value));
      break;
    case "form":
      actions.setForm(String(value));
      break;
    case "blend":
      actions.setBlend(String(value));
      break;
    case "method_of_protein_processing":
      actions.setProteinProcessingMethod(String(value));
      break;
    case "protein_sourcee":
      actions.setProteinSource(String(value));
      break;
    case "legal_category_of_product":
      actions.setLegalProductCategory(String(value));
      break;
    case "product_labels":
      actions.setProductLabels(String(value));
      break;
    default:
      break;
  }
}

export function isKeyOfSportNutritionState(
  key: string
): key is keyof SportNutritionState {
  return key in INITIAL_FILTERS;
}
