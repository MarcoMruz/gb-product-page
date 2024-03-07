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
  vegetarian: false,
  vegan: false,
  glutenfree: false,
  lactosefree: false,
  bio: false,
  method_of_protein_processing: [],
  protein_sourcee: [],
  gmo_free: false,
  artificial_sweetener_free: false,
  plastic_packaging_free: false,
  aspartame_free: false,
  legal_category_of_product: [],
  product_labels: [],
  price: 0,
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
    case "vegetarian":
      actions.setVegetarian(Boolean(value));
      break;
    case "vegan":
      actions.setVegan(Boolean(value));
      break;
    case "glutenfree":
      actions.setGlutenFree(Boolean(value));
      break;
    case "lactosefree":
      actions.setLactoseFree(Boolean(value));
      break;
    case "bio":
      actions.setOrganic(Boolean(value));
      break;
    case "method_of_protein_processing":
      actions.setProteinProcessingMethod(String(value));
      break;
    case "protein_sourcee":
      actions.setProteinSource(String(value));
      break;
    case "gmo_free":
      actions.setNonGMO(Boolean(value));
      break;
    case "artificial_sweetener_free":
      actions.setNoArtificialSweeteners(Boolean(value));
      break;
    case "plastic_packaging_free":
      actions.setNoPlasticPackaging(Boolean(value));
      break;
    case "aspartame_free":
      actions.setNoAspartame(Boolean(value));
      break;
    case "legal_category_of_product":
      actions.setLegalProductCategory(String(value));
      break;
    case "product_labels":
      actions.setProductLabels(String(value));
      break;
    case "price":
      actions.setPrice(Number(value));
      break;
    default:
      break;
  }
}
