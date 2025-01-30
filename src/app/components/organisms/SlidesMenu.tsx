"use client";
import { useEffect, useState } from "react";
import SlideshowCard from "../molecules/SlideshowCard";
import { dataslideshow } from "@/app/libs/data";
import { motion } from "framer-motion";

const SlidesMenu = () => {
  const [positions, setPositions] = useState(
    dataslideshow.map((_, index) => index)
  );

  const speed = 200;
  const frameWidth = 332;
  const totalWidth = dataslideshow.length * frameWidth;

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prevPositions) => {
        const newPositions = [...prevPositions];
        for (let i = 0; i < newPositions.length; i++) {
          if (newPositions[i] === -1) {
            newPositions[i] = dataslideshow.length - 2;
          } else {
            newPositions[i] -= 1;
          }
        }
        return newPositions;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [totalWidth, speed, frameWidth]);

  return (
    <div className="relative w-full h-[88px] mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex absolute left-0 top-0 h-full"
      >
        {dataslideshow.map((slide, index) => {
          const isOutOfFrame = positions[index] === dataslideshow.length - 2;

          return (
            <motion.div
              key={index}
              className={`absolute w-[332px] h-full flex items-center justify-center text-white rounded-lg shadow-md ${
                isOutOfFrame ? "opacity-0" : "opacity-100"
              }`}
              initial={{ x: positions[index] * frameWidth }}
              animate={{
                x: positions[index] * frameWidth,
              }}
              transition={
                isOutOfFrame ? { duration: 0 } : { duration: 1, delay: 1 }
              }
            >
              <SlideshowCard
                key={index}
                iconSlide={slide.src}
                alt={slide.alt}
                titleSlide={slide.title}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SlidesMenu;
