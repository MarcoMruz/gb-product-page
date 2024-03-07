"use client";

import { SportNutritionFilter } from "@/types/models";
import { FC, Fragment, memo, useCallback, useState } from "react";
import VStack from "../v-stack";
import FilterMultiSelect from "./filter-multiselect";
import { makeApiSearchQueryFromFilters, omitNullValue } from "@/utils/utils";
import HStack from "../h-stack";
import Text from "../text";
import Button from "../button";
import Spacer from "../spacer";
import { useFilters } from "@/hooks/use-filters";
import {
  handleOnMultiSelectClick,
  isKeyOfSportNutritionState,
} from "@/utils/sport-nutrition.utils";
import Link from "next/link";
import { useDisclosure } from "@/hooks";
import FilterListModal from "./filter-list-modal";

type Props = {
  filters: SportNutritionFilter[];
  className?: string;
};

const FilterList: FC<Props> = memo(({ filters, className }) => {
  const { state, actions } = useFilters();
  const [canShowFilters, setCanShowFilters] = useState(false);
  const { close, isOpen, open } = useDisclosure();
  const [selectedFilterLabel, setSelectedFilterLabel] = useState<string | null>(
    null
  );

  const handleOnApplyFiltersClick = useCallback(() => {
    return makeApiSearchQueryFromFilters(filters, state);
  }, [state, filters]);

  const multiselectOptions = (filter: SportNutritionFilter) =>
    filter!
      .options!.map((option): [string, string] | null => {
        if (typeof option.name === "string") {
          return [option.value, option.name];
        }

        return null;
      })
      .filter(omitNullValue);

  const selectedFilter =
    filters.find((filter) => filter.code === selectedFilterLabel) ?? null;

  return (
    <>
      {selectedFilter != null && (
        <FilterListModal
          isOpen={isOpen}
          onClose={close}
          selectedFilter={selectedFilter}
          selectedFilters={state}
          onApplyFiltersClick={handleOnApplyFiltersClick}
          onFilterLabelClick={(value) =>
            handleOnMultiSelectClick(selectedFilter, actions, value)
          }
        />
      )}
      {canShowFilters && (
        <VStack spacing={2} className={className}>
          {filters.map((filter) => (
            <Fragment key={filter.code}>
              {filter.type === "multiselect" && (
                <HStack spacing={5}>
                  <Text
                    title="see all filters"
                    className="cursor-pointer"
                    onClick={() => {
                      setSelectedFilterLabel(filter.code);
                      open();
                    }}
                  >
                    {filter.name}
                  </Text>
                  <FilterMultiSelect
                    labels={multiselectOptions(filter)}
                    selectedFilters={
                      isKeyOfSportNutritionState(filter.code)
                        ? state[filter.code]
                        : []
                    }
                    onClick={(value) => {
                      handleOnMultiSelectClick(filter, actions, value);
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
            actions.clearFilters();
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
});

FilterList.displayName = "FilterList";
export default FilterList;
