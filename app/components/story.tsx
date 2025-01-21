"use client";
import Image from "next/image";
import { amaticSC, balooChettan } from "../constants/font";
import Marquee from "./marquee";

const images = [
  {src:"/slides/0008-min.JPG",width:5472,height:3648},
  {src:"/slides/0295-min.JPG",width:3648,height:5472},
  {src:"/slides/0017-min.JPG",width:5472,height:3648},
  {src:"/slides/0065-min.JPG",width:3648,height:5472},
  {src:"/slides/0127-min.JPG",width:3648,height:5472},
  {src:"/slides/0261-min.JPG",width:3648,height:5472},
  {src:"/slides/0275-min.JPG",width:3648,height:5472},
  {src:"/slides/0251-min.JPG",width:5472,height:3648},
];
const Story = ({}) => {
  return (
    <div className="bg-[#F6F1E4]">
      <Image
        className="w-full"
        height={89}
        width={2560}
        alt=""
        src="/divider-2.png"
      />
      <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#C3E1DB] p-12 overflow-hidden ">
        <div className="col-span-2 flex flex-col items-center sm:items-start justify-center gap-4 z-20">
          <Image
            height={258}
            width={200}
            alt=""
            className="animate-first-lower-left-leg"
            src="/h1-divider-animation.png"
          />
          <h2
            className={`${amaticSC.className} text-center text-6xl text-black font-extrabold`}
          >
            Câu chuyện
          </h2>
          <p
            className={`${balooChettan.className} text-black text-sm sm:text-base`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            corrupti officiis. Eveniet laudantium vero natus delectus aliquid,
            placeat accusantium molestiae ullam cumque voluptas, facere vitae ex
            dignissimos. Eveniet, consequatur soluta.
          </p>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Image
              className="animate-first-lower-left-leg"
              src={"/h2-img-5.png"}
              alt=""
              width={250}
              height={222}
            />
            <Image
              className="animate-first-lower-left-leg"
              src={"/h2-img-6.png"}
              alt=""
              width={250}
              height={222}
            />
            <Image
              className="animate-first-lower-left-leg hidden sm:block m-0"
              src={"/h2-img-7.png"}
              alt=""
              width={250}
              height={222}
            />
            <Image
              className="animate-first-lower-left-leg hidden sm:block m-0"
              src={"/h2-img-8.png"}
              alt=""
              width={250}
              height={222}
            />
          </div>
        </div>
        <div className="col-span-1 hidden sm:flex flex-col justify-center items-center relative rounded-lg">
          <div className="z-10 bg-gradient-to-b from-[#C3E1DB] to-transparent absolute top-0 inset-x-0 h-10"></div>
          <Marquee vertical className="[--duration:60s] h-[750px]">
            {images.map((image, index) => (
              <Image
                key={index}
                className="h-auto w-full"
                alt=""
                src={image.src}
                width={image.width}
                height={image.height}
              />
            ))}
          </Marquee>
          <div className="z-10 bg-gradient-to-t from-[#C3E1DB]  to-transparent absolute bottom-0 inset-x-0 h-10"></div>
        </div>
        <div className="col-span-1 flex sm:hidden items-center justify-center rounded-lg overflow-hidden relative ">
          <div className="z-10 bg-gradient-to-r from-[#C3E1DB] to-transparent absolute left-0 inset-y-0 w-5"></div>
          <Marquee pauseOnHover className="[--duration:60s] h-[400px]">
            {images.map((image, index) => (
              <Image
                key={index}
                className="h-full w-auto"
                alt=""
                src={image.src}
                width={image.width}
                height={image.height}
              />
            ))}
          </Marquee>
          <div className="z-10 bg-gradient-to-l from-[#C3E1DB] to-transparent absolute right-0 inset-y-0 w-5"></div>
        </div>
      </div>
    </div>
  );
};
export default Story;
