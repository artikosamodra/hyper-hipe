import React from "react";
import MenuCard from "../molecules/MenuCard";

const MenuHeader = () => {
  return (
    <div className="grid grid-cols-3 w-full h-full gap-[48px]">
      <MenuCard
        titleCard="평균 월 120만원"
        textCard="임금을 해당 국가를 기준으로 계산합니다."
      />
      <MenuCard
        titleCard="최대 3회 인력교체"
        textCard="막상 채용해보니 맞지 않아도 걱정하지 마세요. "
      />
      <MenuCard
        titleCard="평균 3일, 최대 10일"
        textCard="급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다."
      />
    </div>
  );
};

export default MenuHeader;
