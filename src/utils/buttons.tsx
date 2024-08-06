import React from "react";

import { ButtonProps } from "../interface/Button.interface";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
}: any) => {
  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
};

export default Button;
