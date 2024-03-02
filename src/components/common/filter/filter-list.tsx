"use client";

import { SportNutritionFilter } from "@/types/models";
import { FC, Fragment, useCallback, useEffect, useState } from "react";
import { VStack } from "../v-stack";
import { FilterMultiSelect } from "./filter-label";
import { makeApiSearchQueryFromFilters, omitNullValue } from "@/utils/utils";
import { HStack } from "../h-stack";
import { Text } from "../text";
import Button from "../button";
import { Spacer } from "../spacer";
import { useFilters } from "@/hooks/use-filters";
import { handleOnMultiSelectClick } from "@/utils/sport-nutrition.utils";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type Props = {
  filters: SportNutritionFilter[];
  className?: string;
};

const FilterList: FC<Props> = ({ filters, className }) => {
  const stateAndActions = useFilters();
  const searchParams = useSearchParams();
  const [canShowFilters, setCanShowFilters] = useState(false);

  const handleOnApplyFiltersClick = useCallback(() => {
    console.log(makeApiSearchQueryFromFilters(filters, stateAndActions));
    return makeApiSearchQueryFromFilters(filters, stateAndActions);
  }, [stateAndActions, filters]);

  return (
    <>
      {canShowFilters && (
        <VStack spacing={2} className={className}>
          {filters.map((filter) => (
            <Fragment key={filter.code}>
              {filter.type === "multiselect" && (
                <HStack spacing={5}>
                  <Text>{filter.name}</Text>
                  <FilterMultiSelect
                    labels={filter
                      .options!.map((option): [string, string] | null => {
                        if (typeof option.name === "string") {
                          return [option.value, option.name];
                        }

                        return null;
                      })
                      .filter(omitNullValue)
                      .slice(0, 5)}
                    selectedFilters={
                      // @ts-ignore
                      stateAndActions[filter.code]
                    }
                    onClick={(value) => {
                      handleOnMultiSelectClick(filter, stateAndActions, value);
                    }}
                  />
                </HStack>
              )}
            </Fragment>
          ))}
        </VStack>
      )}

      <HStack spacing={3}>
        <Spacer />
        <Button
          onClick={() => {
            setCanShowFilters(!canShowFilters);
          }}
          className="bg-gray-200 border border-gray-500 text-gray-500 rounded-md hover:bg-gray-300 hover:border-gray-600 hover:text-gray-600 my-5"
        >
          <span className="mx-2 my-4">
            {canShowFilters ? "Hide filters" : "Show filters"}
          </span>
        </Button>
        <Button
          onClick={() => {
            stateAndActions.clearFilters();
          }}
          className="bg-gray-200 border border-gray-500 text-gray-500 rounded-md hover:bg-gray-300 hover:border-gray-600 hover:text-gray-600 my-5"
        >
          <span className="mx-2 my-4">Clear filters</span>
        </Button>
        <Link
          href={`?${handleOnApplyFiltersClick()}`}
          onClick={handleOnApplyFiltersClick}
          className="bg-gray-200 border border-gray-500 text-gray-500 rounded-md hover:bg-gray-300 hover:border-gray-600 hover:text-gray-600 my-5"
        >
          <span className="mx-2 my-4">Apply filters</span>
        </Link>
      </HStack>
    </>
  );
};

export default FilterList;
