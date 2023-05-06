//icon
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  const [dropdownToogle, setDropdownToogle] = useState(false);
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;

  const isActiveForNested = router.pathname.startsWith("/shop-service");

  const handleToogle = () => {
    setToogle(!toogle);
  };
  const handleDropdownToogle = () => {
    setDropdownToogle(!dropdownToogle);
  };

  return (
    <div className="bg-black text-white">
      {/******* show items on mobile & tab start *******/}
      <div className="text-basic-color h-20 z-50 flex lg:hidden items-center justify-center relative border-b lg:border-none">
        <div className="flex container items-center justify-between w-full h-full">
          {/* logo  */}
          <Link className="lg:hidden" href="/">
            <Image src="/images/logo.png" alt="logo" width={122} height={56} />
          </Link>
          {/* wishlist & cart */}
          <div className="flex gap-x-4">
            <Link href="/wishlist" className="flex items-center">
              <AiOutlineHeart size={30} color="#F4BE32" />
              <div className="flex justify-center items-center bg-white w-4 h-4 rounded-full text-black text-xs">
                0
              </div>
            </Link>
            <Link href="/cart" className="flex items-center">
              <AiOutlineShoppingCart size={30} color="#F4BE32" />
              <div className="flex justify-center items-center bg-white w-4 h-4 rounded-full text-black text-xs">
                0
              </div>
            </Link>
          </div>
          {/* humbarger button */}
          <button
            onClick={() => handleToogle()}
            className="text-3xl font-bold flex lg:hidden"
          >
            {toogle === false && <GiHamburgerMenu />}
            {toogle && <TfiClose />}
          </button>
          {toogle && (
            <div className="block text-black lg:hidden w-full origin-top absolute top-20 shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
              <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/">HOME</Link>
              </li>
              <li
                className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleDropdownToogle()}
              >
                Mango
                {dropdownToogle === false && <FaAngleDown />}
                {dropdownToogle && <FaAngleUp />}
              </li>
              {/* dropdown menu for services  */}
              {dropdownToogle && (
                <ul className="pl-6">
                  <NavbarLink className="border-b" />
                </ul>
              )}

              <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/specials">Specials</Link>
              </li>
              <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/login">Login</Link>
              </li>
            </div>
          )}
        </div>
      </div>
      {/* show items on mobile & tab end*/}

      {/* show items on laptop & desktop start*/}
      <div className="hidden container lg:flex justify-between items-center h-32 z-50">
        <Link className="hidden lg:block" href="/">
          <Image src="/images/logo.png" alt="logo" width={150} height={70} />
        </Link>

        <ul className="hidden lg:flex items-center gap-x-6 ">
          <li
            className={`${
              isActive("/") ? "active" : "hover:text-green-400"
            } font-semibold`}
          >
            <Link href="/">Home</Link>
          </li>

          {/* dropdown menu with mango start*/}

          <li
            className={`font-semibold flex items-center gap-x-1 cursor-pointer  group h-full relative
              ${
                isActiveForNested
                  ? "active text-color-cus"
                  : "hover:text-green-400"
              }
              
             `}
            // onClick={() => handleToogle()}
            // onMouseEnter={() => handleToogle(true)}
          >
            Mango
            <div className="pt-9 hidden absolute left-0 top-0 group-hover:block z-10 text-black">
              <ul className="border-1 w-56 z-50 origin-top shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                {/* dropdown */}
                <NavbarLink />
              </ul>
            </div>
            <FaAngleDown className="group-hover:hidden" />
            <FaAngleUp className="hidden group-hover:block" />
          </li>

          {/* dropdown menu for mango end*/}
          <li
            className={`${
              isActive("/specials") ? "active" : "hover:text-green-400"
            } font-semibold`}
          >
            <Link href="/specials">Specials</Link>
          </li>
          <li
            className={`${
              isActive("/contact-us") ? "active" : "hover:text-green-400"
            } font-semibold`}
          >
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li
            className={`${
              isActive("/login") ? "active" : "hover:text-green-400"
            } font-semibold`}
          >
            <Link href="/login">Login</Link>
          </li>
          {/* <li
            className={`${
              isActive("/register") ? "active" : "hover:text-green-400"
            } font-semibold`}
          >
            <Link href="/register">Register</Link>
          </li> */}
          {/* <li
            className={`${
              isActive("/logout") ? "active" : "hover:text-green-400"
            } font-semibold`}
          >
            <Link href="/logout">Logout</Link>
          </li> */}
        </ul>
        <div className="hidden lg:flex">
          <div className="flex flex-col gap-y-5">
            <div className="flex gap-x-4">
              <Link href="/wishlist" className="flex items-center">
                <AiOutlineHeart size={30} color="#F4BE32" />
                <div className="flex justify-center items-center bg-white w-4 h-4 rounded-full text-black text-xs">
                  0
                </div>
              </Link>
              <Link href="/cart" className="flex items-center">
                <AiOutlineShoppingCart size={30} color="#F4BE32" />
                <div className="flex justify-center items-center bg-white w-4 h-4 rounded-full text-black text-xs">
                  0
                </div>
              </Link>
            </div>

            <div>
              <Link href="tel:+17275054997">
                <div className="flex items-center gap-x-1">
                  <FiPhoneCall color="#4ADE5F" size={20} />
                  +17275054997
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* show items on laptop & desktop start*/}
    </div>
  );
};

export default Navbar;
