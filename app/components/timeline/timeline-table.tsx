import React from "react";
import TimelineRow from "./timeline-row";
import Image from "next/image";
import { amaticSC } from "@/app/constants/font";

const TimelineTable = () => {
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

      <div className="bg-[#F6F1E4] flex flex-col items-center p-16 gap-4">
        <h2
          className={`${amaticSC.className} text-center text-6xl text-black font-extrabold`}
        >
          Cột mốc cuộc đời
        </h2>
        <Image alt="" width={48} height={58} src={"/icon.svg"} />
        <p className="text-center">
          Thật hạnh phúc khi Bảo và Châu được thông báo Ngày Trọng Đại đến tất
          cả Quý họ hàng, bạn bè, đồng nghiệp, người quen,...
        </p>

        <div className="flex flex-col w-full">
          <div className="grid grid-cols-3 py-4">
            <div className="text-sm sm:text-base uppercase text-black font-light whitespace-nowrap">
              Sự kiện
            </div>
            <div className="text-sm sm:text-base uppercase text-black font-light whitespace-nowrap">
              Địa điểm
            </div>
            <div className="text-sm sm:text-base uppercase text-black font-light whitespace-nowrap">
              Thời gian
            </div>
          </div>
          <TimelineRow
            event="Tiệc cưới"
            date="08-01-2025"
            location="Tuy Hoà, Phú Yên"
            image="https://ik.imagekit.io/gsozk5bngn/Wedding/Bi%CC%80a-3_lkJOLr2cY0.jpeg"
          />
          <TimelineRow
            event="Lễ cưới"
            date="09-01-2025"
            image="https://ik.imagekit.io/gsozk5bngn/Wedding/tierra-huong-dan-trang-tri-ban-tho-gia-tien-dung-cach-cho-ngay-cuoi-5-cglKq32pxX_XvW1M2q39.jpg"
            location="Tuy Hoà, Phú Yên"
          />
          <TimelineRow
            event="Tiệc báo hỷ"
            date="22-02-2025"
            image="https://ik.imagekit.io/gsozk5bngn/Wedding/thomas-william-nAvodiKjbTM-unsplash_H73aPOoPW.jpg"
            location="Thành phố Hồ Chí Minh"
          />
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

export default TimelineTable;
