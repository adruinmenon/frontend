import React from "react";
import "./NavbarButton.css";

export const NavbarButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <button className={className + " nav-button"}>{children}</button>;
};
