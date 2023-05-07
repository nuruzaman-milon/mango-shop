import Image from "next/image";
import React from "react";

const Cart = ({ src, title, desc, price }) => {
  const slicedText = desc.slice(0, 55);
  return (
    <div>
      <div className="flex justify-center">
        <Image width={212} height={212} src={src} alt="mango image" />
      </div>
      <div className="text-center flex flex-col gap-y-2">
        <h5 className="text-primary-green font-semibold text-lg">{title}</h5>
        <p className="text-gray-500 text-sm">{slicedText}..</p>
        <p className="text-primary-yellow font-bold">
          <span className="text-xl font-extrabold">৳</span>
          {price}
        </p>
      </div>
    </div>
  );
};

export default Cart;
