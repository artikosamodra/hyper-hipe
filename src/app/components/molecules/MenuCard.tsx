import React from "react";

interface MenuCardProps {
  titleCard: string;
  textCard: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ titleCard, textCard }) => {
  return (
    <div className="w-full h-full flex flex-col gap-[8px]">
      <div className="border border-[#FFFFFF] w-[129px]"></div>
      <div className="text-[18px] leading-[27px]">{titleCard}</div>
      <div className="text-[16px] leading-[24px] opacity-[80%]">{textCard}</div>
    </div>
  );
};

export default MenuCard;