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
    asset: "/gallery/h2-gallery-img-1.jpg",
    width: 800,
    height: 622,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/h2-gallery-img-2.jpg",
    width: 800,
    height: 622,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/h2-gallery-img-3.jpg",
    width: 800,
    height: 622,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/h2-gallery-img-5.jpg",
    width: 800,
    height: 622,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/h2-gallery-img-7.jpg",
    width: 800,
    height: 622,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/h2-gallery-img-8.jpg",
    width: 800,
    height: 622,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/h2-gallery-img-9.jpg",
    width: 800,
    height: 622,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/h2-gallery-img-10.jpg",
    width: 800,
    height: 622,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/h2-gallery-img-11.jpg",
    width: 800,
    height: 622,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/h2-gallery-img-12.jpg",
    width: 800,
    height: 622,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/h2-gallery-img-13.jpg",
    width: 800,
    height: 622,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/h2-gallery-img-14.jpg",
    width: 800,
    height: 622,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/h2-gallery-img-15.jpg",
    width: 800,
    height: 622,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/h2-gallery-img-16.jpg",
    width: 800,
    height: 622,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/h2-gallery-img-18.jpg",
    width: 800,
    height: 622,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: "/gallery/h2-gallery-img-19.jpg",
    width: 800,
    height: 622,
    alt: "A hiker sitting near the cliff",
  },
].map(
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
