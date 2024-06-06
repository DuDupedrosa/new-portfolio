'use client';

import Header from '@/components/Common/Header';
import PageTitle from '@/components/Common/PageTitle.tsx';
import { allProjectsItems } from '@/helpers/PorfolioItems/allProjects';
import { AllProjectsItem } from '@/types/project';
import React, { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const dropDownItemStyle =
  'text-mainBlack text-base hover:bg-gray-400 transition-all cursor-pointer';

function SeparatorDropdown() {
  return <div className="w-full h-[1px] bg-gray-400"></div>;
}

function ProjectsComponent() {
  const [projects, setProjects] = useState<AllProjectsItem[] | []>([]);

  useEffect(() => {
    const getFirstFourProjects = allProjectsItems.slice(0, 4);

    setProjects(getFirstFourProjects);
  }, []);

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

          {projects.length > 0 &&
            projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className="bg-gray-700 cursor-pointer rounded-lg p-5 border-solid transition-all border-[2px] border-transparent hover:border-orange-600"
                >
                  {/* container */}
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <span className="block w-3 h-3 rounded-full border-solid border-[1px] border-white bg-orange-600"></span>
                      <span className="text-xl font-bold text-gray-200 flex">
                        {project.name}
                      </span>
                    </div>
                    <span className="text-lg uppercase text-gray-400 font-semibold">
                      {project.technologies}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}

export default ProjectsComponent;
