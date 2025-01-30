import SlideshowCard from "../molecules/SlideshowCard";
import { dataslideshow } from "@/app/libs/data";

const SlidesMenu = () => {
  return (
    <div className="w-full h-full flex ">
      {dataslideshow.map((slide, index) => (
        <div className="w-full h-full" key={index}>
          <SlideshowCard
            key={index}
            iconSlide={slide.src}
            alt={slide.alt}
            titleSlide={slide.title}
          />
        </div>
      ))}
    </div>
  );
};

export default SlidesMenu;
