import React from "react";
import ImageIcons from "../atoms/IconImages";
import Texts from "../atoms/Texts";
import Contact from "../molecules/Contact";

const CompanyProfile = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <ImageIcons
        src="/img/hyperlogo.png"
        alt="hyper-logo"
        width={187}
        height={34}
      />
      <div className="flex flex-col gap-[18px]">
        <Texts addClass="text-[14px] leading-[21px] text-[#343741] max-w-[247px]">
          우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
        </Texts>
        <Contact />
      </div>
    </div>
  );
};

export default CompanyProfile;
