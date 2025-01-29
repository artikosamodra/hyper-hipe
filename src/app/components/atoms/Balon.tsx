import React from "react";

const Balon = ({ balonText }: { balonText: string }) => {
  return (
    <div>
      <div className="relative bg-white text-[#40E2E8] rounded-[8px] text-[18px] px-[12px] py-[6px] leading-[27px]">
        {balonText}
        <div className="absolute bottom-[-10px] left-8 h-0 w-0 border-t-[10px] border-t-white border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent"></div>
      </div>
    </div>
  );
};
// 풀타임, 파트타임
export default Balon;
