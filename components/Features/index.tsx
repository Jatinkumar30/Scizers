import Image from "next/image";
import React from "react";
import Card from "./Card";

const Features = () => {
  return (
    <div className="flex py-8 px-4 md:px-20 lg:px-40 flex-col text-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Image src="/harbour-logo.png" alt="logo" width={140} height={140} />
        <p className="font-Oswald text-4xl text-[#00357B]">
          Features & Amenities
        </p>
        <p className="w-full md:w-[700px] text-[#343434]">
          Harbour Lights beautifully honours maritime voyages while embracing an
          opulent seafront lifestyle. Its maritime-inspired amenities provide an
          unmatched seaside experience, offering a life of tranquility and
          bliss.
        </p>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-16 pt-6">
        <Card img="/feature1.jpeg" title={"Floating\n Pool"} />
        <Card img="/feature2.jpeg" title={"Spacious\nCabins Like Rooms"} />
        <Card img="/feature3.jpeg" title={"Sea Facing\nSwimming Pools"} />
        <Card img="/feature4.png" title={"Gymnasium &\nFitness"} />
      </div>
      <div className="flex justify-end mt-4">
        <p className="text-xs text-[#686868]">
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years. Source 1 | Source 2
        </p>
      </div>
    </div>
  );
};

export default Features;
