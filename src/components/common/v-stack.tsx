import { classNames } from "@/utils/utils";
import { config, vstackConfig } from "./config";
import { FCWithChildren } from "@/types/common";

type Props = {
  className?: string;
  spacing?: keyof typeof vstackConfig.spacing;
  rounded?: keyof typeof config.rounded;
  shadow?: keyof typeof config.shadow;
  justify?: keyof typeof vstackConfig.justify;
  align?: keyof typeof vstackConfig.align;
} & React.HTMLAttributes<HTMLDivElement>;

const VStack: FCWithChildren<Props> = ({
  children,
  className = "",
  spacing = 0,
  rounded = "none",
  shadow = "none",
  justify = "start",
  align = "start",
  ...rest
}) => {
  const classnames = classNames(
    `flex flex-col`,
    className,
    vstackConfig.spacing[spacing],
    vstackConfig.justify[justify],
    vstackConfig.align[align],
    config.rounded[rounded],
    config.shadow[shadow]
  );
  return (
    <div className={classnames} {...rest}>
      {children}
    </div>
  );
};

export default VStack;
