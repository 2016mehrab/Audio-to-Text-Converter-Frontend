import React from "react";

const Footer = (props) => {
  return (
    <div className="flex justify-end items-center px-4 sm:px-6 lg:px-8 py-1 sm:py-2 lg:py-3 bg-sidebar-foreground text-primary-foreground" {...props}>
      <p className="">
        Made By Eshan
      </p>
    </div>
  );
};

export default Footer;
