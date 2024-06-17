import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8 px-4 md:px-20 lg:px-40">
      <Image src="/logo.png" alt="logo" width={165} height={20} />
      <button className="hidden md:block border-2 border-solid border-blue-400 py-4 px-4 md:px-10 text-[#17ABFF] rounded-md text-sm font-semibold hover:bg-white hover:scale-115 duration-200">
        ENQUIRE NOW
      </button>
      <RxHamburgerMenu className="md:hidden text-3xl text-white" />
    </div>
  );
};

export default Navbar;
