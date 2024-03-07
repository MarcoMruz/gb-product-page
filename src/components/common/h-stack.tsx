import React from "react";
import { config, hstackConfig } from "./config";
import { classNames } from "@/utils/utils";
import { FCWithChildren } from "@/types/common";

type Props = {
  className?: string;
  spacing?: keyof typeof hstackConfig.spacing;
  rounded?: keyof typeof config.rounded;
  shadow?: keyof typeof config.shadow;
  justify?: keyof typeof hstackConfig.justify;
  align?: keyof typeof hstackConfig.align;
} & React.HTMLAttributes<HTMLDivElement>;

const HStack: FCWithChildren<Props> = ({
  children,
  className = "",
  spacing = 0,
  rounded = "none",
  shadow = "none",
  justify = "start",
  align = "center",
  ...rest
}) => {
  const classnames = classNames(
    `flex flex-row`,
    className,
    hstackConfig.spacing[spacing],
    hstackConfig.justify[justify],
    hstackConfig.align[align],
    config.rounded[rounded],
    config.shadow[shadow]
  );

  return (
    <div className={classnames} {...rest}>
      {children}
    </div>
  );
};

export default HStack;
