import Image from "next/image";
import React from "react";

const imageData = [
  {
    id: 1,
    image: "/coffee-cup1.png",
    title: "choose your coffee",
    description: "there are 20+ coffees for you",
  },
  {
    id: 2,
    image: "/food-truck1.png",
    title: "we delivery it to you",
    description: "Choose delivery service",
  },
  {
    id: 3,
    image: "/coffee-cup1.png",
    title: "Enjoy your coffee",
    description: "Choose delivery service",
  },
];

function HowToUse() {
  return (
    <section className="container mx-auto px-4 flex flex-col gap-5.5 mt-20 lg:mt-0">
      <h3 className="text-[32px] font-semibold">
        How to use delivery{" "}
        <span className="border-b-4 border-b-primary">service</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7.5 justify-items-center">
        {imageData.map((item) => (
          <div key={item.id} className="flex flex-col gap-4.25 px-6 py-4 items-center">
            <Image
              src={item.image}
              alt="image how to use"
              width={159}
              height={159}
              loading="eager"
            />
            <div className="flex flex-col gap-2 items-center text-center">
              <p className="text-[24px] font-semibold text-secondary">{item.title}</p>
              <p className="text-[18px] tracking-[4%] ">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowToUse;
