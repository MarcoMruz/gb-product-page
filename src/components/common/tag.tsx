"use client";

import React from "react";
import { tagConfig } from "./config";
import { classNames } from "@/utils/utils";
import { FCWithChildren } from "@/types/common";

type Props = {
  className?: string;
  title?: string;
  color?: keyof typeof tagConfig.colorScheme;
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  isSelected?: boolean;
};

export const Tag: FCWithChildren<Props> = ({
  children,
  className = "",
  label,
  title,
  color = "gray",
  onClick,
  isSelected = false,
}) => {
  const classnames = classNames(tagConfig.colorScheme[color], className);

  if (isSelected) {
    const classes = classNames(tagConfig.colorScheme["green"], className);
    return (
      <div title={title} className={classes} onClick={onClick}>
        {label ? label : children}
      </div>
    );
  }

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
