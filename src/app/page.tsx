import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import HowToUse from "@/components/sections/how-to-use";
import Menu from "@/components/sections/menu";
import NewsLetter from "@/components/sections/news-letter";
import PopularProduct from "@/components/sections/popular-product";
import Testimonial from "@/components/sections/testimonial";
import React from "react";

function page() {
  return (
    <div>
      <Hero />
      <PopularProduct />
      <HowToUse />
      <About />
      <Menu />
      <Testimonial />
      <NewsLetter />
    </div>
  );
}

export default page;
