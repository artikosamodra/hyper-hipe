import React from "react";
import MenuCard from "../molecules/MenuCard";
import { motion } from "framer-motion";

const MenuHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-3 w-full h-full gap-[48px] my-[60px]"
    >
      <MenuCard
        titleCard="평균 월 120만원"
        textCard="임금을 해당 국가를 기준으로 계산합니다."
      />
      <MenuCard
        titleCard="최대 3회 인력교체"
        textCard="막상 채용해보니 맞지 않아도 걱정하지 마세요. "
      />
      <MenuCard
        titleCard="평균 3일, 최대 10일"
        textCard="급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다."
      />
    </motion.div>
  );
};

export default MenuHeader;
