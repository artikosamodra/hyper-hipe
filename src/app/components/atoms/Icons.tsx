import React from "react";
import * as PhosphorIcons from "@phosphor-icons/react/dist/ssr";

interface IconProps {
  IconName: keyof typeof PhosphorIcons;
  size?: number;
  weight?: string;
}

const Icons: React.FC<IconProps> = ({ IconName, size, weight }) => {
  const Icon = PhosphorIcons[IconName];

  return (
    <div>
      <Icon size={size} weight={weight} />
    </div>
  );
};

export default Icons;
