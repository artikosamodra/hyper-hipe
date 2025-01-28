import React from "react";
import Link from "next/link";
import ImageIcons from "../atoms/IconImages";

const NavLogo = () => {
  return (
    <Link href="/">
      <ImageIcons src="/img/logo.png" alt="Logo" width={114} height={21} />
    </Link>
  );
};

export default NavLogo;
