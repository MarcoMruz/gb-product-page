import { FCWithChildren } from "@/types/common";
import { classNames } from "@/utils/utils";
import { gridConfig } from "../config";

type Props = {
  cols?: keyof typeof gridConfig.cols;
  gap?: keyof typeof gridConfig.gap;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

const Grid: FCWithChildren<Props> = ({
  children,
  className,
  cols = 3,
  gap = 4,
  ...props
}) => {
  const classes = classNames(
    "grid",
    className,
    gridConfig.cols[cols],
    gridConfig.gap[gap],
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Grid;
