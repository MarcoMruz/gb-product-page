"use client";

import { SportNutritionFilter } from "@/types/models";
import { FC, Fragment, useCallback, useState } from "react";
import { VStack } from "../v-stack";
import { FilterMultiSelect } from "./filter-label";
import {
  INITIAL_FILTERS,
  makeApiSearchQueryFromFilters,
  omitNullValue,
} from "@/utils/utils";
import { HStack } from "../h-stack";
import { Text } from "../text";
import Button from "../button";
import { Spacer } from "../spacer";
import { useFilters } from "@/hooks/use-filters";
import { handleOnMultiSelectClick } from "@/utils/sport-nutrition.utils";
import Link from "next/link";
import { useDisclosure } from "@/hooks";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "../modal";
import Center from "../center";

type Props = {
  filters: SportNutritionFilter[];
  className?: string;
};

const FilterList: FC<Props> = ({ filters, className }) => {
  const stateAndActions = useFilters();
  const [canShowFilters, setCanShowFilters] = useState(false);
  const { close, isOpen, open } = useDisclosure();
  const [selectedFilterLabel, setSelectedFilterLabel] = useState<string | null>(
    null,
  );

  const handleOnApplyFiltersClick = useCallback(() => {
    return makeApiSearchQueryFromFilters(filters, stateAndActions);
  }, [stateAndActions, filters]);

  const multiselectOptions = (filter: SportNutritionFilter) =>
    filter!
      .options!.map((option): [string, string] | null => {
        if (typeof option.name === "string") {
          return [option.value, option.name];
        }

        return null;
      })
      .filter(omitNullValue);

  const selectedFilterName = filters.find(
    (filter) => filter.code === selectedFilterLabel,
  )?.name;
  const selectedFilterOptions =
    filters.find((filter) => filter.code === selectedFilterLabel)?.options ??
    [];
  const selectedFilter = filters.find(
    (filter) => filter.code === selectedFilterLabel,
  );

  return (
    <>
      <Modal isOpen={isOpen} onClose={close} size="md">
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <Text>{selectedFilterName ?? "Unknown filter"}</Text>
          </ModalHeader>

          <ModalBody>
            {selectedFilterOptions.length === 0 && (
              <Center>No available options</Center>
            )}
            {selectedFilter == null && <Center>Unknown filter</Center>}
            {selectedFilter != null && selectedFilterOptions.length >= 1 && (
              <FilterMultiSelect
                showAll
                labels={selectedFilterOptions
                  .map((option): [string, string] | null => {
                    if (typeof option.name === "string") {
                      return [option.value, option.name];
                    }

                    return null;
                  })
                  .filter(omitNullValue)}
                selectedFilters={
                  // @ts-ignore
                  stateAndActions[selectedFilter.code]
                }
                onClick={(value) => {
                  handleOnMultiSelectClick(
                    selectedFilter,
                    stateAndActions,
                    value,
                  );
                }}
              />
            )}
          </ModalBody>

          <ModalFooter>
            <HStack className="w-full my-5" spacing={2}>
              <Spacer />
              <Button onClick={close}>Close</Button>
              <Link
                href={`?${handleOnApplyFiltersClick()}`}
                onClick={() => {
                  close();
                  handleOnApplyFiltersClick();
                }}
                className="bg-gray-200 border border-gray-500 text-gray-500 rounded-md hover:bg-gray-300 hover:border-gray-600 hover:text-gray-600 my-5"
              >
                <span className="mx-2 my-4">Apply filters</span>
              </Link>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
