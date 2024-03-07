import { classNames } from "@/utils/utils";
import { textConfig } from "./config";

type Props = {
  children?: React.ReactNode;
  className?: string;
  size?: keyof typeof textConfig.size;
  weight?: keyof typeof textConfig.weight;
  color?: keyof typeof textConfig.color;
  align?: keyof typeof textConfig.align;
} & React.HTMLAttributes<HTMLParagraphElement>;

const Text = ({
  children,
  className = "",
  size = "base",
  weight = "normal",
  color = "black",
  align = "left",
  ...props
}: Props) => {
  const classnames = classNames(
    textConfig.size[size],
    textConfig.weight[weight],
    textConfig.color[color],
    textConfig.align[align],
    className
  );
  return (
    <p className={classnames} {...props}>
      {children}
    </p>
  );
};

export default Text;
