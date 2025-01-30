import { poppins } from "@/app/fonts/GoogleFont";
import React from "react";
import CompanyProfile from "../organisms/CompanyProfile";
import CompanyMenu from "../organisms/CompanyMenu";
import InfoCard from "../molecules/InfoCard";
import Texts from "../atoms/Texts";

const Footer = () => {
  return (
    <div className="w-full h-full bg-[#FBFBFB] lg:py-[80px] py-[60px]">
      <div
        className={`container mx-auto md:px-0 px-[16px] text-[#5E626F] ${poppins.className} font-black w-full h-full`}
      >
        <div className={` w-full h-full flex flex-col gap-[43px]`}>
          <div className="grid grid-cols-3 w-full h-full">
            <CompanyProfile />
            <div className="col-span-2 w-full h-full flex items-start">
              <CompanyMenu />
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="flex gap-[11px]">
              <InfoCard
                leader="상호명"
                position="하이퍼하이어"
                company="Hyperhire India Private Limited"
              />
              <InfoCard
                leader="대표 CEO"
                position="김주현"
                company="Juhyun Kim"
              />
            </div>

            <div className="col-span-2">
              <div className="flex gap-[42px]">
                <InfoCard
                  leader="사업자등록번호 CIN"
                  position="427-86-01187"
                  company="U74110DL2016PTC290812"
                />
                <InfoCard
                  leader="주소 ADDRESS"
                  position="서울특별시 강남대로 479, 지하 1층 238호 "
                  company="D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India"
                />
              </div>
            </div>
          </div>
        </div>
        <Texts addClass="text-[13px] leading-[19.5px] mt-[40px]">
          ⓒ 2023 Hyperhire
        </Texts>
      </div>
    </div>
  );
};

export default Footer;
