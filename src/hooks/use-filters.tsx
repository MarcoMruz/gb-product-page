"use client";

import { INITIAL_FILTERS } from "@/utils/utils";
import { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";
import { createStore } from "zustand";

export type SportNutritionState = {
  default_category: string[];
  tea_package: string[];
  manufacturer: string[];
  flavor: string[];
  mass_grams_g: string[];
  mass_mililiter_ml: string[];
  tablets: string[];
  colors: string[];
  capsules: string[];
  form: string[];
  blend: string[];
  vegetarian: boolean;
  vegan: boolean;
  glutenfree: boolean;
  lactosefree: boolean;
  bio: boolean;
  method_of_protein_processing: string[];
  protein_sourcee: string[];
  gmo_free: boolean;
  artificial_sweetener_free: boolean;
  plastic_packaging_free: boolean;
  aspartame_free: boolean;
  legal_category_of_product: string[];
  product_labels: string[];
  price: number;
};

export type SportNutritionActions = {
  setMainCategory: (mainCategory: string) => void;
  setPackagingTeas: (packagingTeas: string) => void;
  setBrand: (brand: string) => void;
  setFlavor: (flavor: string) => void;
  setPackagingG: (packagingG: string) => void;
  setPackagingMl: (packagingMl: string) => void;
  setTablets: (tablets: string) => void;
  setColor: (color: string) => void;
  setCapsules: (capsules: string) => void;
  setForm: (form: string) => void;
  setBlend: (blend: string) => void;
  setVegetarian: (vegetarian: boolean) => void;
  setVegan: (vegan: boolean) => void;
  setGlutenFree: (glutenFree: boolean) => void;
  setLactoseFree: (lactoseFree: boolean) => void;
  setOrganic: (organic: boolean) => void;
  setProteinProcessingMethod: (proteinProcessingMethod: string) => void;
  setProteinSource: (proteinSource: string) => void;
  setNonGMO: (nonGMO: boolean) => void;
  setNoArtificialSweeteners: (noArtificialSweeteners: boolean) => void;
  setNoPlasticPackaging: (noPlasticPackaging: boolean) => void;
  setLegalProductCategory: (legalProductCategory: string) => void;
  setProductLabels: (productLabels: string) => void;
  setNoAspartame: (noAspartame: boolean) => void;
  setPrice: (price: number) => void;
  clearFilters: () => void;
};

const createFilterStore = (init: SportNutritionState = INITIAL_FILTERS) =>
  createStore<SportNutritionState & SportNutritionActions>((set) => ({
    ...init,
    setMainCategory: (default_category) =>
      set((state) => {
        if (state.default_category.includes(default_category)) {
          return {
            ...state,
            default_category: state.default_category.filter(
              (item) => item !== default_category,
            ),
          };
        }
        return {
          ...state,
          default_category: [...state.default_category, default_category],
        };
      }),
    setPackagingTeas: (tea_package) =>
      set((state) => {
        if (state.tea_package.includes(tea_package)) {
          return {
            ...state,
            tea_package: state.tea_package.filter(
              (item) => item !== tea_package,
            ),
          };
        }
        return {
          ...state,
          tea_package: [...state.tea_package, tea_package],
        };
      }),
    setBrand: (manufacturer) =>
      set((state) => {
        if (state.manufacturer.includes(manufacturer)) {
          return {
            ...state,
            manufacturer: state.manufacturer.filter(
              (item) => item !== manufacturer,
            ),
          };
        }
        return {
          ...state,
          manufacturer: [...state.manufacturer, manufacturer],
        };
      }),
    setFlavor: (flavor) =>
      set((state) => {
        if (state.flavor.includes(flavor)) {
          return {
            ...state,
            flavor: state.flavor.filter((item) => item !== flavor),
          };
        }
        return {
          ...state,
          flavor: [...state.flavor, flavor],
        };
      }),
    setPackagingG: (mass_grams_g) =>
      set((state) => {
        if (state.mass_grams_g.includes(mass_grams_g)) {
          return {
            ...state,
            mass_grams_g: state.mass_grams_g.filter(
              (item) => item !== mass_grams_g,
            ),
          };
        }
        return {
          ...state,
          mass_grams_g: [...state.mass_grams_g, mass_grams_g],
        };
      }),
    setPackagingMl: (mass_mililiter_ml) =>
      set((state) => {
        if (state.mass_mililiter_ml.includes(mass_mililiter_ml)) {
          return {
            ...state,
            mass_mililiter_ml: state.mass_mililiter_ml.filter(
              (item) => item !== mass_mililiter_ml,
            ),
          };
        }
        return {
          ...state,
          mass_mililiter_ml: [...state.mass_mililiter_ml, mass_mililiter_ml],
        };
      }),
    setTablets: (tablets) =>
      set((state) => {
        if (state.tablets.includes(tablets)) {
          return {
            ...state,
            tablets: state.tablets.filter((item) => item !== tablets),
          };
        }
        return {
          ...state,
          tablets: [...state.tablets, tablets],
        };
      }),
    setColor: (color) =>
      set((state) => {
        if (state.colors.includes(color)) {
          return {
            ...state,
            colors: state.colors.filter((item) => item !== color),
          };
        }
        return {
          ...state,
          colors: [...state.colors, color],
        };
      }),
    setCapsules: (capsules) =>
      set((state) => {
        if (state.capsules.includes(capsules)) {
          return {
            ...state,
            capsules: state.capsules.filter((item) => item !== capsules),
          };
        }
        return {
          ...state,
          capsules: [...state.capsules, capsules],
        };
      }),
    setForm: (form) =>
      set((state) => {
        if (state.form.includes(form)) {
          return {
            ...state,
            form: state.form.filter((item) => item !== form),
          };
        }
        return {
          ...state,
          form: [...state.form, form],
        };
      }),
    setBlend: (blend) =>
      set((state) => {
        if (state.blend.includes(blend)) {
          return {
            ...state,
            blend: state.blend.filter((item) => item !== blend),
          };
        }
        return {
          ...state,
          blend: [...state.blend, blend],
        };
      }),
    setProteinProcessingMethod: (method_of_protein_processing) =>
      set((state) => {
        if (
          state.method_of_protein_processing.includes(
            method_of_protein_processing,
          )
        ) {
          return {
            ...state,
            method_of_protein_processing:
              state.method_of_protein_processing.filter(
                (item) => item !== method_of_protein_processing,
              ),
          };
        }
        return {
          ...state,
          method_of_protein_processing: [
            ...state.method_of_protein_processing,
            method_of_protein_processing,
          ],
        };
      }),
    setProteinSource: (protein_source) =>
      set((state) => {
        if (state.protein_sourcee.includes(protein_source)) {
          return {
            ...state,
            protein_sourcee: state.protein_sourcee.filter(
              (item) => item !== protein_source,
            ),
          };
        }
        return {
          ...state,
          protein_sourcee: [...state.protein_sourcee, protein_source],
        };
      }),
    setLegalProductCategory: (legal_category_of_product) =>
      set((state) => {
        if (
          state.legal_category_of_product.includes(legal_category_of_product)
        ) {
          return {
            ...state,
            legal_category_of_product: state.legal_category_of_product.filter(
              (item) => item !== legal_category_of_product,
            ),
          };
        }
        return {
          ...state,
          legal_category_of_product: [
            ...state.legal_category_of_product,
            legal_category_of_product,
          ],
        };
      }),
    setProductLabels: (product_labels) =>
      set((state) => {
        if (state.product_labels.includes(product_labels)) {
          return {
            ...state,
            product_labels: state.product_labels.filter(
              (item) => item !== product_labels,
            ),
          };
        }
        return {
          ...state,
          product_labels: [...state.product_labels, product_labels],
        };
      }),
    setGlutenFree: (glutenfree) => set({ glutenfree }),
    setLactoseFree: (lactosefree) => set({ lactosefree }),
    setNoArtificialSweeteners: (artificial_sweetener_free) =>
      set({ artificial_sweetener_free }),
    setNoAspartame: (aspartame_free) => set({ aspartame_free }),
    setNonGMO: (gmo_free) => set({ gmo_free }),
    setNoPlasticPackaging: (plastic_packaging_free) =>
      set({ plastic_packaging_free }),
    setOrganic: (bio) => set({ bio }),
    setPrice: (price) => set({ price }),
    setVegan: (vegan) => set({ vegan }),
    setVegetarian: (vegetarian) => set({ vegetarian }),
    clearFilters: () => set({ ...INITIAL_FILTERS }),
  }));

type FilterStore = ReturnType<typeof createFilterStore>;
const SportNutritionContext = createContext<FilterStore | null>(null);

type FilterProviderProps = {
  children: React.ReactNode;
  values?: SportNutritionState;
};

export function FilterProvider({ children, values }: FilterProviderProps) {
  const store = useRef<FilterStore>();

  if (!store.current) {
    store.current = createFilterStore(values);
  }

  return (
    <SportNutritionContext.Provider value={store.current}>
      {children}
    </SportNutritionContext.Provider>
  );
}

export function useFilters() {
  const store = useContext(SportNutritionContext);
  if (!store) {
    throw new Error("useFilters must be used within a FilterProvider");
  }

  const result = useStore(store, (state) => ({ ...state }));

  return result;
}
