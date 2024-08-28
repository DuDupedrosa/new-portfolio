import PageTitle from '@/components/Common/PageTitle.tsx';
import React from 'react';
import Image from 'next/image';
import Eduardo from '@/assets/images/07-dealboard 1.png';
import { handleRedirect } from '@/helpers/methods/handleRedirect';
import { useTranslation } from 'react-i18next';
import { languageTextEnum } from '@/helpers/enums/LanguageEnum';

function WhoIam() {
  const { i18n, t } = useTranslation();

  return (
    <div className="mt-16 pb-16 border-b-main border-b-solid border-b-white">
      {/* container */}
      <div>
        <PageTitle text={t('who_am_i')} />

        {/* container para centralizar o conteúdo  */}
        <div className="grid place-items-center mt-16 px-6 md:px-14">
          {/* container para centralizar e conter o tamanho dos textos */}
          <div className="max-w-full md:max-w-[1020px]">
            {/* imagem */}
            <div className="grid place-items-center mb-16">
              <Image
                src={Eduardo}
                alt="Imagem"
                className="w-[220px] h-[220px]"
              />
            </div>

            {/* textos */}
            {i18n.language === languageTextEnum.PT && (
              <div className="flex flex-col md:flex-row gap-12">
                {/* primeira coluna */}
                <div>
                  <p className="text-lg font-normal text-gray-400">
                    Com 22 anos, sou um desenvolvedor{' '}
                    <span className="font-bold">front-end</span> apaixonado pelo
                    que faço. Atualmente, estou cursando{' '}
                    <span className="font-bold">
                      Análise e Desenvolvimento de Sistemas
                    </span>
                    , aprofundando meus conhecimentos e expandindo minhas
                    habilidades técnicas. Minha jornada profissional começou na{' '}
                    <span
                      className="font-bold cursor-pointer underline hover:text-gray-200 transition-all"
                      onClick={() =>
                        handleRedirect('https://www.dxainvest.com/')
                      }
                    >
                      DXA Invest
                    </span>
                    , onde <span className="font-bold">estagiei</span> por{' '}
                    <span className="font-bold">1 ano e 2 meses</span>, ganhando
                    uma valiosa experiência e aprimorando minhas competências.
                  </p>
                  <p className="text-lg font-normal text-gray-400 mt-2">
                    Após o estágio, fui promovido a{' '}
                    <span className="font-bold">trainee</span>, posição em que
                    permaneci por{' '}
                    <span className="font-bold">1 ano e 3 meses</span>, o que me
                    permitiu me envolver em projetos desafiadores e contribuir
                    significativamente para a equipe. Recentemente, fui{' '}
                    <span className="font-bold">
                      promovido a Analista de Desenvolvimento
                    </span>
                    , o que reflete meu crescimento e dedicação ao longo dessa
                    jornada.
                  </p>
                </div>
                <div>
                  <p className="text-lg font-normal text-gray-400">
                    Além do meu trabalho formal, também sou ativo no mundo dos{' '}
                    <span className="font-bold">freelances</span>, onde
                    desenvolvo projetos utilizando{' '}
                    <span className="font-bold">tecnologias modernas</span> como
                    JavaScript, TypeScript, React, React Native, Vue.js,
                    Node.js, Nest.js e dentre outras... Minha dedicação e
                    entusiasmo pelo front-end são evidentes em cada projeto que
                    entrego, buscando sempre a excelência e a inovação.
                  </p>
                  <p className="text-lg font-normal text-gray-400 mt-2">
                    A cada dia, estou mais empenhado em me tornar um
                    desenvolvedor ainda mais completo e atualizado, sempre em
                    busca de novos conhecimentos e desafios que me permitam
                    crescer tanto profissionalmente quanto pessoalmente.
                  </p>
                </div>
              </div>
            )}

            {i18n.language === languageTextEnum.EN && (
              <div className="flex flex-col md:flex-row gap-12">
                {/* primeira coluna */}
                <div>
                  <p className="text-lg font-normal text-gray-400">
                    At 22, I'm a <span className="font-bold">front-end</span>{' '}
                    developer with a passion for what I do. I'm currently
                    studying{' '}
                    <span className="font-bold">
                      Systems Analysis and Development
                    </span>
                    , deepening my knowledge and expanding my technical skills.
                    My professional journey began at{' '}
                    <span
                      className="font-bold cursor-pointer underline hover:text-gray-200 transition-all"
                      onClick={() =>
                        handleRedirect('https://www.dxainvest.com/')
                      }
                    >
                      DXA Invest
                    </span>
                    , where I <span className="font-bold">interned</span> for{' '}
                    <span className="font-bold">1 year and 2 months</span>,
                    gaining valuable experience and honing my skills.
                  </p>
                  <p className="text-lg font-normal text-gray-400 mt-2">
                    After the internship, I was promoted to{' '}
                    <span className="font-bold">trainee</span>, a position I
                    held for{' '}
                    <span className="font-bold">1 year and 3 months</span>,
                    which allowed me to get involved in challenging projects and
                    contribute significantly to the team. Recently, I was
                    promoted to{' '}
                    <span className="font-bold">Development Analyst</span>,
                    which reflects my growth and dedication throughout this
                    journey.
                  </p>
                </div>
                <div>
                  <p className="text-lg font-normal text-gray-400">
                    In addition to my formal work, I'm also active in the
                    <span className="font-bold">freelance</span> world, where I
                    develop projects using{' '}
                    <span className="font-bold">modern technologies</span> such
                    as JavaScript, TypeScript, React, React Native, Vue.js,
                    Node.js, Nest.js and others... My dedication and enthusiasm
                    for the front-end are evident in every project I deliver,
                    always striving for excellence and innovation.
                  </p>
                  <p className="text-lg font-normal text-gray-400 mt-2">
                    Every day, I am more committed to becoming an even more
                    complete and up-to-date developer, always in search of new
                    knowledge and challenges that allow me to grow both
                    professionally and personally.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoIam;
