import Image from "next/image";
import React from "react";

interface CardProp {
  img: string;
  title: string;
}

const Card: React.FC<CardProp> = ({ title, img }) => {
  return (
    <div className="shadow-lg p-6 rounded-2xl">
      <div className="flex justify-center">
        <Image
          src={img}
          alt="feature1"
          width={200}
          height={200}
          className="rounded-full w-[116px] h-[116px] md:w-[192px] md:h-[193px] border-t-4 border-solid border-[#D9D9D98A]"
        />
      </div>
      <p className="pt-2 whitespace-pre-wrap">{title}</p>
    </div>
  );
};

export default Card;
