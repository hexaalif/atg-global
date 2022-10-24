import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner ps-5">
        <div className="ban_con">
          <h1 className="fs-4 md:fs-1 fw-bold text-white ">
            Computer Engineering
          </h1>
          <p className="fs-6 md:fs-4 text-white">
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
