import Image from "next/image";
import React from "react";

const Images = () => {
  return (
    <div>
      <div className="pb-1 md:pb-4 hover:scale-105 duration-200">
        <Image
          src="/image1.jpeg"
          alt="image1"
          width={1000}
          height={1000}
          className="w-full md:h-[490px] rounded-xl "
        />
      </div>
      <div className="flex  gap-1 md:gap-4">
        <div className="flex shrink hover:scale-105 duration-200">
          <Image
            src="/image2.jpeg"
            alt="image1"
            width={500}
            height={500}
            className="w-full rounded-xl "
          />
        </div>
        <div className="flex shrink hover:scale-105 duration-200">
          <Image
            src="/image3.jpeg"
            alt="image1"
            width={500}
            height={500}
            className="w-full rounded-xl "
          />
        </div>
        <div className="flex shrink hover:scale-105 duration-200">
          <Image
            src="/image4.jpeg"
            alt="image1"
            width={500}
            height={500}
            className="w-full rounded-xl "
          />
        </div>
        <div className="flex shrink hover:scale-105 duration-200">
          <Image
            src="/image5.jpeg"
            alt="image1"
            width={500}
            height={500}
            className="w-full rounded-xl "
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
