"use client";
import React, { useState } from "react";
import ProfileCard from "../organisms/ProfileCard";
import BalonProfile from "../atoms/BalonProfile";
import ImageIcons from "../atoms/IconImages";
import Titles from "../atoms/Titles";
import { motion } from "framer-motion";
import { datacards } from "@/app/libs/data";
import {
  cardVariants,
  mobileVariants,
  tooltipVariants,
} from "@/app/libs/motion/motion";
import Icons from "../atoms/Icons";
import { useMediaQuery } from "react-responsive";

const ProfileSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  // const mediaScreenDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const mediaScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const handleNext = () => {
    if (disableBtn) return;
    setDisableBtn(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % datacards.length);
  };

  const handlePrev = () => {
    if (disableBtn) return;
    setDisableBtn(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? datacards.length - 1 : prevIndex - 1
    );
  };

  const getPosition = (index: number) => {
    const diff = (index - currentIndex + datacards.length) % datacards.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === 2) return "left";
    return "hidden";
  };

  const animationComplete = () => {
    setDisableBtn(false);
  };

  return (
    <motion.div
      variants={tooltipVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-full flex flex-col md:gap-[32px] gap-0"
    >
      <BalonProfile addClass="flex justify-center items-center text-[#00C696] gap-[10px] px-[16px] py-[8px]">
        <ImageIcons
          src="/img/dollar.png"
          alt="profile"
          width={26}
          height={26}
        />
        <Titles addClass="text-[18px] leading-[27px]">월 100만원</Titles>
      </BalonProfile>

      <div className=" w-full flex">
        <div className="w-full h-full mx-auto gap-[24px] flex justify-center items-center rounded-[12px] relative">
          <div className="flex z-10 absolute left-0 bg-gray-300 bg-opacity-0 py-[10px] rounded-[6px]">
            <button onClick={handlePrev} disabled={disableBtn}>
              <Icons IconName="CaretLeft" size={32} />
            </button>
          </div>
          {datacards.map((card, index) => (
            <motion.div
              key={card.id}
              className="rounded-[12px] flex justify-center"
              // initial={{ opacity: 0 }}
              variants={mediaScreen ? cardVariants : mobileVariants}
              animate={getPosition(index)}
              onAnimationComplete={animationComplete}
              style={{
                position:
                  getPosition(index) === "left" ||
                  getPosition(index) === "right"
                    ? "absolute"
                    : "static",
              }}
            >
              <ProfileCard
                src={card.src}
                flag={card.flag}
                username={card.username}
                bio={card.bio}
                info={card.info}
              />
            </motion.div>
          ))}
          <div className="flex justify-end z-10 absolute right-0 bg-gray-300 bg-opacity-0 py-[10px] rounded-[6px]">
            <button onClick={handleNext} disabled={disableBtn}>
              <Icons IconName="CaretRight" size={32} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileSlider;
