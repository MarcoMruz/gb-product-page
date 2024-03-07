import { makeStarsFromPercentage } from "@/utils/utils";
import { FC } from "react";
import HStack from "./h-stack";
import Text from "./text";
import { textConfig } from "./config";

type Props = {
  amount: number;
  percentage: number;
  fontSize?: keyof typeof textConfig.size;
  fontWeight?: keyof typeof textConfig.weight;
  fontColor?: keyof typeof textConfig.color;
};

const Stars: FC<{ amount: number }> = ({ amount }) => (
  <div className="flex items-center">
    <svg
      className={`w-4 h-4 fill-current ${
        amount >= 1 ? "text-yellow-400" : "text-gray-400"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 0l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z" />
    </svg>
    <svg
      className={`w-4 h-4 fill-current ${
        amount >= 2 ? "text-yellow-400" : "text-gray-400"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 0l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z" />
    </svg>
    <svg
      className={`w-4 h-4 fill-current ${
        amount >= 3 ? "text-yellow-400" : "text-gray-400"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 0l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z" />
    </svg>
    <svg
      className={`w-4 h-4 fill-current ${
        amount >= 4 ? "text-yellow-400" : "text-gray-400"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 0l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z" />
    </svg>
    <svg
      className={`w-4 h-4 fill-current ${
        amount >= 5 ? "text-yellow-400" : "text-gray-400"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 0l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z" />
    </svg>
  </div>
);

const Rating: FC<Props> = ({
  amount,
  percentage,
  fontColor = "gray",
  fontSize,
  fontWeight,
}) => {
  const stars = makeStarsFromPercentage(percentage);
  return (
    <HStack spacing={1}>
      <Stars amount={stars} />
      <Text color={fontColor} size={fontSize} weight={fontWeight}>
        {percentage}%
      </Text>
      <Text color={fontColor} size={fontSize} weight={fontWeight}>
        ({amount})
      </Text>
    </HStack>
  );
};

export default Rating;
