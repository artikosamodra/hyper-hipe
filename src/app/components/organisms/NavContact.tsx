import React from "react";
import Button from "../atoms/Button";

const NavContact = () => {
  return (
    <div className="flex lg:justify-end justify-center items-center">
      <Button addClass="py-[6px] px-[24px] font-bold bg-white text-[#4A77FF] rounded-[8px] hover:bg-gray-800 hover:text-white">
        문의하기
      </Button>
    </div>
  );
};

export default NavContact;
