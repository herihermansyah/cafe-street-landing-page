import Image from "next/image";
import React from "react";

function Testimonial() {
  return (
    <section className="mt-30 relative overflow-hidden">
      <div className="bg-bg-hero h-125 w-236.25 rounded-tr-[30px] rounded-br-[30px]">
        <Image
          src="/Exclude2.png"
          alt="testimonial"
          width={1000}
          height={464}
          loading="eager"
          className="opacity-10"
        />
        <div className="absolute top-1/2 -translate-y-1/2 px-4 lg:px-0 container left-0 right-0 mx-auto">
          <div className="flex lg:flex-row flex-col items-center gap-15">
            <div className="self-start lg:self-automin-">
              <h3 className="font-semibold text-[32px] whitespace-nowrap">
                What they say about us
              </h3>
              <p className="text-light text-[18px] lg:w-88">
                We always provide the best service and always maintain the
                quality of coffee
              </p>
              min-{" "}
            </div>
            <div className="relative container ">
              <div className="flex items-center gap-25">
                <div className="relative">
                  <Image
                    src="/test-image.png"
                    alt="testi image"
                    width={220}
                    height={280}
                    loading="eager"
                    className="bg-bg-hero2 p-1 min-w-53.25 min-h-70"
                  />
                  <div className="w-fit rounded-[8px] p-3 bg-bg-hero2 border-4 border-bg-hero absolute bottom-5 left-10">
                    <p>Naura</p>
                    <p className="text-[14px] w-53.25">
                      I really love the cappucino, the coffee was very
                      smooth{" "}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/test-image.png"
                    alt="testi image"
                    width={220}
                    height={280}
                    loading="eager"
                    className="bg-bg-hero2 p-1 min-w-53.25 min-h-70"
                  />
                  <div className="w-fit rounded-[8px] p-3 bg-bg-hero2 border-4 border-bg-hero absolute bottom-5 left-10">
                    <p>Naura</p>
                    <p className="text-[14px] w-53.25">
                      I really love the cappucino, the coffee was very
                      smooth{" "}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/test-image.png"
                    alt="testi image"
                    width={220}
                    height={280}
                    loading="eager"
                    className="bg-bg-hero2 p-1 min-w-53.25 min-h-70"
                  />
                  <div className="w-fit rounded-[8px] p-3 bg-bg-hero2 border-4 border-bg-hero absolute bottom-5 left-10">
                    <p>Naura</p>
                    <p className="text-[14px] w-53.25">
                      I really love the cappucino, the coffee was very
                      smooth{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 absolute -bottom-3 lg:-bottom-8 -translate-x-1/2 left-1/2">
                <div className="w-2 h-2 hover:bg-primary cursor-pointer bg-primary/20 rounded-full" />
                <div className="w-2 h-2 hover:bg-primary cursor-pointer bg-primary/20 rounded-full" />
                <div className="w-2 h-2 hover:bg-primary cursor-pointer bg-primary/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
