import React from "react";

function Menu() {
  return (
    <section className="container mx-auto px-4 lg:px-0 mt-30">
      <div>
        <h3 className="text-[32px] font-semibold mb-7.75">
          Special menu{" "}
          <span className="border-b-4 border-b-primary">for you</span>
        </h3>
        <div className="w-full flex justify-center lg:block">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-9.5">
            <div className="bg-red-500 w-70 h-70 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:h-68 xl:w-90 xl:h-90 2xl:w-110 2xl:h-110 rounded-sm"></div>
            <div className="bg-red-500 w-70 h-70 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:h-68 xl:w-90 xl:h-90 2xl:w-110 2xl:h-110 rounded-sm"></div>
            <div className="bg-red-500 w-70 h-70 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:h-68 xl:w-90 xl:h-90 2xl:w-110 2xl:h-110 rounded-sm"></div>
            <div className="bg-red-500 w-70 h-70 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:h-68 xl:w-90 xl:h-90 2xl:w-110 2xl:h-110 rounded-sm"></div>
            <div className="bg-red-500 w-70 h-70 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:h-68 xl:w-90 xl:h-90 2xl:w-110 2xl:h-110 rounded-sm"></div>
            <div className="bg-red-500 w-70 h-70 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:h-68 xl:w-90 xl:h-90 2xl:w-110 2xl:h-110 rounded-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
