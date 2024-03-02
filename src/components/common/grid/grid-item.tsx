import { FCWithChildren } from "@/types/common";
import { classNames } from "@/utils/utils";

const GridItem: FCWithChildren<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const classes = classNames("grid-item", className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default GridItem;
