import React from "react";
import Image from "next/image";

// Define the props interface
interface CardProps {
  title: string;
  desc: string;
  img: string;
}

// Create the functional component with typed props
const Card: React.FC<CardProps> = ({ title, desc, img }) => {
  return (
    <div className="text-[#00357B] text-center inline-block">
      <div className="flex justify-center pb-2">
        <Image src={img} alt="icon" width={50} height={50} />
      </div>
      <p>{title}</p>
      <p className="font-Oswald font-semibold text-3xl">{desc}</p>
      <div className="flex justify-center pt-2">
        <div className="bg-[#00357B] h-1 w-16"></div>
      </div>
    </div>
  );
};

export default Card;
