import React from "react";
import { Helmet } from "react-helmet-async";

const Banner = () => {
  return (
    <>
      <Helmet>
        <title>Career Hub | Banner</title>
      </Helmet>
      <div className="text-center">
        <h2 className="text-5xl">Home page banner</h2>
      </div>
    </>
  );
};

export default Banner;
