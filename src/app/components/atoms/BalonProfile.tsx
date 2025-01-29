import React from "react";

const BalonProfile = ({
  children,
  addClass,
}: {
  children: React.ReactNode;
  addClass: string;
}) => {
  return (
    <div className={`flex justify-center items-center`}>
      <div
        className={`relative flex bg-white rounded-[8px] text-[18px] px-[16px] py-[8px] leading-[27px] ${addClass}`}
      >
        {children}
        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 h-0 w-0 border-t-[10px] border-t-white border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent"></div>
      </div>
    </div>
  );
};

export default BalonProfile;
