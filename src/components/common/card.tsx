import { FCWithChildren } from "@/types/common";
import { classNames } from "@/utils/utils";

const Card: FCWithChildren<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const classes = classNames(
    "bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl",
    className,
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
