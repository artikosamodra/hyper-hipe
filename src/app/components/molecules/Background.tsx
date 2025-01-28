import React from "react";
import ImageIcons from "../atoms/IconImages";

const Background = () => {
  return (
    <div className="absolute top-0 left-0 z-[-10] w-full h-full bg-gradient-to-br from-[#26C2B9] to-[#288BE7]">
      <ImageIcons
        src="/img/background.png"
        alt="background"
        width={1920}
        height={929}
        addClass="w-full h-full object-cover opacity-[80%] mix-blend-color-burn"
      />
    </div>
  );
};

export default Background;
