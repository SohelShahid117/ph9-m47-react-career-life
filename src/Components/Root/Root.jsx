import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./../Footer/Footer";
import Header from "./../Header/Header";
//47-1 Project Setup With React Router, Tailwind And Daisy UI

const Root = () => {
  return (
    <div>
      {/* <outlet></outlet> */}
      {/* <Outlettlet /> */}

      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
