import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";
import Button from "../Button";

export default function Carosel() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  SwiperCore.use([Autoplay]);

  return (
    <>
      <div className="h-[34rem]">
        <Swiper
          //   slidesPerView={
          //     // windowSize.width < 1024 ? 1 : windowSize.width < 1280 ? 2 : 3
          //   }
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper w-fit"
        >
          <SwiperSlide>
            <div className="container">
              <div className="absolute top-1/3 lg:top-1/2 flex flex-col gap-y-4 items-center lg:items-start">
                <h2 className="font-semibold text-xl lg:text-3xl">
                  100% AUTHENTIC FRUIT FOR SELL
                </h2>
                <p className="text-gray-400">
                  Buy this fruit to taste the real fruit to enjoy..
                </p>
                <Button desc="BUY NOW" />
              </div>
            </div>
            <Image
              width={1920}
              height={550}
              src="/images/carosel1.png"
              alt="slider 1"
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="absolute top-1/3 lg:top-1/2 flex flex-col gap-y-4 items-center lg:items-start">
                <h2 className="font-semibold text-xl lg:text-3xl">
                  100% AUTHENTIC FRUIT FOR SELL
                </h2>
                <p className="text-gray-400">
                  Buy this fruit to taste the real fruit to enjoy..
                </p>
                <Button desc="BUY NOW" />
              </div>
            </div>
            <Image
              width={1920}
              height={550}
              src="/images/carosel2.png"
              alt="slider 1"
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="container">
              <div className="absolute top-1/3 lg:top-1/2 flex flex-col gap-y-4 items-center lg:items-start">
                <h2 className="font-semibold text-xl lg:text-3xl">
                  100% AUTHENTIC FRUIT FOR SELL
                </h2>
                <p className="text-gray-400">
                  Buy this fruit to taste the real fruit to enjoy..
                </p>
                <Button desc="BUY NOW" />
              </div>
            </div>
            <Image
              width={1920}
              height={550}
              src="/images/carosel3.png"
              alt="slider 1"
              className="w-full h-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
