import { classNames } from "@/utils/utils";
import { textConfig } from "./config";
import { FCWithChildren } from "@/types/common";

type Props = {
  className?: string;
  size?: keyof typeof textConfig.size;
  weight?: keyof typeof textConfig.weight;
  color?: keyof typeof textConfig.color;
  align?: keyof typeof textConfig.align;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Heading: FCWithChildren<Props> = ({
  children,
  className = "",
  size = "xl",
  weight = "normal",
  color = "black",
  align = "left",
  ...props
}) => {
  const classnames = classNames(
    textConfig.size[size],
    textConfig.weight[weight],
    textConfig.color[color],
    textConfig.align[align],
    className
  );

  return (
    <h1 className={classnames} {...props}>
      {children}
    </h1>
  );
};

export default Heading;
