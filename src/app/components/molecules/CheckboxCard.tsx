import React from "react";

const CheckboxCard = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-[12px]">
      <input type="checkbox" className="w-[20px] h-[20px] rounded-[6px] accent-white" defaultChecked />
      <div>{text}</div>
    </div>
  );
};

export default CheckboxCard;
