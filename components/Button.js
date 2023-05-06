import React from "react";

const Button = ({ desc }) => {
  return (
    <>
      <button className="bg-[#F4BE32] hover:bg-black transition-colors ease-in-out duration-500 text-white font-semibold py-2 px-6 rounded-xl">
        {desc}
      </button>
    </>
  );
};

export default Button;
