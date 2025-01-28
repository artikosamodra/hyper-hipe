import React from "react";
import Button from "../atoms/Button";
import Icons from "../atoms/Icons";

const NavDropdown = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full h-full relative lg:gap-0 gap-5 lg:py-0 py-10 flex justify-center items-center text-[16px] leading-[24px] font-black">
        <div className=" flex flex-col justify-center">
          <Button addClass="flex justify-center w-full">
            <div className="flex items-center justify-center gap-[6px]">
              <div className="w-full h-full">채용</div>
              <Icons IconName="CaretDown" size={16} />
            </div>
          </Button>
        </div>

        <div className="text-center">해외 개발자 활용 서비스</div>
      </div>
    </div>
  );
};

export default NavDropdown;
