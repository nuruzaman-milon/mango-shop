import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-10 bg-black mt-10">
      <footer>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-white text-center lg:text-left">
          <div className="sm:flex sm:items-start sm:justify-between pt-4">
            <Link
              href="/"
              className="flex items-center justify-center lg:justify-start mb-4 sm:mb-0"
            >
              <Image
                src="/images/logo.png"
                alt="My Image"
                width={180}
                height={70}
                className=""
              />
            </Link>

            {/* service 1 */}
            <div>
              <ul className="flex flex-col gap-y-1 lg:gap-y-2">
                <h5 className="text-primary-yellow font-semibold text-lg mb-2">
                  Information
                </h5>
                <li className="text-white hover:underline hover:text-primary-yellow underline-offset-2 text-md font-normal">
                  <Link href="/shop-service">Home</Link>
                </li>
                <li className="text-white hover:underline hover:text-primary-yellow underline-offset-2 text-md font-normal">
                  <Link href="/shop-service">Specials</Link>
                </li>
                <li className="text-white hover:underline hover:text-primary-yellow underline-offset-2 text-md font-normal">
                  <Link href="/shop-service">Contact Us</Link>
                </li>
                <li className="text-white hover:underline hover:text-primary-yellow underline-offset-2 text-md font-normal">
                  <Link href="/shop-service">Register</Link>
                </li>
              </ul>
            </div>
            <hr className="lg:hidden my-5 border-gray-500" />
            {/* service 2 */}
            <div>
              <ul className="flex flex-col gap-y-1 lg:gap-y-2">
                <h5 className="text-primary-yellow font-semibold text-lg mb-2">
                  Category
                </h5>
                <li className="text-white hover:underline hover:text-primary-yellow underline-offset-2 text-md font-normal">
                  <Link href="/shop-service/lipo-laser">Ratnagiri</Link>
                </li>

                <li className="text-white hover:underline hover:text-primary-yellow underline-offset-2 text-md font-normal">
                  <Link href="/shop-service/fat-freezing-cryolipolysis">
                    Devgad
                  </Link>
                </li>
                <li className="text-white hover:underline hover:text-primary-yellow underline-offset-2 text-md font-normal">
                  <Link href="/shop-service/fat-freezing-cryolipolysis">
                    kesar
                  </Link>
                </li>
                <li className="text-white hover:underline hover:text-primary-yellow underline-offset-2 text-md font-normal">
                  <Link href="/shop-service/fat-freezing-cryolipolysis">
                    Amrupali
                  </Link>
                </li>
              </ul>
            </div>

            <hr className="lg:hidden my-5 border-gray-500" />

            {/* service 3 */}
            <ul className="flex flex-col gap-y-1 lg:gap-y-2">
              <h5 className="text-primary-yellow font-semibold text-lg mb-2">
                Contact Us
              </h5>
              <li>
                <span className="font-semibold">Email: </span>
                <span className="text-primary-yellow">
                  mangobazaar1@gmail.com
                </span>
              </li>
              <li>
                <span className="font-semibold">Call us: </span>{" "}
                <span className="text-primary-yellow">+880 1303746940</span>
              </li>
            </ul>

            {/* <hr className="lg:hidden my-5 border-gray-500" /> */}

            {/* Nav links */}
            {/* <ul className="flex flex-col gap-y-1 lg:gap-y-2">
              <li>
                <Link
                  href="/shop-service"
                  className="text-white hover:underline underline-offset-2 text-md font-normal"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-white hover:underline underline-offset-2 text-md font-normal"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-white hover:underline underline-offset-2 text-md font-normal"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-white hover:underline underline-offset-2 text-md font-normal"
                >
                  Contact Us
                </Link>
              </li>
            </ul> */}
          </div>
          <hr className="my-6 sm:mx-auto lg:my-14 border-gray-500" />
          <div>
            <div className="text-color-cus flex justify-center gap-x-4 mb-3 lg:mb-0">
              <Link
                href="https://www.facebook.com/EliteSpaFlorida/"
                target="_blank"
                className="border p-2 rounded-full"
              >
                <FaFacebookF size={24} color="white" />
              </Link>
              <Link
                href="https://www.youtube.com/"
                target="_blank"
                className="border p-2 rounded-full"
              >
                <FaYoutube size={24} color="white" />
              </Link>
              <Link
                href="https://www.instagram.com/Elite_spa7/"
                target="_blank"
                className="border p-2 rounded-full"
              >
                <FaInstagram size={24} color="white" />
              </Link>
            </div>
            <div className="mt-6">
              <span className="block text-md text-white sm:text-center">
                <div className="text-white mb-1">
                  © Copyright 2023{" "}
                  <Link href="/" className="text-primary-yellow">
                    Mango-Bazar
                  </Link>
                  . All Rights Reserved
                </div>
                <div className="text-white">
                  Design & Development by
                  <Link
                    className="ml-1"
                    href="https://nuruzaman-milon.netlify.app/"
                    target="_blank"
                  >
                    <span className="block lg:inline text-primary-yellow mt-1 lg:mt-0">
                      Md. Nuruzaman Milon
                    </span>
                  </Link>
                </div>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
