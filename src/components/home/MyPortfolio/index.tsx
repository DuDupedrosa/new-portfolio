import PageTitle from '@/components/Common/PageTitle.tsx';
import React, { useState } from 'react';
import Image from 'next/image';

// projetos
import placa_mais from '@/assets/images/projects/placa_mais.png';
import hexacode from '@/assets/images/projects/hexacode.png';
import task_hub from '@/assets/images/projects/task_hub.png';
import radar_covid from '@/assets/images/projects/radar_covid.png';
import bikecraft from '@/assets/images/projects/bikecraft.png';

// slide
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const projects = [
  {
    image: placa_mais,
    description:
      'Projeto freelancer desenvolvido com HTML, CSS e JavaScript, criado completamente do zero. Utilizei apenas um layout no figma como referência e escrevi todo o código manualmente.',
    title: 'PlacaMais',
    link: 'https://placa-mais.vercel.app/',
    link_label: '/projetos/placa-mais',
  },
  {
    image: hexacode,
    description:
      'Projeto freelancer desenvolvido com HTML, CSS, JavaScript e JQuery, criado completamente do zero. Utilizei apenas um layout no figma como referência e escrevi todo o código manualmente.',
    title: 'Hexacode',
    link: 'https://hexacode-ten.vercel.app/',
    link_label: '/projetos/hexacode',
  },
  {
    image: task_hub,
    description:
      'Projeto full-stack desenvolvido para fins de estudo, feito totalmente do zero. O front-end foi criado utilizando HTML, CSS (tailwindcss), TypeScript, e Next.js (React). Já o back-end foi implementado com Node.js, NestJS, e MongoDB.',
    title: 'TaskHub',
    link: 'https://my-tasks-front.vercel.app/',
    link_label: '/projetos/task-hub',
  },
  {
    image: radar_covid,
    description:
      'Projeto desenvolvido para fins de estudo, criado totalmente do zero. Utilizei HTML, CSS(styled-components), TypeScript e Next.js (React) no desenvolvimento. O projeto consome uma REST API com dados reais sobre a COVID-19, apresentando-os em gráficos, tabelas e formulários.',
    title: 'Radar-Covid',
    link: 'https://radar-covid.vercel.app/',
    link_label: '/projetos/radar-covid',
  },
  {
    image: bikecraft,
    description:
      'Projeto desenvolvido ao término do meu curso de HTML e CSS. Tive acesso apenas a um layout no Figma e desenvolvi todo o código do zero. Utilizei HTML, CSS e JavaScript para criar as interações no projeto.',
    title: 'BikeCraft',
    link: 'https://dudupedrosa.github.io/bikcraft/',
    link_label: '/projetos/brikecraft',
  },
  // {
  //   image: bikecraft,
  //   description:
  //     'Projeto desenvolvido em um desafio da Rocketseat, criado totalmente do zero. Com base em um layout no Figma, desenvolvi todo o código do zero utilizando HTML, CSS e JavaScript.',
  //   title: 'Rocket-Nfts',
  //   link: 'https://dudupedrosa.github.io/bikcraft/',
  //   link_label: '/projetos/Rocket-Nfts',
  // },
];

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
                        className="h-[320px]"
                      />
                    </div>
                    <div className="mt-5">
                      <h3 className="font-bold text-xl text-white text-center">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base font-medium text-gray-400 mt-2 text-center">
                        {project.description} de uma conferida no projeto em{' '}
                        <a
                          href={project.link}
                          target="_blank"
                          className="underline text-orange-600 font-bold tracking-wider"
                        >
                          {project.link_label}
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
