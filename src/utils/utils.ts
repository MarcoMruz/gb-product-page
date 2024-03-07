import React from "react";
import { Either, fold } from "fp-ts/lib/Either";
import * as t from "io-ts";
import { PathReporter } from "io-ts/lib/PathReporter";
import { SportNutritionFilter } from "@/types/models";
import { SportNutritionState } from "@/hooks/use-filters";
import { INITIAL_FILTERS } from "./sport-nutrition.utils";

export function classNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export const findElement =
  (element: React.FC<any>) =>
  (child: React.ReactElement<any, string | React.JSXElementConstructor<any>>) =>
    child.type === element;

export const childrenElements = (children: React.ReactNode) =>
  React.Children.map(children, (child) =>
    React.isValidElement(child) ? React.cloneElement(child) : null
  );

export function optional<T, U>(type: t.Type<T, U>) {
  return t.union([type, t.void]);
}

export function extractResult<A>(result: Either<t.Errors, A>): A {
  return fold(
    () => {
      const errorMessages = PathReporter.report(result);
      throw new Error(`BAD_REQUEST: ${errorMessages.join(",")}`);
    },
    (data: A) => data
  )(result);
}

export const getRatingFromNumber = (rating: number): 0 | 1 | 2 | 3 | 4 | 5 => {
  const ratingToNumber = Math.round(rating);

  return ratingToNumber as 0 | 1 | 2 | 3 | 4 | 5;
};

export const makeStarsFromPercentage = (
  percentage: number
): 0 | 1 | 2 | 3 | 4 | 5 => {
  const rating = percentage / 20;

  return getRatingFromNumber(rating);
};

export function omitNullValue<T extends any>(item?: T | null): item is T {
  return item !== null && item !== undefined;
}

export function makeApiSearchQueryFromFilters(
  filters: SportNutritionFilter[],
  filtersState: SportNutritionState
): string {
  const query = filters.reduce((acc, filter) => {
    // @ts-ignore
    const value = filtersState[filter.code];

    if (!value) {
      return acc;
    }

    if (typeof value === "boolean" || typeof value === "number") {
      return acc;
    }

    if (value.length === 0) {
      return acc;
    }

    const params = new URLSearchParams();

    value.forEach((val: string) => {
      params.append(`${filter.code}`, val);
    });

    return `${acc}&${params}`;
  }, "");

  return query;
}

export function convertSearchParamsToFilters(
  params: URLSearchParams
): SportNutritionState {
  const paramsObj: any = {
    ...INITIAL_FILTERS,
    ...Object.fromEntries(params.entries()),
  };
  return Object.keys(paramsObj).reduce((acc, key) => {
    if (Array.isArray(paramsObj[key])) {
      return {
        ...acc,
        [key]: paramsObj[key],
      };
    }

    if (typeof paramsObj[key] === "string") {
      return {
        ...acc,
        [key]: [...paramsObj[key].split(",")],
      };
    }

    return acc;
  }, {} as SportNutritionState);
}
