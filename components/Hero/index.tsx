import React from "react";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <div className="bg-[url('/Hero.jpg')] h-full xl:h-[100dvh] bg-cover	bg-no-repeat bg-center	">
      <Navbar />
      <div className="mt-4 lg:mt-32 px-4 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-4">
        <div className="basis-1/2">
          <div className="font-semibold text-white text-4xl xl:text-6xl font-Oswald">
            <h1 className="pb-2">HARBOUR LIGHTS </h1>
            <h1>
              DE <span className="text-[#17ABFF]">GRESOGONO</span>{" "}
            </h1>
          </div>
          <p className="py-4 font-bold text-base md:text-3xl text-white ">
            1, 2 & 3 Bedrooms Seaside Apartments <br /> in Dubai Maritime City
          </p>
          <div className="w-full md:w-[60%] flex flex-col gap-2 mt-2 md:mt-8">
            <div className="bg-opacity-60 bg-slate-800 text-white py-3 px-4 border-l-4 border-[#17ABFF] hover:translate-x-6 duration-200">
              Rental Returns of UPTO 11%**
            </div>
            <div className="bg-opacity-60 bg-slate-800 text-white py-2 px-4 border-l-4 border-[#17ABFF] hover:translate-x-6 duration-200">
              Capital Appreciation of UPTO 32%**
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col items-end gap-[2px] pb-8">
          <div className="backdrop-blur-lg w-full flex-1 flex flex-col px-6 py-10 text-white gap-3 rounded-t-xl lg:w-[60%]">
            <p>PRICING STARTS FROM</p>
            <p className="md:text-4xl xl:text-6xl font-Oswald">$ 425,000</p>
            <p className="md:text-xl xl:text-3xl font-Oswald">
              AED 1.3 Million
            </p>
            <button className="bg-[#17ABFF] text-white py-4 rounded-md hover:bg-sky-700">
              GET A PRESENTATION
            </button>
          </div>
          <div className="backdrop-blur-lg  rounded-b-xl py-2 px-6 text-[#98C5E8] w-full lg:w-[60%]">
            <p>
              Get an Expert’s Presentation of Real Estate in Dubai for Life and
              investment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
