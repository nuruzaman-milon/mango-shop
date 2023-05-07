import Layout from "@/components/Layout";
import Carosel from "@/components/home/Carosel";
import Cart from "@/components/home/Cart";
import TrendingButton from "@/components/home/TrendingButton";
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
          <section className="section-gap">
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
        </div>
      </>
    </Layout>
  );
};

export default Index;
