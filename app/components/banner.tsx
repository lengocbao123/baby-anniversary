"use client";
import React from "react";
import Image from "next/image";
import { balooChettan } from "../constants/font";
import partyJson from "../../lib/party.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

const BannerSection = () => {
  return (
    <div className="w-full bg-[#F6F1E4] overflow-hidden  sm:min-h-screen relative flex flex-col items-center justify-between sm:justify-between">
      <div className="flex">
        <figure className="w-[320px] h-[180px] rounded-lg animate__animated animate__delay-3s animate__fadeInDown hidden sm:block m-0 sm:mt-10">
          <Image
            src={"/kids/kid-1.jpg"}
            alt=""
            width={1170}
            height={650}
            className="w-full h-full object-cover aspect-square"
            style={{
              maskImage: "url('/svg/blob.svg')",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          />
        </figure>
        <figure className="w-[320px] h-[180px] rounded-lg animate__animated animate__delay-2s animate__fadeInDown">
          <Image
            src={"/kids/kid-2.jpg"}
            alt=""
            width={1170}
            height={650}
            className="w-full h-full object-cover aspect-square"
            style={{
              maskImage: "url('/svg/blob.svg')",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          />
        </figure>
        <figure className="w-[320px] h-[180px] rounded-lg animate__animated animate__delay-1s animate__fadeInDown">
          <Image
            src={"/kids/kid-3.jpg"}
            alt=""
            width={1170}
            height={650}
            className="w-full h-full object-cover aspect-square"
            style={{
              maskImage: "url('/svg/blob-2.svg')",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          />
        </figure>
        <figure className="w-[320px] h-[180px] rounded-lg animate__animated animate__fadeInDown  hidden sm:block m-0 sm:mt-10">
          <Image
            src={"/kids/kid-4.jpg"}
            alt=""
            width={1170}
            height={650}
            className="w-full h-full object-cover aspect-square"
            style={{
              maskImage: "url('/svg/blob-3.svg')",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          />
        </figure>
      </div>
      <div className="flex justify-center gap-5 relative animate__animated animate__slow animate__delay-3s animate__bounceInUp">
        <div>
          <Image
            className="hidden sm:block h-12 w-auto rounded-lg absolute z-10 bottom-[100%] left-0 animate-qodef-flight"
            src={"/graphics/graphic-4.png"}
            alt=""
            width={183}
            height={187}
          />
          <Image
            className="h-28 w-auto rounded-lg absolute z-10 bottom-[100%] right-0 animate-qodef-flight"
            src={"/graphics/graphic-1.png"}
            alt=""
            width={183}
            height={187}
          />
          <Image
            className="hidden sm:block h-24 w-auto rounded-lg absolute z-10 top-[100%] left-0 animate-first-lower-left-leg"
            src={"/graphics/graphic-2.png"}
            alt=""
            width={183}
            height={187}
          />
          <Image
            className="w-auto rounded-lg absolute z-10 top-[100%] right-1/4 sm:right-0 animate-first-lower-left-leg"
            src={"/graphics/graphic-3.png"}
            alt=""
            width={183}
            height={187}
          />
          <div className="w-auto rounded-lg absolute z-10 top-0 right-0">
            <Lottie
              loop
              animationData={partyJson}
              play
              style={{ width: 200, height: 200 }}
            />
          </div>
          <div className="h-24 w-auto rounded-lg absolute z-10 top-0 left-0">
            <Lottie
              loop
              animationData={partyJson}
              play
              style={{ width: 200, height: 200 }}
            />
          </div>
        </div>
        <div className="z-20 flex">
          <div
            className={`${balooChettan.className} flex flex-col sm:flex-row text-8xl space-x-4 font-semibold items-center text-center`}
          >
            <span className="text-[#8ec7ad]">Always</span>
            <span className="text-[#444444]">Making</span>
            <span className="text-[#f37746]">Friend</span>
          </div>
        </div>
      </div>
      <div className="flex">
        <figure className="w-[320px] h-[180px] rounded-lg animate__animated animate__fadeInUp m-0 sm:-mt-10  hidden sm:block">
          <Image
            src={"/kids/kid-5.jpg"}
            alt=""
            width={1170}
            height={650}
            className="w-full h-full object-cover aspect-square"
            style={{
              maskImage: "url('/svg/blob-4.svg')",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          />
        </figure>
        <figure className="w-[320px] h-[180px] rounded-lg animate__animated animate__delay-1s animate__fadeInUp">
          <Image
            src={"/kids/kid-6.jpg"}
            alt=""
            width={1170}
            height={650}
            className="w-full h-full object-cover aspect-square"
            style={{
              maskImage: "url('/svg/blob-3.svg')",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          />
        </figure>
        <figure className="w-[320px] h-[180px] rounded-lg animate__animated animate__delay-2s animate__fadeInUp">
          <Image
            src={"/kids/kid-7.jpg"}
            alt=""
            width={1170}
            height={650}
            className="w-full h-full object-cover aspect-square"
            style={{
              maskImage: "url('/svg/blob.svg')",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          />
        </figure>
        <figure className="w-[200px] h-[200px] rounded-lg animate__animated animate__delay-3s animate__fadeInUp  m-0 sm:-mt-10  hidden sm:block">
          <Image
            src={"/kids/kid-8.jpg"}
            alt=""
            width={1170}
            height={650}
            className="w-full h-full object-cover aspect-square"
            style={{
              maskImage: "url('/svg/blob-1.svg')",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          />
        </figure>
      </div>
    </div>
  );
};

export default BannerSection;
