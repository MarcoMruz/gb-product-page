import { SportNutrition } from "@/types/models";
import { FC } from "react";
import Grid from "../common/grid/grid";
import GridItem from "../common/grid/grid-item";
import SportNutritionThumbnail from "./thumbnail";
import { Heading } from "../common/heading";
import Center from "../common/center";

type Props = {
  products: SportNutrition[];
};

const SportNutritionList: FC<Props> = ({ products }) => {
  if (products.length === 0) {
    return (
      <Center>
        <Heading>No products found. Please try another filters.</Heading>
      </Center>
    );
  }

  return (
    <Grid>
      {products.map((product) => (
        <GridItem key={product.id} className="h-80">
          <SportNutritionThumbnail key={product.id} product={product} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default SportNutritionList;
