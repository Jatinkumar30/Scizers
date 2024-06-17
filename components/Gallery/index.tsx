import React from "react";
import Images from "./Images";

const Gallery = () => {
  return (
    <div className="px-4 md:px-20 lg:px-40 pb-10">
      <div className="flex justify-center md:justify-end pb-6">
        <div className="font-semibold flex gap-4">
          <button className="bg-[#00357B] text-white py-3 px-8 rounded-md hover:scale-105 duration-200">
            EXTERIORS
          </button>
          <button className="border-2 border-[#00357B] py-3 px-8 rounded-md hover:scale-105 duration-200">
            INTERIORS
          </button>
        </div>
      </div>
      <Images />
    </div>
  );
};

export default Gallery;
