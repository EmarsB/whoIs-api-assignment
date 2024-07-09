import React from "react";

import "./index.scss";
type Container = {
  children: React.ReactNode;
  flexed?: boolean;
  maxWidth?: "xl" | "lg" | "md" | "sm";
  className?: string;
};
/**
 * ------------------------------------------------------------------------
 * Component Definition
 * ------------------------------------------------------------------------
 */
function Container({ children, className, flexed, maxWidth }: Container) {
  // TODO: Way to dynamically approach re-usability 
  const style = {
    xl: "container--xl",
    lg: "container--lg",
  };

  return (
    <div
      className={`container ${className} ${
        flexed ? "container--flexed" : null
      }`}
    >
      {children}
    </div>
  );
}

export default Container;
