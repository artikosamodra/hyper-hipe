import React from "react";
import Balon from "../atoms/Balon";
import Titles from "../atoms/Title";

const TitleHeader = () => {
  return (
    <div className="w-full h-full flex flex-col text-[#FFFFFF] gap-[24px]">
      {/* Balon Text */}
      <div className="flex justify-start items-center">
        <Balon balonText="풀타임, 파트타임" />
      </div>

      <div>
        {/* Title */}
        <Titles addClass="text-[48px] leading-[62.4px]">
          <h1>
            최고의 실력을 가진 <br />
            <span>외국인 인재를 찾고 계신가요?</span>
          </h1>
        </Titles>

        {/* SubTitle */}
        <div className="flex flex-col gap-[24px] w-full h-full">
          <Titles addClass="text-[24px] leading-[34px]">
            <h2>법률 및 인사관리 부담없이</h2>
            <h2>1주일 이내에 원격으로 채용해보세요.</h2>
          </Titles>

          <Titles addClass="text-[18px] leading-[27px] underline">
            <h3>개발자가 필요하신가요?</h3>
          </Titles>
        </div>
      </div>
    </div>
  );
};

export default TitleHeader;
