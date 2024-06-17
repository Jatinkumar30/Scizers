import React from "react";
import Card from "./Card";

const PlanSection = () => {
  return (
    <div className="py-6 bg-[#F4F9FF] flex gap-20 md:gap-32 justify-start px-6 md:justify-center overflow-x-scroll  md:overflow-hidden hover:scale-105 duration-200">
      <Card img="/icon1.svg" title="BOOK WITH" desc="Only 20%" />
      <Card img="/icon4.svg" title="PAYMENT PLAN" desc="Easy 70/30" />
      <Card img="/icon3.svg" title="HANDOVER ON" desc="Q2 2027" />
      <Card img="/icon4.svg" title="AREA STARTS FROM" desc="700 sqmt" />
    </div>
  );
};

export default PlanSection;
