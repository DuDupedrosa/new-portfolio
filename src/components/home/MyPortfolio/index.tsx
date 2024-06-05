import PageTitle from '@/components/Common/PageTitle.tsx';
import React, { useState } from 'react';
import Image from 'next/image';

// projetos
import placa_mais from '@/assets/images/projects/placa_mais.png';
import hexacode from '@/assets/images/projects/hexacode.png';
import task_hub from '@/assets/images/projects/task_hub.png';
import radar_covid from '@/assets/images/projects/radar_covid.png';
import bikecraft from '@/assets/images/projects/bikecraft.png';
import rocket_nfts from '@/assets/images/projects/rocket_nfts.png';

// slide
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useTranslation } from 'react-i18next';
import { FaRegHandPointRight } from 'react-icons/fa';
import Link from 'next/link';

const projects = [
  {
    image: placa_mais,
    description: 'placa_mais',
    title: 'PlacaMais',
    link: 'https://placa-mais.vercel.app/',
    link_label: 'placa-mais',
  },
  {
    image: hexacode,
    description: 'hexacode',
    title: 'Hexacode',
    link: 'https://hexacode-ten.vercel.app/',
    link_label: 'hexacode',
  },
  {
    image: task_hub,
    description: 'task_hub',
    title: 'TaskHub',
    link: 'https://my-tasks-front.vercel.app/',
    link_label: 'task-hub',
  },
  {
    image: radar_covid,
    description: 'radar_covid',
    title: 'Radar-Covid',
    link: 'https://radar-covid.vercel.app/',
    link_label: 'radar-covid',
  },
  {
    image: bikecraft,
    description: 'bikecraft',
    title: 'BikeCraft',
    link: 'https://dudupedrosa.github.io/bikcraft/',
    link_label: 'brikecraft',
  },
  {
    image: rocket_nfts,
    description: 'rocket_nft',
    title: 'Rocket-Nfts',
    link: 'https://web-nfts.vercel.app/',
    link_label: 'Rocket-Nfts',
  },
];

function PortfolioCard() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();
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
            {projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={`keen-slider__slide number-slide${
                    i + 1
                  } cursor-grab`}
                >
                  <div className="max-w-[760px]">
                    <div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="md:h-[320px]"
                      />
                    </div>
                    <div className="mt-5">
                      <h3 className="font-bold text-xl text-white text-center">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base font-medium text-gray-400 mt-2 text-center">
                        {t(project.description)} {t('call_action_see_project')}{' '}
                        <a
                          href={project.link}
                          target="_blank"
                          className="underline text-orange-600 font-bold tracking-wider"
                        >
                          {t('project_name_slide', {
                            projectName: project.link_label,
                          })}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
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
  const { t } = useTranslation();

  return (
    <div className="mt-16 px-6 md:px-[52px] pb-16 border-b-main border-b-solid border-b-white">
      <PageTitle text="My portfolio" />

      <div className="max-w-[1020px] ml-[auto] mr-[auto] mt-12 py-8 px-5 bg-gray-800 rounded-xl shadow-cardMain border-main border-solid border-gray-400">
        <div className="max-w-[760px] ml-[auto] mr-[auto]">
          <PortfolioCard />
        </div>
      </div>

      <div className="max-w-[1020px] ml-[auto] mr-[auto] flex justify-end mt-2">
        <Link
          href={'/projects'}
          className="flex items-center gap-2 max-w-max cursor-pointer hover:bg-orange-400"
        >
          <FaRegHandPointRight className="text-orange-600 animate-bouce-x text-xl md:text-2xl block" />
          <span className="underline cursor-pointer text-lg md:text-xl lowercase font-medium text-orange-600 flex py-1">
            {t('list_all_projects')}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default MyPortfolioComponent;
