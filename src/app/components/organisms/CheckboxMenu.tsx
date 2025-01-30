import React from "react";
import CheckboxCard from "../molecules/CheckboxCard";
import Titles from "../atoms/Titles";

const CheckboxMenu = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="grid grid-cols-2 text-[16px] leading-[24px]">
        <CheckboxCard text={"한국어 능력"} />
        <CheckboxCard text={"업무 수행 능력"} />
        <CheckboxCard text={"겸업 여부"} />
        <CheckboxCard text={"평판 조회"} />
      </div>

      <Titles addClass="text-[16px] leading-[24px] underline text-[#FBFF23]">
        <h3>개발자가 필요하신가요?</h3>
      </Titles>
    </div>
  );
};

export default CheckboxMenu;
