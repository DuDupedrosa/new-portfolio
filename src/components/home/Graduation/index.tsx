import PageTitle from '@/components/Common/PageTitle.tsx';
import React, { useEffect, useState } from 'react';
import Ucam from '@/assets/images/ucam.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import CulturaInglesa from '@/assets/images/cultura-inglesa.png';
import { coursesList } from '@/helpers/courses/items';
import { CouseListItem } from '@/types/course';
import ReactPaginate from 'react-paginate';
import Link from 'next/link';
import { FaRegHandPointRight } from 'react-icons/fa';

const strongTag = `<strong>`;
const strongTagClose = `</strong>`;

interface SectionTitleProps {
  text: string;
}
function SectionTitle({ text }: SectionTitleProps) {
  return (
    <span className="flex items-center gap-2">
      <span className="w-4 h-4 border-[2px] border-white border-solid rounded-full bg-orange-600"></span>
      <span className="font-bold text-white block text-xl">{text}</span>
    </span>
  );
}

interface CouseCardProps {
  time: number;
  name: string;
  classes: number;
  link?: string;
}

function CourseCard({ time, classes, name, link }: CouseCardProps) {
  return (
    <div className="bg-gray-800 relative border-main border-solid border-gray-400 h-[180px] flex flex-col justify-between rounded-lg shadow-cardMain p-5">
      {/* hrs + nome */}
      <div>
        {/* hrs do curso */}
        <div className="flex items-center gap-2 mb-5">
          <span className="w-3 h-3 block rounded-full bg-orange-600 border-[1px] border-solid border-white"></span>
          <span className="text-base font-semibold text-gray-400 block">
            {time} horas
          </span>
          <span className="text-base font-semibold text-orange-600 block">
            |
          </span>
          <span className="text-base font-semibold text-gray-400 block">
            {classes} Aulas
          </span>
        </div>

        {/* nome do curso */}
        <h4 className="font-medium text-xl text-white">
          <span className="text-orange-600">{strongTag}</span>
          {name}
          <span className="text-orange-600">{strongTagClose}</span>
        </h4>
      </div>

      {/* link do curso */}
      <span className="text-sm text-gray-400 underline font-semibold block bottom-5">
        {link ? link : 'origamid.com'}
      </span>
    </div>
  );
}

function Graduation() {
  const { t } = useTranslation();
  const [courseItems, setCourseItems] = useState<CouseListItem[] | []>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  const [pageItems, setPageItems] = useState<number>(0);

  useEffect(() => {
    const getCourses = coursesList.slice(0, itemsPerPage);

    setCourseItems(getCourses);
    setPageItems(getCourses.length);
  }, []);

  function handleSeeMoreCourses() {
    if (coursesList.length === pageItems) {
      const getCourses = coursesList.slice(0, -itemsPerPage);

      setCourseItems(getCourses);
      setPageItems(getCourses.length);
    } else {
      const getCourses = coursesList.slice(pageItems, pageItems + itemsPerPage);
      const newArray = [...courseItems, ...getCourses];

      setCourseItems(newArray);
      setPageItems(newArray.length);
    }
  }

  return (
    <div className="px-6 md:px-14 py-16">
      <PageTitle text="Graduation" />

      {/* formação academica */}
      <div className="mt-16">
        {/* titulo + icon */}
        <div className="mb-5">
          <SectionTitle text={`${t('graduation_university')}:`} />
        </div>
        {/* logo + nome */}
        <div className="flex items-center gap-2 ml-[26px]">
          {/* imagem */}
          <div>
            <Image src={Ucam} alt={t('candido')} />
          </div>
          {/* texto */}
          <div>
            <span className="text-white font-medium text-lg mb-2 block">
              {t('candido')}
            </span>
            <span className="text-gray-400 font-medium text-sm block">
              {t('analysis_development_systems')}
            </span>
          </div>
        </div>
      </div>

      {/* idiomas */}
      <div className="mt-8">
        {/* titulo + icon */}
        <div className="mb-5">
          <SectionTitle text={`${t('languages')}:`} />
        </div>
        {/* logo + nome */}
        <div className="flex items-center gap-2 ml-[26px]">
          {/* imagem */}
          <div>
            <Image src={CulturaInglesa} alt="UNIVERSIDADE CANDIDO MENDES" />
          </div>
          {/* texto */}
          <div>
            <span className="text-white font-medium text-lg mb-2 block">
              Inglês /{' '}
              <span className="text-gray-200 font-bold">
                {t('intermediary')}
              </span>
            </span>
            <span className="text-gray-400 font-medium text-sm block">
              Cultura Inglesa
            </span>
          </div>
        </div>
      </div>

      {/* cursos de especialicação */}
      <div className="mt-8">
        <SectionTitle text="Cursos de especialização:" />

        <div className="grid md:grid-cols-[1fr_1fr] w-full max-w-[1020px] mt-8 gap-12">
          {courseItems.map((couse, i) => {
            return (
              <CourseCard
                key={i}
                classes={couse.class}
                name={couse.name}
                time={couse.hours}
              />
            );
          })}
        </div>
        <div className="max-w-[1020px] flex mt-5">
          <span
            className="flex items-center gap-2 max-w-max cursor-default"
            onClick={() => handleSeeMoreCourses()}
          >
            <FaRegHandPointRight className="text-orange-600 animate-bouce-x text-xl md:text-2xl block" />
            <span className="underline hover:text-gray-400 cursor-pointer text-lg md:text-xl lowercase font-medium text-orange-600 flex py-1">
              {coursesList.length === pageItems ? 'Ver menos' : 'Ver mais'}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Graduation;
