import React from "react";
import * as PhosphorIcons from "@phosphor-icons/react/dist/ssr";

interface IconProps {
  IconName: keyof typeof PhosphorIcons;
  size?: number;
  weight?: string;
  addClass?: string;
}

const Icons: React.FC<IconProps> = ({ IconName, size, weight, addClass }) => {
  const Icons = PhosphorIcons[IconName];

  return (
    <div className={addClass}>
      <Icons size={size} weight={weight} />
    </div>
  );
};

export default Icons;
