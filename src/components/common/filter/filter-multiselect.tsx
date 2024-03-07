import { FC } from "react";
import { Tag } from "../tag";
import { omitNullValue } from "@/utils/utils";

type MultiSelectProps = {
  labels: [string, string][];
  selectedFilters: string[];
  onClick: (value: string) => void;
  showAll?: boolean;
};

type RangeProps = {
  max: number;
  min: number;
  value: number;
  onChange: (value: number) => void;
};

type CheckboxProps = {
  label: string;
  isChecked: boolean;
  onClick: () => void;
};

const FilterMultiSelect: FC<MultiSelectProps> = ({
  labels,
  selectedFilters,
  onClick,
  showAll = false,
}) => {
  return (
    <div>
      {labels
        .slice(0, showAll ? labels.length : 5)
        .concat(
          labels
            .map((label): [string, string] | null => {
              if (selectedFilters.includes(label[0]) && !showAll) {
                return label;
              }

              return null;
            })
            .filter(omitNullValue)
        )
        .map((label) => (
          <Tag
            key={label[0]}
            isSelected={selectedFilters.includes(label[0])}
            onClick={() => onClick(label[0])}
            className="mx-2 cursor-pointer"
          >
            {label[1]}
          </Tag>
        ))}
    </div>
  );
};

export default FilterMultiSelect;
