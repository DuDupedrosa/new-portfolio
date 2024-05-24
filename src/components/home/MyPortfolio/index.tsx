import PageTitle from '@/components/Common/PageTitle.tsx';
import { portfolioItems } from '@/helpers/PorfolioItems';
import React, { useState } from 'react';
import imageTeste from '@/assets/images/Imagem do WhatsApp de 2024-05-22 à(s) 21.21.02_d5d9d383.jpg';
import Image from 'next/image';

// slide
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const openP = '<p>';
const closeP = '</p>';

function PortfolioCard() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      spacing: 10,
    },
  });

  return (
    <>
      <div className="">
        {/* imagem centralizada */}
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {/* imagem container */}
            <div className="keen-slider__slide number-slide1 cursor-grab">
              <div className="max-w-[760px]">
                <div>
                  <Image src={imageTeste} alt="teste" />
                </div>
                <div className="mt-5">
                  <h3 className="font-bold text-xl text-white text-center">
                    BikeCraft
                  </h3>
                  <p className="text-sm md:text-base font-medium text-gray-400 mt-2 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem velit veritatis deserunt voluptas dolorum,
                    inventore quia! de uma olhada no projeto em:{' '}
                    <span className="underline text-orange-600 font-bold">
                      bikecraft.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide number-slide2">
              <div className="max-w-[760px]">
                <div>
                  <Image src={imageTeste} alt="teste" />
                </div>
                <div className="mt-5">
                  <h3 className="font-bold text-xl text-white text-center">
                    BikeCraft
                  </h3>
                  <p className="text-base font-medium text-gray-400 mt-2 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem velit veritatis deserunt voluptas dolorum,
                    inventore quia! de uma olhada no projeto em:{' '}
                    <span className="underline text-orange-600 font-bold">
                      bikecraft.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide number-slide3">
              <div className="max-w-[760px]">
                <div>
                  <Image src={imageTeste} alt="teste" />
                </div>
                <div className="mt-5">
                  <h3 className="font-bold text-xl text-white text-center">
                    BikeCraft
                  </h3>
                  <p className="text-base font-medium text-gray-400 mt-2 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem velit veritatis deserunt voluptas dolorum,
                    inventore quia! de uma olhada no projeto em:{' '}
                    <span className="underline text-orange-600 font-bold">
                      bikecraft.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="dots">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={'dot' + (currentSlide === idx ? ' active' : '')}
                  ></button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function MyPortfolioComponent() {
  return (
    <div className="mt-16 px-6 md:px-[52px] pb-16 border-b-main border-b-solid border-b-white">
      <PageTitle text="My portfolio" />

      <div className="max-w-[1020px] ml-[auto] mr-[auto] py-8 px-5 bg-gray-800 rounded-xl mt-16 shadow-cardMain border-main border-solid border-gray-400">
        <div className="max-w-[760px] ml-[auto] mr-[auto]">
          <PortfolioCard />
        </div>
      </div>
    </div>
  );
}

export default MyPortfolioComponent;
