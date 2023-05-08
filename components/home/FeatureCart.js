import Image from "next/image";
import React, { useState } from "react";

const FeatureCart = ({ src, title }) => {
  return (
    <div
      className={`p-4 border-2 border-[#F4BE32] shadow-lg flex flex-col items-center gap-y-4 hover:bg-[#F4BE32] transition-colors duration-300 ease-in-out`}
      //   style={{ backgroundColor: `red` }}
      //   onClick={() => console.log("test", props.color)}
    >
      <Image width={80} height={80} src={src} alt="mango image" />
      <h5 className="text-center font-semibold">{title}</h5>
    </div>
  );
};

export default FeatureCart;
