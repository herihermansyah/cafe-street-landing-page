import React from "react";

function PopularProduct() {
  return (
    <section className="container mx-auto static lg:relative top-0 lg:-top-50 px-4 lg:px-0 overflow-hidden">
      <h3 className="text-[32px] font-semibold mb-10 lg:mb-34.25">
        Popular <span className="border-b-2 border-b-primary">Now</span>
      </h3>
      <div className="relative">
        <svg
          viewBox="0 0 1268 364"
          fill="none"
          className="w-full h-auto hidden lg:block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 64.0023C0 27.1559 31.0343 -2.08032 67.8151 0.116133L1207.82 68.1937C1241.62 70.2124 1268 98.2154 1268 132.08V299.066C1268 334.413 1239.35 363.066 1204 363.066H64C28.6538 363.066 0 334.413 0 299.066V64.0023Z"
            fill="#F9D9AA"
          />
        </svg>
        <div className="lg:absolute lg:-top-25 w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-9.5 items-center">
            <div className="bg-red-500 w-70 h-70 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:h-68 xl:w-90 xl:h-90 2xl:w-110 2xl:h-110 rounded-sm"></div>
            <div className="bg-red-500 w-70 h-70 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:h-68 xl:w-90 xl:h-90 2xl:w-110 2xl:h-110 rounded-sm"></div>
            <div className="bg-red-500 w-70 h-70 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:h-68 xl:w-90 xl:h-90 2xl:w-110 2xl:h-110 rounded-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularProduct;
