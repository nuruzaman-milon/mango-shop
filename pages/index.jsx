import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Carosel from "@/components/home/Carosel";
import Cart from "@/components/home/Cart";
import FeatureCart from "@/components/home/FeatureCart";
import TrendingButton from "@/components/home/TrendingButton";
import Image from "next/image";
import React, { useState } from "react";

const Index = () => {
  const [trendingBtn, setTrendingBtn] = useState("ratnagiri");
  // console.log(trendingBtn);
  return (
    <Layout>
      <>
        <Carosel />
        <div className="container">
          {/* Trending Products */}
          <section className="my-10">
            <h2 className="header-2 mb-4">Trending Products</h2>
            <div className="flex flex-wrap justify-center gap-x-2">
              <TrendingButton
                trendingBtn={trendingBtn}
                setTrendingBtn={setTrendingBtn}
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
              <Cart
                src="/images/mango-image-1.jpg"
                title="Devgad Alphonso(15 mango)"
                desc="The Alphonso Mango is one of the Best Variety Mango found"
                price="1500"
              />
              <Cart
                src="/images/mango-image-2.jpg"
                title="Devgad Alphonso(15 mango)"
                desc="The Alphonso Mango is one of the Best Variety Mango found"
                price="1500"
              />
              <Cart
                src="/images/mango-image-30.jpg"
                title="Devgad Alphonso(15 mango)"
                desc="The Alphonso Mango is one of the Best Variety Mango found"
                price="1500"
              />
              <Cart
                src="/images/mango-image-4.jpg"
                title="Devgad Alphonso(15 mango)"
                desc="The Alphonso Mango is one of the Best Variety Mango found"
                price="1500"
              />
              <Cart
                src="/images/mango-image-5.jpg"
                title="Devgad Alphonso(15 mango)"
                desc="The Alphonso Mango is one of the Best Variety Mango found"
                price="1500"
              />
            </div>
          </section>

          {/* our feature */}
          <section className="my-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
              <FeatureCart
                src="/images/feature/chemicalfree.png"
                title="CARBIDE & CHEMICAL FREE"
              />
              <FeatureCart
                src="/images/feature/heart.png"
                title="LOW MOISTURE CONTENT & FIBER"
              />
              <FeatureCart
                src="/images/feature/Low-Moisture-Content-&-Fiber.png"
                title="FROM THE HEART OF KOKAN"
              />
              <FeatureCart
                src="/images/feature/organic.png"
                title="LONG SHELF LIFE OF MANGO"
              />
              <FeatureCart
                src="/images/feature/shelf-life.png"
                title="ORGANIC & NON-TOXIC"
              />
              <FeatureCart
                src="/images/feature/strictly-ethical.png"
                title="STRICTLY ETHICAL BUSINESS"
              />
            </div>
          </section>

          {/* advertise */}
          <section className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              <Image
                width={615}
                height={180}
                src="/images/mango-bazaar-left-banner.png"
                alt="slider 1"
                // className="w-full h-full"
              />
              <Image
                width={615}
                height={180}
                src="/images/mango-bazaar-right-banner.png"
                alt="slider 1"
                // className="w-full h-full"
              />
            </div>
          </section>
        </div>

        {/* banner */}
        <section className="my-10">
          <div className="relative h-80 lg:h-[28rem]">
            <div className="w-full h-full">
              <Image
                width={1920}
                height={440}
                src="/images/mango-bazaar-middle-banner.png"
                alt="slider 1"
                className="w-full h-full"
              />
            </div>
            <div className="container">
              <div className="flex flex-col items-start gap-y-4 absolute top-1/3">
                <p className="text-lg text-primary-yellow">
                  MANGO SEASON ROCKS !
                </p>
                <div>
                  <h5 className="text-3xl font-bold">GET AUTHENTIC</h5>
                  <p className="text-2xl font-semibold">
                    DEVGAD RATNAGIRI ALPHONSO
                  </p>
                </div>
                <Button desc="PURCHASE NOW" />
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Index;
