'use client';

import Header from '@/components/Common/Header';
import PageTitle from '@/components/Common/PageTitle.tsx';
import { allProjectsItems } from '@/helpers/PorfolioItems/allProjects';
import { AllProjectsItem } from '@/types/project';
import React, { useEffect, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';

const dropDownItemStyle =
  'text-mainBlack text-base hover:bg-gray-400 transition-all cursor-pointer';

function SeparatorDropdown() {
  return <div className="w-full h-[1px] bg-gray-400"></div>;
}

function ProjectsComponent() {
  const [projects, setProjects] = useState<AllProjectsItem[] | []>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);

  useEffect(() => {
    const getFirstFourProjects = allProjectsItems.slice(0, 4);
    setPageCount(Math.ceil(allProjectsItems.length / itemsPerPage));
    setProjects(getFirstFourProjects);
  }, []);

  function handlePageChange(page: number) {
    const getItemsPerPage = allProjectsItems.slice(
      page * itemsPerPage - itemsPerPage,
      page * itemsPerPage
    );
    setProjects(getItemsPerPage);
  }

  return (
    <div>
      {/* header */}
      <Header />

      {/* conteúdo */}
      <section className="mt-20 pb-20 px-8">
        {/* header - title */}
        <div>
          <PageTitle text="Meus projetos" />
          <div className="grid place-items-center">
            <p className="text-base md:text-lg font-semibold text-gray-400 text-center max-w-3xl mt-5">
              Descubra a jornada por trás de cada um dos meus projetos
              realizados até hoje, onde cada obra é uma nova lição aprendida.
            </p>
          </div>
        </div>

        {/* card - main */}
        <div className="bg-gray-800 border-main ml-auto mr-auto border-gray-400 rounded-lg px-5 py-8 flex flex-col gap-5 mt-12 max-w-5xl">
          {/* total de projetos */}
          <div className="mb-5 flex items-center gap-2">
            <span className="text-2xl block font-normal text-gray-200">
              Total de projetos:
            </span>
            <span className="text-2xl font-bold text-orange-600 p-1 rounded-lg">
              {allProjectsItems.length}
            </span>
          </div>

          <div className="hidden md:flex flex-col md:flex-row md:items-center gap-2">
            <FaInfoCircle className="text-blue-600 text-base" />
            <span className="flex text-gray-400 font-semibold text-base">
              clique no card para visualizar o projeto.
            </span>
          </div>

          {projects.length > 0 &&
            projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className="bg-gray-700 cursor-pointer rounded-lg p-5 border-solid transition-all border-[2px] md:border-transparent hover:border-orange-600 border-orange-600 h-[160px] md:h-[initial] flex flex-col"
                >
                  {/* container */}
                  <div className="flex flex-1 flex-col md:flex-row justify-center gap-5 md:justify-between">
                    <div className="flex items-center justify-center md:justify-[initial] gap-2">
                      <span className="block w-3 h-3 rounded-full border-solid border-[1px] border-white bg-orange-600"></span>
                      <span className="text-xl text-center md:text-start font-bold text-gray-200 flex">
                        {project.name}
                      </span>
                      <span className="block md:hidden w-3 h-3 rounded-full border-solid border-[1px] border-white bg-orange-600"></span>
                    </div>
                    <span className="text-sm md:text-lg uppercase text-center md:text-start text-gray-400 font-semibold">
                      {project.technologies}
                    </span>
                  </div>
                  <a
                    href="/"
                    className="text-sm justify-self-end block md:hidden font-semibold text-center text-orange-600 underline mt-1"
                  >
                    ver projeto
                  </a>
                </div>
              );
            })}

          <div className="grid justify-end mt-2">
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
      </section>
    </div>
  );
}

export default ProjectsComponent;
