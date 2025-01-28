import React from "react";
import Button from "../atoms/Button";

interface NavButtonProps {
  handleShow: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ handleShow }) => {
  return (
    <Button
      addClass="w-[40px] h-[40px] flex justify-center p-1"
      onClick={handleShow}
    >
      <div className="w-[14px] h-[3px] bg-white"></div>
    </Button>
  );
};

export default NavButton;