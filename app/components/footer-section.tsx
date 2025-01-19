"use client";

import { amaticSC } from "../constants/font";
import catJson from "../../lib/cat.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });
export const FooterSection = () => {
  return (
    <footer className="w-full h-[300px] flex bg-white justify-center items-center py-8 ">
      <Lottie
        loop
        animationData={catJson}
        play
        style={{ width: 200, height: 200 }}
      />
      <div className={`${amaticSC.className} text-6xl`}>Thank you!</div>
    </footer>
  );
};
