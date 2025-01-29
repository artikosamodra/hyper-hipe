import React from "react";

interface TextsProps {
  children?: React.ReactNode;
  addClass?: string;
}

const Texts: React.FC<TextsProps> = ({ children, addClass }) => {
  return <div className={addClass}>{children}</div>;
};

export default Texts;