import React, { useEffect, useRef, useState } from "react";
import Button from "../atoms/Button";
import Icons from "../atoms/Icons";
import NavMenu from "../molecules/NavMenu";

const NavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectMenu, setSelectMenu] = useState("채용");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuSelect = (menu: string) => {
    setSelectMenu(menu);
    setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="w-full h-full relative text-[16px] leading-[24px]"
      ref={dropdownRef}
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full h-full relative lg:gap-0 gap-5 lg:py-0 py-10 flex justify-center items-center font-black">
        <div className="flex flex-col justify-center">
          <Button addClass="flex justify-center w-full" onClick={handleMenu}>
            <div className="flex items-center justify-center gap-[6px]">
              <div className="w-full h-full">{selectMenu}</div>
              <Icons IconName="CaretDown" size={16} />
            </div>
          </Button>

          {isOpen && (
            <NavMenu
              selectMenu={selectMenu}
              handleMenuSelect={handleMenuSelect}
            />
          )}
        </div>

        <div className="text-center">해외 개발자 활용 서비스</div>
      </div>
    </div>
  );
};

export default NavDropdown;
