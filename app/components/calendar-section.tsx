"use client";

import { amaticSC } from "../constants/font";
import { Calendar } from "@/components/ui/calendar";
import { differenceInDays } from "date-fns";
import Image from "next/image";
export const CalendarSection = () => {
  const totalDays = differenceInDays(
    new Date("2025-01-08T00:00:00"),
    new Date(Date.now())
  );

  return (
    <div>
      <div className="bg-[#C3E1DB]">
        <Image
          className="w-full"
          height={89}
          width={2560}
          alt=""
          src="/h1-divider-img-2-1.png"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-28 bg-[#F6F1E4] gap-10 relative">
        <Image
          className="absolute z-10 animate-qodef-move-and-return"
          height={152}
          width={104}
          alt=""
          src="/landing-rev-img-28.png"
        />
        <Image
          className="absolute z-10 top-0 right-0 w-[calc(128px/2)] h-[calc(177px/2)] animate-qodef-move-and-return"
          height={177}
          width={128}
          alt=""
          src="/graphics/graphic-5.png"
        />
        <Image
          className="absolute z-10 bottom-0 right-0"
          height={126}
          width={71}
          alt=""
          src="/graphics/graphic-6.png"
        />
        <Image
          className="absolute z-10 bottom-0 left-0"
          height={62}
          width={62}
          alt=""
          src="/graphics/graphic-7.png"
        />
        <div className="p-8 bg-white rounded">
          <div className="h-[480px] w-full flex items-center justify-center flex-col border-4 rounded border-[#C3E1DB] space-y-5 p-4">
            <h3 className={`${amaticSC.className} text-5xl`}>Save the Date</h3>

            <div className="text-sm sm:text-base flex items-start text-center">
              <Image
                alt=""
                className="w-[24px] h-[24px]"
                height={48}
                width={48}
                src={"/h4-rev-pin-img.png"}
              />
              NHÀ HÀNG AROMA
              STELIA BEACH RESORT, LÔ CI ĐỘC LẬP - PHƯỜNG 9 - TUY HÒA
            </div>
            <div className="text-sm sm:text-base flex items-start text-center">
              <Image
                alt=""
                className="w-[24px] h-[24px]"
                height={48}
                width={48}
                src={"/h4-rev-clock-img.png"}
              />
              17h00 27 Tháng 1 Năm 2025
            </div>
            <div className="w-full relative">
              <Image
                alt=""
                className="h-28 w-auto absolute bottom-0 right-0 animate__animated animate__slower animate__bounce animate__infinite"
                src={"/h4-rev-slide4-img-6.png"}
                width={160}
                height={194}
              />
              <Image
                className="w-full"
                alt=""
                src={"/h4-rev-slide4-img-7.png"}
                width={1044}
                height={111}
              />
            </div>
          </div>
        </div>
        <div className="p-8 bg-white ">
          <div className="h-[480px] w-full flex items-center justify-center flex-col border-4 rounded border-[#C3E1DB]">
            <Calendar
              mode="single"
              disableNavigation
              // defaultMonth={new Date("2025-01-31T00:00:00")}
              selected={new Date("2025-01-27T00:00:00")}
              className="border-0"
            />
          </div>
        </div>
      </div>
      <Image
        className="w-full"
        height={89}
        width={2560}
        alt=""
        src="/divider-1.png"
      />
    </div>
  );
};
