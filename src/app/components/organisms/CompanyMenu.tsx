import React from "react";
import CompanyCard from "../molecules/CompanyCard";
import { datacompanycard } from "@/app/libs/data";

const CompanyMenu = () => {
  return (
    <div className="flex lg:gap-[16px] gap-[8px]  w-full h-full grid lg:grid-cols-4 grid-cols-2">
      {datacompanycard.map((company, index) => (
        <CompanyCard
          key={index}
          src={company.src}
          alt={company.alt}
          head={company.head}
          url={company.url}
        />
      ))}
    </div>
  );
};

export default CompanyMenu;
