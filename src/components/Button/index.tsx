import React from "react";
import "./index.scss";

type Button = {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  color?: "light" | "dark";
  size: "sm" | "md" | "lg";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
};

function Button({
  children,
  variant,
  color,
  onClick,
  type,
  size,
  disabled,
}: Button) {
  const style = {
    primary: "field__button--primary",
    secondary: "field__button--secondary",
    dark: "field__button--dark",
    light: "field__button--light",
    sm: "field__button--sm",
    md: "field__button--md",
    lg: "field__button--md",
  };

  const appendStyling = `${style[variant]} ${color && style[color]} ${
    style[size]
  }`;

  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`field__button ${appendStyling}`}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
