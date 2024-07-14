import React from "react";

type ButtonProps = {
  onClick?: () => void | undefined;
  color: string;
  title: string;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  color,
  title,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-80 bg-${color}-500 p-2 rounded-md m-6 mt-0`}
    >
      <div className="text-sm">{title}</div>
    </button>
  );
};

export default Button;
