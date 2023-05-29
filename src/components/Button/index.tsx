import React from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  label: string;
  disabled?: boolean;
}

export default function Button(props: ButtonProps) {
  // Destructing Props
  const { onClick, className = "", type = "button", label, disabled } = props;

  const classList = [
    `btn transition-all 
    duration-100 ease-in-out 
    hover:bg-opacity-80 
    px-4 py-2 rounded-md  
    border-2 
    border-transparent 
    cursor-pointer 
    ${disabled ? "opacity-50 !cursor-not-allowed" : ""}`,
    className,
  ];

  return (
    <button
      className={classList.join(" ")}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
