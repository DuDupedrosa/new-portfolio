import PageTitle from '@/components/Common/PageTitle.tsx';
import React from 'react';
import Ucam from '@/assets/images/ucam.png';
import Image from 'next/image';

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
  link?: string;
}

function CourseCard({ time, name, link }: CouseCardProps) {
  return (
    <div className="bg-gray-800 relative border-main border-solid border-white min-h-[260px] max-w-[initial] w-full md:max-w-[348px] rounded-lg shadow-cardMain p-5">
      {/* hrs + nome */}
      <div>
        {/* hrs do curso */}
        <div className="flex items-center gap-2 mb-5">
          <span className="w-3 h-3 block rounded-full bg-orange-600 border-[1px] border-solid border-white"></span>
          <span className="text-base font-bold text-gray-400 block">
            {time}h
          </span>
        </div>

        {/* nome do curso */}
        <h4 className="font-bold text-xl text-white">
          <span className="text-orange-600">{strongTag}</span>
          {name}
          <span className="text-orange-600">{strongTagClose}</span>
        </h4>
      </div>

      {/* link do curso */}
      <span className="text-sm text-gray-400 underline font-bold block absolute bottom-5">
        {link ? link : 'origamid.com'}
      </span>
    </div>
  );
}

function Graduation() {
  return (
    <div className="px-6 md:px-14 py-16">
      <PageTitle text="Graduation" />

      {/* formação academica */}
      <div className="mt-16">
        {/* titulo + icon */}
        <div className="mb-5">
          <SectionTitle text="Formação acadêmica:" />
        </div>
        {/* logo + nome */}
        <div className="flex items-center gap-2 ml-[26px]">
          {/* imagem */}
          <div>
            <Image src={Ucam} alt="UNIVERSIDADE CANDIDO MENDES" />
          </div>
          {/* texto */}
          <div>
            <span className="text-white font-medium text-lg mb-2 block">
              Universidade Candido Mendes
            </span>
            <span className="text-gray-400 font-medium text-sm block">
              Analise e densenvolvimento de sistemas
            </span>
          </div>
        </div>
      </div>

      {/* idiomas */}
      <div className="mt-8">
        {/* titulo + icon */}
        <div className="mb-5">
          <SectionTitle text="Idioma(s):" />
        </div>
        {/* logo + nome */}
        <div className="flex items-center gap-2 ml-[26px]">
          {/* imagem */}
          <div>
            <Image src={Ucam} alt="UNIVERSIDADE CANDIDO MENDES" />
          </div>
          {/* texto */}
          <div>
            <span className="text-white font-medium text-lg mb-2 block">
              Inglês / <span className="text-gray-400">Intermediário</span>
            </span>
          </div>
        </div>
      </div>

      {/* cursos de especialicação */}
      <div className="mt-8">
        <SectionTitle text="Cursos de especialização:" />

        <div className="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] md:max-w-max mt-8 gap-12">
          <CourseCard name="Html e css para iniciantes" time={22} />
          <CourseCard name="Html e css para iniciantes" time={22} />

          <CourseCard name="Html e css para iniciantes" time={22} />
          <CourseCard name="Html e css para iniciantes" time={22} />

          <CourseCard name="Html e css para iniciantes" time={22} />
          <CourseCard name="Html e css para iniciantes" time={22} />
        </div>
      </div>
    </div>
  );
}

export default Graduation;
