'use client';

import React from 'react';
import ButtonMainCallAction from '@/components/Common/Button/ButtonMainCallAction';
import { useTranslation } from 'react-i18next';

const openP = `<p>`;
const closeP = `</p>`;

function HomeComplementSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full border-t-main border-t-white px-5 md:px-0">
      <div className="grid md:grid-cols-[1fr_1fr]">
        {/* primeira coluna */}
        <div className="grid place-items-center md:border-r-main md:border-r-white px-5">
          <p className="text-white text-2xl md:text-4xl font-bold max-w-[520px] py-8 md:py-16">
            {t('front_is_my_world')}
            <span className="text-orange-600">.</span>
          </p>
        </div>
        {/* segunda coluna */}
        <div className="grid place-items-center px-5">
          <div className="py-8 md:py-16">
            <p className="text-gray-400 font-semibold text-lg md:text-2xl mb-8 max-w-[520px] ">
              {t('intro_button_call_action')}
            </p>
            <ButtonMainCallAction />
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeComponent() {
  const { t } = useTranslation();

  return (
    <div>
      {/* primeira intro */}
      <div className="border-x-main border-x-white max-w-full mx-6 md:mx-[52px]">
        {/* container */}
        <div className="py-8 md:py-16 px-5 md:px-8">
          {/* content */}
          <div>
            <span className="block text-xl md:text-2xl font-semibold text-gray-400 mb-8">
              {t('hy_everyone')}
            </span>
            <h1 className="text-white text-4xl md:text-6xl font-bold max-w-[820px] mb-8">
              {t('solve_your_problem')}
              <span className="text-orange-600">.</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg font-semibold max-w-[720px] mb-8 leading-6">
              <span className="text-orange-600">{openP}</span>
              {t('intro_home_text')}
              <span className="text-orange-600">{closeP}</span>
            </p>
            {/* <ButtonMainCallAction /> */}
          </div>
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
