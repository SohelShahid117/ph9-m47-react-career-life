import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./../Footer/Footer";
//47-1 Project Setup With React Router, Tailwind And Daisy UI

const Root = () => {
  return (
    <div>
      {/* <outlet></outlet> */}
      {/* <Outlettlet /> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
