import { omitNullValue } from "@/utils/utils";
import Link from "next/link";
import Button from "../button";
import Center from "../center";
import Text from "../text";
import HStack from "../h-stack";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "../modal";
import Spacer from "../spacer";
import FilterMultiSelect from "./filter-multiselect";
import { SportNutritionFilter } from "@/types/models";
import { FC } from "react";
import { SportNutritionState } from "@/hooks/use-filters";
import { isKeyOfSportNutritionState } from "@/utils/sport-nutrition.utils";
import Heading from "../heading";

type Props = {
  selectedFilter: SportNutritionFilter;
  isOpen: boolean;
  selectedFilters: SportNutritionState;
  onFilterLabelClick: (label: string) => void;
  onClose: () => void;
  onApplyFiltersClick: () => string;
};

const FilterListModal: FC<Props> = ({
  isOpen,
  onClose,
  selectedFilter,
  selectedFilters,
  onApplyFiltersClick,
  onFilterLabelClick,
}) => {
  const selectedFilterOptions = selectedFilter.options ?? [];
  const selectedFilterCode = selectedFilter.code;
  const canShowAllFilters =
    isKeyOfSportNutritionState(selectedFilterCode) &&
    selectedFilter != null &&
    selectedFilterOptions.length >= 1;
  const selectedFilterOptionsTuple = selectedFilterOptions
    .map((option): [string, string] | null => {
      if (typeof option.name === "string") {
        return [option.value, option.name];
      }

      return null;
    })
    .filter(omitNullValue);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>
          <Text>{selectedFilter.name ?? "Unknown filter"}</Text>
        </ModalHeader>

        <ModalBody>
          {!isKeyOfSportNutritionState(selectedFilterCode) && (
            <Center>
              <Heading>
                Sorry for any inconviniences. Currently we are not supporting
                filter you are trying to use.
              </Heading>
            </Center>
          )}
          {selectedFilterOptions.length === 0 && (
            <Center>No available options</Center>
          )}
          {selectedFilter == null && <Center>Unknown filter</Center>}
          {canShowAllFilters && (
            <FilterMultiSelect
              showAll
              labels={selectedFilterOptionsTuple}
              selectedFilters={selectedFilters[selectedFilterCode]}
              onClick={onFilterLabelClick}
            />
          )}
        </ModalBody>

        <ModalFooter>
          <HStack className="w-full my-5" spacing={2}>
            <Spacer />
            <Button onClick={onClose}>Close</Button>
            <Link
              href={`?${onApplyFiltersClick()}`}
              onClick={() => {
                onClose();
                onApplyFiltersClick();
              }}
              className="bg-gray-200 border border-gray-500 text-gray-500 rounded-md hover:bg-gray-300 hover:border-gray-600 hover:text-gray-600 my-5"
            >
              <span className="mx-2 my-4">Apply filters</span>
            </Link>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FilterListModal;
