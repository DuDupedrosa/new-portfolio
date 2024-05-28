'use client';

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
const animation = { duration: 100000, easing: (t: any) => t };

const dividerItems = [
  {
    name: 'JavaScript',
  },
  {
    name: 'React',
  },
  {
    name: 'Next.js',
  },
  {
    name: 'TypeScript',
  },
  {
    name: 'Angular',
  },
  {
    name: 'Vue.js',
  },
  {
    name: 'Vite',
  },
  {
    name: 'Nest.js',
  },
  {
    name: 'Node',
  },
  {
    name: 'JQuery',
  },
];

function DividerSection() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    drag: false,
    slides: {
      spacing: 20,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="flex gap-5 overflow-x-hidden border-y-main border-y-white border-y-solid py-5">
      <div className="bg-mainBlack flex gap-5 keen-slider" ref={sliderRef}>
        <div className="flex gap-5 keen-slider__slide number-slide1">
          {dividerItems.map((item, i) => {
            return (
              <div key={i} className={`flex items-center gap-5`}>
                <span className="text-3xl font-bold text-white uppercase">
                  {item.name}
                </span>

                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full border-[1px] border-solid border-white bg-orange-600"></span>
                  <span className="w-5 h-5 rounded-full border-[1px] border-solid border-white bg-orange-600"></span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-5 keen-slider__slide number-slide2">
          {dividerItems.map((item, i) => {
            return (
              <div key={i} className={`flex items-center gap-5`}>
                <span className="text-3xl font-bold text-white uppercase">
                  {item.name}
                </span>

                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full border-[1px] border-solid border-white bg-orange-600"></span>
                  <span className="w-5 h-5 rounded-full border-[1px] border-solid border-white bg-orange-600"></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DividerSection;
