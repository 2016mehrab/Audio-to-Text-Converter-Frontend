import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="grid h-full grid-rows-[1fr_auto]">
      <Main />
      <Footer />
    </div>
  );
};

export default AppLayout;
