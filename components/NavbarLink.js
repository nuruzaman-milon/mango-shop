import React from "react";
import Link from "next/link";

const NavbarLink = ({ className }) => {
  const defaultClasses = "bg-gray-200 rounded-md p-4";
  const customClasses = className || "";
  return (
    <div className={(defaultClasses, customClasses)}>
      <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer hover:font-bold">
        <Link href="/shop-service">Ratnagiri</Link>
      </li>
      <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer hover:font-bold">
        <Link href="/shop-service/lipo-laser">Devgad</Link>
      </li>
      <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer hover:font-bold">
        <Link href="/shop-service/fat-freezing-cryolipolysis">Kesar</Link>
      </li>
      <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer hover:font-bold">
        <Link href="/shop-service/emt">Amrupali</Link>
      </li>
    </div>
  );
};

export default NavbarLink;
