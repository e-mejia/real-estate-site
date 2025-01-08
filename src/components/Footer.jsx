import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900
    w-full overflow-hidden"
      id="Footer"
    >
      <div
        className="container mx-auto flex flex-col md:flex-row
      justify-between items-center"
      >
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            enim nostrum fugit assumenda at corporis nisi temporibus doloribus,
            velit, dolorem incidunt culpa, exercitationem nam optio dolorum
            cumque modi! Aliquam, eius?
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
