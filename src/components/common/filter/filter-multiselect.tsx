import { FC } from "react";
import { Tag } from "../tag";
import { omitNullValue } from "@/utils/utils";

type MultiSelectProps = {
  labels: [string, string][];
  selectedFilters: string[];
  onClick: (value: string) => void;
  showAll?: boolean;
};

const FilterMultiSelect: FC<MultiSelectProps> = ({
  labels,
  selectedFilters,
  onClick,
  showAll = false,
}) => {
  const showedLabels = labels.slice(0, showAll ? labels.length : 5);
  const showedLabelsWithSelectedOnes = showedLabels.concat(
    labels
      .map((label): [string, string] | null => {
        const isInShowed =
          showedLabels.findIndex((l) => l[0] === label[0]) >= 0;
        const isSelected = selectedFilters.includes(label[0]);

        if (!isInShowed && isSelected && !showAll) {
          return label;
        }

        return null;
      })
      .filter(omitNullValue)
  );

  return (
    <div>
      {showedLabelsWithSelectedOnes.map((label) => (
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
