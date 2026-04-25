import Image from "next/image";
import React from "react";
import {Button} from "../ui/button";

function About() {
  return (
    <section className="bg-bg-hero py-10 lg:py-0 mt-10 lg:mt-57">
      <div className="container mx-auto px-4 lg:px-0 relative">
        <div className="lg:absolute lg:-top-30 lg:left-1/2 lg:-translate-x-1/2 flex flex-col lg:flex-row items-center lg:items-end justify-center gap-5 lg:gap-40">
          <Image
            src="/about.png"
            alt="about image"
            width={360}
            height={498}
            loading="eager"
            className="rounded-[12px] p-1.5 bg-glass "
          />

          <div className="self-start lg:self-auto">
            <h3 className="text-[32px] font-semibold mb-5.75">
              About <span className="border-b-4 border-b-primary">us</span>
            </h3>
            <p className="text-[24px] sm:w-87 tracking-[4%] font-semibold mb-3.75">
              We provide quality coffee, and ready to deliver.
            </p>
            <p className="text-[18px] text-light tracking-[4%] sm:w-119 mb-7.75">
              We are a company that makes and distributes delicious drinks. our
              main product is made with a secret recipe and available in stores
              worldwide.
            </p>
            <Button className="bg-secondary text-yellow-hover font-bold rounded-[33px] px-6 py-2.5">
              Get your coffee
            </Button>
          </div>
        </div>
      </div>
      <Image
        src="/Exclude.png"
        alt="exclude"
        width={1500}
        height={572}
        loading="eager"
        className="opacity-10 top-0 mx-auto hidden lg:block min-h-93"
      />
    </section>
  );
}

export default About;
