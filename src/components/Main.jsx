import React, { useEffect } from "react";
import { CardWithForm } from "./CardWithForm";
import Heading from "./Heading";
import { toast } from "sonner";

const Main = (props) => {
  const padding = "px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10";
  useEffect(() => {
    const timer = setTimeout(() => {
      toast(
        "The backend may take a few seconds to start. If it fails, try again."
      );
    }, 2000); 
    return () => clearTimeout(timer);

  }, []);
  return (
    <div
      className={`${padding} flex flex-col gap-8 justify-center items-center`}
      {...props}
    >
      <Heading>Audio to Text Converter</Heading>
      <CardWithForm />
    </div>
  );
};

export default Main;
