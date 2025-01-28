import React from "react";

interface TitlesProps {
  children?: React.ReactNode;
  addClass?: string;
}

const Titles: React.FC<TitlesProps> = ({ children, addClass }) => {
  return <div className={addClass}>{children}</div>;
};

export default Titles;
