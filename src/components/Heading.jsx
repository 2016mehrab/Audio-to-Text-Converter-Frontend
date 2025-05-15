import React from "react";

const Heading = ({ size="h1", children,className="", props }) => {
  const sizes = {
    h1: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    h2: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    h3: "text-lg sm:text-xl md:text-2xl lg:text-3xl",
  };
  const Tag = size;
  return <Tag className={`font-bold ${ sizes[size] } ${className}`}{...props}>{children}</Tag>;
};

export default Heading;
