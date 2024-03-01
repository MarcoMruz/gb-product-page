import React from "react";
import { tagConfig } from "./config";
import { classNames } from "@/utils/utils";
import { FCWithChildren } from "@/types/common";

type Props = {
  className?: string;
  title?: string;
  size?: keyof typeof tagConfig.size;
  color?: keyof typeof tagConfig.colorScheme;
  label?: string;
  variant?: keyof typeof tagConfig.variant;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const Tag: FCWithChildren<Props> = ({
  children,
  className = "",
  label,
  title,
  size = "md",
  color = "neutral",
  variant = "solid",
  onClick,
}) => {
  const classnames = classNames(
    `badge`,
    tagConfig.size[size],
    tagConfig.colorScheme[color],
    tagConfig.variant[variant],
    className,
  );

  return (
    <div title={title} className={classnames} onClick={onClick}>
      {label ? label : children}
    </div>
  );
};

/*
Tag tailwind classes

size: badge-xs, badge-sm, badge-md, badge-lg
color: badge-primary, badge-secondary, badge-accent, badge-ghost, badge-neutral
variant: badge-outline, badge-solid

*/
