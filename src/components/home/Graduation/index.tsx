import PageTitle from '@/components/Common/PageTitle.tsx';
import React, { useEffect, useState } from 'react';
import Ucam from '@/assets/images/ucam.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import CulturaInglesa from '@/assets/images/cultura-inglesa.png';
import { coursesList } from '@/helpers/courses/items';
import { CouseListItem } from '@/types/course';
import ReactPaginate from 'react-paginate';

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

function CourseCard({ name, hours, house, classes }: CouseListItem) {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-800 relative border-main border-solid border-gray-400 h-[180px] flex flex-col justify-between rounded-lg shadow-cardMain p-5">
      {/* hrs + nome */}
      <div>
        {/* hrs do curso */}
        <div className="flex items-center gap-2 mb-5">
          <span className="w-3 h-3 block rounded-full bg-orange-600 border-[1px] border-solid border-white"></span>
          <span className="text-base font-semibold text-gray-400 block">
            {hours} {t('hours')}
          </span>
          <span className="text-base font-semibold text-orange-600 block">
            |
          </span>
          <span className="text-base font-semibold text-gray-400 block">
            {classes} {t('classes')}
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
      <span
        onClick={() => {
          window.open(`https://${house}`, '_blank');
        }}
        className="text-sm text-gray-400 max-w-max cursor-pointer underline font-semibold block bottom-5"
      >
        {house}
      </span>
    </div>
  );
}

function Graduation() {
  const { t } = useTranslation();
  const [courseItems, setCourseItems] = useState<CouseListItem[] | []>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  const [pageCount, setPageCount] = useState<number>(0);

  function handlePageChange(page: number) {
    const getItemsPerPage = coursesList.slice(
      page * itemsPerPage - itemsPerPage,
      page * itemsPerPage
    );
    setCourseItems(getItemsPerPage);
  }

  useEffect(() => {
    const getCourseItems = coursesList.slice(0, 4);
    setPageCount(Math.ceil(coursesList.length / itemsPerPage));
    setCourseItems(getCourseItems);
  }, []);

  return (
    <div className="px-6 md:px-14 py-16">
      <PageTitle text={t('graduation')} />

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
            <Image src={CulturaInglesa} alt={'EN'} />
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
        <SectionTitle text={`${t('specialization_courses')}:`} />

        <div className="mt-8 flex mb-2 items-center gap-5 justify-between max-w-[1020px]">
          <h2 className="text-lg font-bold text-gray-400">
            - {t('total_courses')}:{' '}
            <span className="text-orange-600">{coursesList.length}</span>
          </h2>

          <div className="mb-5 hidden md:block">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={(selectedItem) =>
                handlePageChange(selectedItem.selected + 1)
              }
              pageRangeDisplayed={1}
              pageCount={pageCount}
              previousLabel="<"
              containerClassName={'pagination'}
              activeClassName={'active'}
              marginPagesDisplayed={1}
              breakClassName={'break-me'}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1fr] w-full max-w-[1020px] gap-12">
          {courseItems.map((course, i) => {
            return (
              <CourseCard
                key={i}
                classes={course.classes}
                name={t(course.name)}
                hours={course.hours}
                house={course.house}
              />
            );
          })}
        </div>

        <div className="mt-8 md:hidden">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={(selectedItem) =>
              handlePageChange(selectedItem.selected + 1)
            }
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="<"
            containerClassName={'pagination'}
            activeClassName={'active'}
            marginPagesDisplayed={1}
            breakClassName={'break-me'}
          />
        </div>
      </div>
    </div>
  );
}

export default Graduation;
