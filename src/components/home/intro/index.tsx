'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import homeImage from '@/assets/images/home-image.png';
import ButtonMainCallAction from '@/components/Common/Button/ButtonMainCallAction';

const openP = `<p>`;
const closeP = `</p>`;

function HomeComplementSection() {
  return (
    <div className="w-full border-t-main border-t-white px-5 md:px-0">
      <div className="grid md:grid-cols-[1fr_1fr]">
        {/* primeira coluna */}
        <div className="grid justify-center md:border-r-main md:border-r-white">
          <p className="text-white text-2xl md:text-4xl font-bold max-w-[520px] py-8 md:py-16">
            The front-end is my world. Im solve your problem with code
            <span className="text-orange-600">.</span>
          </p>
        </div>
        {/* segunda coluna */}
        <div className="grid justify-center">
          <div className="py-8 md:py-16">
            <p className="text-gray-400 font-semibold text-lg md:text-2xl mb-8 max-w-[520px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
            <ButtonMainCallAction />
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeComponent() {
  return (
    <div>
      {/* primeira intro */}
      <div className="border-x-main border-x-white max-w-full mx-6 md:mx-[52px]">
        {/* container */}
        <div className="py-8 md:py-16 px-5 md:px-8">
          {/* content */}
          <div>
            <span className="block text-xl md:text-2xl font-semibold text-gray-400 mb-8">
              Hy Everyone 👋, I am Eduardo Pedrosa
            </span>
            <h1 className="text-white text-4xl md:text-6xl font-bold max-w-[820px] mb-8">
              I solve your problems by creating clean and efficient code
              <span className="text-orange-600">.</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg font-semibold max-w-[720px] mb-8 leading-6">
              <span className="text-orange-600">{openP}</span>Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Nulla sunt dolore magnam,
              ducimus fugiat voluptatem! Magni, modi omnis doloribus corporis
              nobis ut, ducimus doloremque eos error nemo cum, quos sint!
              <span className="text-orange-600">{closeP}</span>
            </p>
            <ButtonMainCallAction />
          </div>

          {/* img */}
          {/* <div className="mt-16">
          <Image src={homeImage} alt="code image" />
        </div> */}
        </div>
      </div>
      {/* segunda intro */}
      <div className="hidden md:grid">
        <HomeComplementSection />
      </div>
    </div>
  );
}

export default HomeComponent;
