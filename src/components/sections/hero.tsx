import React from "react";
import {Button} from "../ui/button";
import Image from "next/image";
import {ShoppingCart} from "lucide-react";

function Hero() {
  return (
    <section className="bg-bg-hero pt-39.5 pb-99 overflow-hidden">
      <div className="relative px-4 lg:px-0 container mx-auto flex flex-col-reverse gap-10 lg:flex-row items-center justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-[48px] font-semibold text-secondary lg:w-122">
              Enjoy your <span className="text-primary">coffee</span> before
              your activity
            </h2>
            <p className="text-[18px] text-light lg:w-98.25">
              Boost your productivity and build your mood with a glass of coffee
              in the morning
            </p>
          </div>
          <div className="flex items-center gap-6.5">
            <Button className="flex items-center gap-2.5 h-11.5 w-42.5 rounded-[33px] font-semibold text-[14px] bg-secondary">
              Order now
              <div className="bg-primary rounded-full p-1">
                <ShoppingCart size={14} />
              </div>
            </Button>
            <Button
              variant={"ghost"}
              className="text-primary hover:text-orange-600 font-bold text-[12px]"
            >
              More menu
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/img-hero.png"
            alt="hero"
            width={900}
            height={700}
            loading="eager"
            className="w-142"
          />
        </div>
        <div className="absolute top-180 -left-40 lg:top-98.25 lg:-left-30">
          <Image
            src="/bgimghero2.svg"
            alt="image coffe"
            width={569}
            height={394}
            loading="eager"
          />
        </div>
        <div className="absolute -top-60 -right-70 lg:-top-34.25 lg:-right-30">
          <Image
            src="/bgimghero1.svg"
            alt="image coffe"
            width={599}
            height={394}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
