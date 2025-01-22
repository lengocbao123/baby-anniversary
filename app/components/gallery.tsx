"use client";
import { useState } from "react";
import { ColumnsPhotoAlbum, Photo } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/columns.css";
// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Image from "next/image";
import { amaticSC, balooChettan } from "../constants/font";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = [
  {
    asset: "/gallery/VTT TET 0463-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/1/VTT TET 0123-min.JPG",
    height: 3648,
    width: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/VTT TET 0308-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/VTT TET 0654-min.JPG",
    height: 3648,
    width: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/VTT TET 0410-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/1/VTT TET 0018-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/VTT TET 0598-min.JPG",
    height: 3648,
    width: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/VTT TET 0300-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/VTT TET 0418-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/VTT TET 0370-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/1/VTT TET 0034-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/VTT TET 0632-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/1/VTT TET 0162-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/VTT TET 0435-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/1/VTT TET 0012-min.JPG",
    height: 3648,
    width: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/VTT TET 0267-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/1/VTT TET 0175-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/VTT TET 0457-min.JPG",
    height: 3648,
    width: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/1/VTT TET 0072-min.JPG",
    height: 3648,
    width: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/VTT TET 0388-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/1/VTT TET 0020-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/VTT TET 0318-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/VTT TET 0292-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/1/VTT TET 0066-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/1/VTT TET 0137-min.JPG",
    width: 3648,
    height: 5472,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/VTT TET 0229-min.JPG",
    width: 2272,
    height: 3408,
    alt: "A hiker sitting near the cliff",
  },
]
  .sort(() => 0.5 - Math.random())
  .map(
    ({ asset, alt, width, height }) =>
      ({
        src: asset,
        alt,
        width,
        height,
        srcSet: breakpoints.map((breakpoint) => ({
          src: asset,
          width: breakpoint,
          height: Math.round((height / width) * breakpoint),
        })),
      } as Photo)
  );

export default function App() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="p-16 flex flex-col items-center space-y-4">
      <div className="flex">
        <h2
          className={`${amaticSC.className} text-center text-6xl text-black font-extrabold`}
        >
          Khoảnh khắc
        </h2>
        <Image
          className="w-10 h-auto animate-qodef-flight"
          src={"/landing-img-03.png"}
          alt=""
          width={76}
          height={107}
        />
      </div>

      <p className={`${balooChettan.className} text-lg text-center`}>
        Những kí ức đẹp của bé yêu sẽ mãi mãi được lưu giữ.
      </p>
      <ColumnsPhotoAlbum
        photos={photos}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}
