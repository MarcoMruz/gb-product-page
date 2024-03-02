import { SportNutrition } from "@/types/models";
import { FC } from "react";
import Image from "next/image";
import { VStack } from "../common/v-stack";
import Link from "next/link";
import Card from "../common/card";
import { Text } from "../common/text";
import Rating from "../common/rating";

type Props = {
  product: SportNutrition;
};

const SportNutritionThumbnail: FC<Props> = ({ product }) => {
  return (
    <Link href={`/sports-nutrition/${product.id}`}>
      <Card className="h-full">
        <VStack className="h-full" justify="between">
          <Image
            src={product.image}
            alt={product.name}
            width={150}
            height={150}
            loading="lazy"
            className="h-40 w-40 object-cover mx-auto"
          />
          <VStack className="w-full" spacing={2}>
            <Text className="self-start">{product.name}</Text>
            <Rating
              amount={product.reviews_count}
              percentage={product.rating_summary}
              fontSize="sm"
            />
            <Text color="red" weight="bold">
              from {product.formatted_price}
            </Text>
          </VStack>
        </VStack>
      </Card>
    </Link>
  );
};

export default SportNutritionThumbnail;
