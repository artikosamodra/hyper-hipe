import Image from "next/image";
import React from "react";

interface ImageIconsProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  addClass?: string;
}

const ImageIcons: React.FC<ImageIconsProps> = ({
  src,
  alt,
  width,
  height,
  addClass,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={addClass}
    />
  );
};

export default ImageIcons;
