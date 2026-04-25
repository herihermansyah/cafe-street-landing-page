import Image from "next/image";
import React from "react";
import {Input} from "../ui/input";
import {Button} from "../ui/button";

function NewsLetter() {
  return (
    <section className="my-30 px-4 lg:px-0">
      <div className="container mx-auto relative">
        <Image
          src="/bg-footer.png"
          alt="news letter"
          width={1200}
          height={400}
          loading="eager"
          className="w-full h-auto rounded-[24px]"
        />
        <div className="absolute flex flex-col gap-2 sm:gap-8 items-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <h3 className="font-semibold text-md sm:text-[32px] text-white text-center">
            Subscribe to get 50% discount price
          </h3>
          <div className="relative">
            <Input
              placeholder="Email address"
              className="w-80 sm:w-121.5 h-13.5 pl-5 bg-white text-[16px] text-light font-bold rounded-[42px]"
            />
            <Button className="w-34.5 h-11 rounded-[33px] absolute right-2 top-1/2 -translate-y-1/2 bg-secondary">
              Order now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
