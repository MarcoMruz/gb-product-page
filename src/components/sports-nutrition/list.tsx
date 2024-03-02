import { SportNutrition } from "@/types/models";
import { FC } from "react";
import Grid from "../common/grid/grid";
import GridItem from "../common/grid/grid-item";
import SportNutritionThumbnail from "./thumbnail";

type Props = {
  products: SportNutrition[];
};

const SportNutritionList: FC<Props> = ({ products }) => {
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
