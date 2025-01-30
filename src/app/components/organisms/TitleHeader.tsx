import React from "react";
import Balon from "../atoms/Balon";
import Titles from "../atoms/Titles";
import { motion } from "framer-motion";

const TitleHeader = () => {
  return (
    <div className="w-full h-full flex flex-col text-[#FFFFFF] gap-[24px] lg:pt-[40px] pt-0">
      {/* Balon Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-start items-center"
      >
        <Balon balonText="풀타임, 파트타임" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex flex-col gap-[16px]"
      >
        {/* Title */}
        <Titles addClass="md:text-[48px] text-[36px] md:leading-[62.4px] leading=[46.8px]">
          <h1>
            최고의 실력을 가진 <br />
            <span>외국인 인재를 찾고 계신가요?</span>
          </h1>
        </Titles>

        {/* SubTitle */}
        <div className="flex flex-col gap-[24px] w-full h-full">
          <Titles addClass="md:text-[24px] text-[18px] md:leading-[34px] leading-[27px]">
            <h2>법률 및 인사관리 부담없이</h2>
            <h2>1주일 이내에 원격으로 채용해보세요.</h2>
          </Titles>

          <Titles addClass="text-[18px] leading-[27px] underline lg:flex hidden">
            <h3>개발자가 필요하신가요?</h3>
          </Titles>
        </div>
      </motion.div>
    </div>
  );
};

export default TitleHeader;
