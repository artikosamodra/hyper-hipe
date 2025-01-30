import React from "react";
import ImageIcons from "../atoms/IconImages";
import Texts from "../atoms/Texts";

const SlideshowCard = ({
  iconSlide,
  alt,
  titleSlide,
}: {
  iconSlide: string;
  alt: string;
  titleSlide: string;
}) => {
  return (
    <div className="w-[332px] h-[88px] flex items-center p-[16px] gap-[24px] bg-white bg-opacity-[20%] rounded-[12px] mx-[5px]">
      <ImageIcons
        src={iconSlide}
        alt={alt}
        width={32}
        height={32}
        addClass="w-auto h-auto object-cover p-[12px] bg-white bg-opacity-[40%] rounded-[8px]"
      />
      <Texts addClass="text-[24px] leading-[36px] text-white font-bold">
        {titleSlide}
      </Texts>
    </div>
  );
};

export default SlideshowCard;
