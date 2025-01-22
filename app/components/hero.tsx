'use client'

import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import { balooChettan, amaticSC } from '../constants/font'

const images = [
  'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07035_M_GKwS4eK.jpg?updatedAt=1735456328039',
  'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07443_mgzYHWWE5.jpg?updatedAt=1735456420822',
  'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07508_2PCcNmZwm.jpg?updatedAt=1735456425512',
  'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07116_kkam7SH6E.jpg?updatedAt=1735456328060',
  'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07163_YopmCnEJV.jpg?updatedAt=1735456330128'
]
const HeroSection = () => {
  return (
    <section>
      <div className="p-16 flex flex-col items-center bg-[#F6F1E4] overflow-hidden">
        <div className="flex-grow w-fit h-fit text-center py-8">
          <div className="flex justify-center gap-5">
            <h1
              className={`${balooChettan.className} text-4xl sm:text-7xl font-semibold text-[#8dc8ae]`}
            >
              Happy
            </h1>
            <h1
              className={`${balooChettan.className} text-4xl sm:text-7xl font-semibold text-[#444444]`}
            >
              Tet Baby
            </h1>
            <h1
              className={`${balooChettan.className} text-4xl sm:text-7xl font-semibold text-[#f37647]`}
            >
              Baby!
            </h1>
          </div>

          <h2 className={`${amaticSC.className} text-base sm:text-3xl p-3 `}>
            Một hành trình mới bắt đầu. Chúc mừng sinh nhật bé yêu!
          </h2>
        </div>

        <div className="col-span-1 flex">
          <div className="">
            <Marquee direction="right">
              {images.map((image, index) => (
                <div key={`section-1-${index}`} className="flex w-full h-full">
                  <Image
                    className="h-full w-full object-cover"
                    alt=""
                    src={image}
                    width={300}
                    height={200}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
