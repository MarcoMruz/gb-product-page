import { FC } from "react";
import { Tag } from "../tag";
import { HStack } from "../h-stack";
import { Input } from "../input";
import { Spacer } from "../spacer";
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
                return [label[0], label[1]];
              }

              return null;
            })
            .filter(omitNullValue),
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

const FilterCheckbox: FC<CheckboxProps> = ({ label, onClick, isChecked }) => {
  return (
    <HStack onClick={onClick} spacing={2}>
      <input type="checkbox" className="form-checkbox" checked={isChecked} />
      <span>{label}</span>
    </HStack>
  );
};

const FilterRange: FC<RangeProps> = ({ min, max, value, onChange }) => {
  const handleOnMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value));
  };

  return (
    <>
      <label htmlFor="price-range">Price Range: ({value})</label>
      <Input
        id="price-range"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleOnMinChange}
      />
      <HStack spacing={2} className="w-full">
        <span>{min}</span>
        <Spacer />
        <span>{max}</span>
      </HStack>
    </>
  );
};

export { FilterMultiSelect, FilterCheckbox, FilterRange };
