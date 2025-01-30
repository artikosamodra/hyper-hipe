import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-white lg:py-[80px] py-[60px]">
      <div className="container mx-auto md:px-0 px-[16px] text-[#343741]">
        <div className="grid grid-cols-3">
          <div>Company Info</div>
          <div className="col-span-2">Card Footer</div>
        </div>
        <div className="grid grid-cols-3">
          <div>CEO Info</div>
          <div className="col-span-2">Adress Info</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
