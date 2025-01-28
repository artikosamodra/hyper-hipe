import { inter } from "@/app/fonts/GoogleFont";
import Button from "../atoms/Button";
import { menubar } from "@/app/libs/data";

interface MenuProps {
  selectMenu: string;
  handleMenuSelect: (menu: string) => void;
}

const NavMenu: React.FC<MenuProps> = ({ handleMenuSelect }) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="lg:absolute relative lg:top-[44px] top-0 z-10 w-[240px] h-[164px] border-1">
        <div
          className={`${inter.className} flex flex-col gap-[16px] text-[14px] bg-white text-black rounded-[8px] font-medium`}
        >
          {menubar.map((nav, index) => (
            <Button
              key={index}
              addClass="py-[10px] px-[16px] lg:text-left text-center hover:font-bold"
              onClick={() => handleMenuSelect(nav.menu)}
            >
              {nav.menu}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
