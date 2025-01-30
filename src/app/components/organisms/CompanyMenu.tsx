import React from "react";
import CompanyCard from "../molecules/CompanyCard";
import { datacompanycard } from "@/app/libs/data";

const CompanyMenu = () => {
  return (
    <div className="flex gap-[16px] w-full h-full">
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
