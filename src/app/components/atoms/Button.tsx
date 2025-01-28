import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  addClass: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, addClass, onClick }) => {
  return (
    <button onClick={onClick} className={addClass}>
      {children}
    </button>
  );
};

export default Button;
