import React from "react";
import * as PhosphorIcons from "@phosphor-icons/react/dist/ssr";
import { IconProps as PhosphorIconProps } from "@phosphor-icons/react";

interface IconProps {
  IconName: keyof typeof PhosphorIcons;
  size?: number;
  weight?: PhosphorIconProps["weight"];
}

const Icons: React.FC<IconProps> = ({ IconName, size, weight = "regular" }) => {
  const Icon = PhosphorIcons[IconName] as React.FC<PhosphorIconProps>;
  return (
    <div>
      <Icon size={size} weight={weight} />
    </div>
  );
};

export default Icons;
