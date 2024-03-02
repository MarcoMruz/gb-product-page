import { FC } from "react";
import { Tag } from "../tag";
import { HStack } from "../h-stack";
import { Input } from "../input";
import { Spacer } from "../spacer";

type MultiSelectProps = {
  labels: [string, string][];
  selectedFilters: string[];
  onClick: (value: string) => void;
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
}) => {
  return (
    <div>
      {labels.map((label) => (
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
