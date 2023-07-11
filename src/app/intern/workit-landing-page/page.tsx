"use client";

import Image from "next/image";
import { useEffect } from "react";

// Images
import bg1 from "./bg-pattern-1.svg";
import bg2 from "./bg-pattern-2.svg";
import bg3 from "./bg-pattern-3.svg";
import phone from "./phone.png";

export default function WorkitLandingPage() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".workit-landing-page .header");
      if (header && window.scrollY > 30) {
        header.classList.add(
          "!border-white",
          "!bg-white",
          "!text-[#24053E]",
          "drop-shadow-2xl"
        );
      } else {
        header?.classList.remove(
          "border-white",
          "!bg-white",
          "!text-[#24053E]",
          "!drop-shadow-2xl"
        );
      }
    });
  }, []);

  return (
    <section className="workit-landing-page  bg-[#fcf8ff] text-[#24053E] relative">
      <header className="header sticky top-0 left-0  duration-300 border-b-2 border-b-transparent z-[5000]  bg-[#24053E] rounded-b-2xl">
        <div className="header-container container flex justify-between items-center">
          <div className="title">
            <h1 className="text-[36px]  font-bold leading-none">
              work<span className="font-normal">it</span>
            </h1>
          </div>
          <div className="header-link">
            <span className="cursor-pointer border-b border-transparent duration-300 hover:border-b-green-500">
              Apply for access
            </span>
          </div>
        </div>
      </header>

      <section className="hero relative z-[50] text-white ">
        <div className="hero-container container flex flex-col items-center">
          <h1 className="mb-10 text-[56px] md:text-[80px] max-w-[635px] text-center pt-4">
            Data <span className="border-b-2 border-[#44FFA1]">tailored</span>{" "}
            to your needs.
          </h1>
          <button className=" !rounded-lg px-8 py-4 bg-[#44FFA1] !border-2 border-[#44FFA1] hover:!bg-transparent !text-[#24053E] hover:!text-white mb-[50px] duration-300">
            Learn More
          </button>

          <div className="max-w-[767px] max-h-[441px]">
            <Image
              src={phone}
              alt="phone"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      <section className="features  relative z-[50] mb-[50px] md:mb-[170px]">
        <div className="container features-container flex align-middle justify-between gap-12 flex-col xl:flex-row">
          <div className="feature flex flex-col gap-2  text-center sm:text-left sm:flex-row xl:flex-col sm:gap-4 items-center xl:text-center xl:w-[354px] xl:h-[308px] ">
            <div className="circle w-[48px] h-[46px] p-6 relative border-2 border-[#B8B8B8] rounded-full">
              <h2 className="leading-3 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                1
              </h2>
            </div>
            <div className="feature-info">
              <h1 className="text-[32px] font-semibold mt-[20px] xl:mt-[56px]">
                Actionable insights
              </h1>
              <p className="text-[18px] xl:mt-[28px] mt-[10px] ">
                Optimize your products, improve customer satisfaction and stay
                ahead of the competition with our product data analytics.
              </p>
            </div>
          </div>
          <div className="feature flex flex-col gap-2  text-center sm:text-left sm:flex-row xl:flex-col sm:gap-4 items-center xl:text-center xl:w-[354px] xl:h-[308px] ">
            <div className="circle w-[48px] h-[46px] p-6 relative border-2 border-[#B8B8B8] rounded-full">
              <h2 className="leading-3 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                2
              </h2>
            </div>
            <div className="feature-info">
              <h1 className="text-[32px] font-semibold mt-[20px] xl:mt-[56px]">
                Data-driven decisions
              </h1>
              <p className="text-[18px] xl:mt-[28px] mt-[10px] ">
                Make data-driven decisions with our product data analytics. Our
                AI-generated reports help you unlock insights hidden in your
                product data.
              </p>
            </div>
          </div>
          <div className="feature flex flex-col gap-2  text-center sm:text-left sm:flex-row xl:flex-col sm:gap-4 items-center xl:text-center xl:w-[354px] xl:h-[308px] ">
            <div className="circle w-[48px] h-[46px] p-6 relative border-2 border-[#B8B8B8] rounded-full">
              <h2 className="leading-3 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                3
              </h2>
            </div>
            <div className="feature-info">
              <h1 className="text-[32px] font-semibold mt-[20px] xl:mt-[56px]">
                Always affordable
              </h1>
              <p className="text-[18px] xl:mt-[28px] mt-[10px] ">
                Always affordable pricing that scales with your business. Get
                top-quality product data analytics services without hidden costs
                or unexpected fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="apply bg-white md:py-[100px]">
        <div className="container apply-container flex flex-col lg:flex-row">
          <div className="avatar max-w-[281px] h-[281px] md:max-w-[477px] md:h-[477px] w-full lg:translate-y-0 lg:left-0 lg:-translate-x-0 -translate-x-1/2 left-1/2 translate-y-10 relative z-[4]">
            <Image
              src={"https://avatars.githubusercontent.com/u/80913896?v=4"}
              alt="avatar"
              className="rounded-full"
              width={2000}
              height={2000}
            />
          </div>

          <div className="apply-card bg-[#24053E] text-white lg:translate-y-1/4 lg:-translate-x-14 lg:top-1/2 text-center w-full max-h-[474px] rounded-lg  lg:text-left p-8 md:p-14 lg:p-16 relative z-[10]">
            <h1 className="text-[32px] font-semibold lg:text-[56px]">
              Be the first to test
            </h1>
            <p className="mb-8 text-base">
              {`Hi, I'm Louis Graham, the founder of the company. Book a demo call
              with me to become a beta tester for our app and kickstart your
              company. Apply for access below and I’ll be in touch to schedule a
              call.`}
            </p>
            <button className="px-8 !rounded-lg py-4 bg-[#44FFA1] !border-2 border-[#44FFA1] hover:!bg-transparent !text-[#24053E] hover:!text-white  duration-300">
              Apply for access
            </button>
          </div>
        </div>
      </section>

      <div className="curved-background absolute top-0 left-0 w-full h-[540px] md:h-[730px] bg-[#24053E] z-[1] rounded-b-[10%] lg:rounded-b-[24%]"></div>
    </section>
  );
}
