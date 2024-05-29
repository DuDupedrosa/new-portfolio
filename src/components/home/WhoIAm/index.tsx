import PageTitle from '@/components/Common/PageTitle.tsx';
import React from 'react';
import Image from 'next/image';
import Eduardo from '@/assets/images/Eduardo Pedrosa.jpg';
import { handleRedirect } from '@/helpers/methods/handleRedirect';

function WhoIam() {
  return (
    <div className="mt-16 pb-16 border-b-main border-b-solid border-b-white">
      {/* container */}
      <div>
        <PageTitle text="Quem sou eu?" />

        {/* container para centralizar o conteúdo  */}
        <div className="grid place-items-center mt-16 px-6 md:px-14">
          {/* container para centralizar e conter o tamanho dos textos */}
          <div className="max-w-full md:max-w-[1020px]">
            {/* imagem */}
            <div className="grid place-items-center mb-16">
              <Image
                src={Eduardo}
                alt="Imagem"
                className="w-[220px] h-[220px] rounded-full"
              />
            </div>

            {/* textos */}
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
                    onClick={() => handleRedirect('https://www.dxainvest.com/')}
                  >
                    DXA Invest
                  </span>
                  , onde estagiei por 1 ano e 2 meses, ganhando uma valiosa
                  experiência e aprimorando minhas competências.
                </p>
                <p className="text-lg font-normal text-gray-400 mt-2">
                  Hoje, continuo minha trajetória na{' '}
                  <span
                    className="font-bold underline cursor-pointer hover:text-gray-200 transition-all"
                    onClick={() => handleRedirect('https://www.dxainvest.com/')}
                  >
                    DXA Invest
                  </span>{' '}
                  como trainee, onde estou há 11 meses. Nesse cargo, tenho a
                  oportunidade de me envolver em projetos desafiadores e
                  contribuir significativamente para a equipe.
                </p>
              </div>
              <div>
                <p className="text-lg font-normal text-gray-400">
                  Além do meu trabalho formal, também sou ativo no mundo dos{' '}
                  <span className="font-bold">freelances</span>, onde desenvolvo
                  projetos utilizando{' '}
                  <span className="font-bold">tecnologias modernas</span> como
                  JavaScript, TypeScript, React, React Native, Vue.js, Node.js,
                  Nest.js e dentre outras... Minha dedicação e entusiasmo pelo
                  front-end são evidentes em cada projeto que entrego, buscando
                  sempre a excelência e a inovação.
                </p>
                <p className="text-lg font-normal text-gray-400 mt-2">
                  A cada dia, estou mais empenhado em me tornar um desenvolvedor
                  ainda mais completo e atualizado, sempre em busca de novos
                  conhecimentos e desafios que me permitam crescer tanto
                  profissionalmente quanto pessoalmente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoIam;
