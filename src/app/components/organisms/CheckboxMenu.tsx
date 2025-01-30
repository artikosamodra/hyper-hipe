import React from "react";
import CheckboxCard from "../molecules/CheckboxCard";

const CheckboxMenu = () => {
  return (
    <div className="grid grid-cols-2 text-[16px] leading-[24px]">
      <CheckboxCard text={"한국어 능력"} />
      <CheckboxCard text={"업무 수행 능력"} />
      <CheckboxCard text={"겸업 여부"} />
      <CheckboxCard text={"평판 조회"} />
    </div>
  );
};

export default CheckboxMenu;
