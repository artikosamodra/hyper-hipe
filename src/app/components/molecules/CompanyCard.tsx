import React from "react";
import ImageIcons from "../atoms/IconImages";
import Titles from "../atoms/Titles";
import Link from "next/link";
import Icons from "../atoms/Icons";
import Texts from "../atoms/Texts";

interface CompanyCardProps {
  src: string;
  alt: string;
  head: string;
  url: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ src, alt, head, url }) => {
  return (
    <div className="flex flex-col gap-[16px] p-[16px] bg-white w-full h-[142px] rounded-[12px]">
      <div className="flex flex-col gap-[12px]">
        <div className="w-[40px] h-[40px] p-[8px] bg-[#EFF1F6] rounded-[8px]">
          <ImageIcons src={src} alt={alt} width={24} height={24} />
        </div>
        <Titles addClass="text-[14px] leading-[21px] text-[#343741]">
          {head}
        </Titles>
      </div>

      <Link href={url}>
        <div className="flex gap-[4px]">
          <Texts>바로가기</Texts>
          <div className="w-[20px] h-[20px] bg-[#EFF1F6] rounded-[8px]">
            <ImageIcons
              src="/img/arrow-right.png"
              alt={alt}
              width={40}
              height={40}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CompanyCard;
