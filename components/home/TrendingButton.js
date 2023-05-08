import React from "react";

const TrendingButton = ({ trendingBtn, setTrendingBtn }) => {
  // console.log(trendingBtn);
  return (
    <>
      <button
        onClick={() => setTrendingBtn("ratnagiri")}
        className={`${
          trendingBtn === "ratnagiri" ? "border-primary-yellow" : "border-white"
        } border hover:border-primary-yellow px-4 py-1 rounded-3xl transition-all duration-500 ease-in-out`}
      >
        RATNAGIRI
      </button>
      <button
        onClick={() => setTrendingBtn("devgad")}
        className={`${
          trendingBtn === "devgad" ? "border-primary-yellow" : "border-white"
        } border hover:border-primary-yellow px-4 py-1 rounded-3xl transition-all duration-500 ease-in-out`}
      >
        DEVGAD
      </button>
      <button
        onClick={() => setTrendingBtn("kesar")}
        className={`${
          trendingBtn === "kesar" ? "border-primary-yellow" : "border-white"
        } border hover:border-primary-yellow px-4 py-1 rounded-3xl transition-all duration-500 ease-in-out`}
      >
        KESAR
      </button>
      <button
        onClick={() => setTrendingBtn("payari")}
        className={`${
          trendingBtn === "payari" ? "border-primary-yellow" : "border-white"
        } border hover:border-primary-yellow px-4 py-1 rounded-3xl transition-all duration-500 ease-in-out`}
      >
        PAYARI
      </button>
    </>
  );
};

export default TrendingButton;
