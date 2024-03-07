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

type Props = {
  selectedFilter: SportNutritionFilter;
  isOpen: boolean;
  onFilterLabelClick: (label: string) => void;
  onClose: () => void;
  onApplyFiltersClick: () => string;
};

const FilterListModal: FC<Props> = ({
  isOpen,
  onClose,
  selectedFilter,
  onApplyFiltersClick,
  onFilterLabelClick,
}) => {
  const selectedFilterOptions = selectedFilter.options ?? [];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>
          <Text>{selectedFilter.name ?? "Unknown filter"}</Text>
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
                // this ts-ignore rule is helping us to be able dynamically access the stateAndActions object based on selected filter that is used as a key
                // we are using same naming convention for the stateAndActions object keys and filter codes that are returned from the server
                // @ts-ignore
                stateAndActions[selectedFilter.code]
              }
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
