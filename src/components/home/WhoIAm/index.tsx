import PageTitle from '@/components/Common/PageTitle.tsx';
import React from 'react';
import ImageTeste from '@/assets/images/Imagem do WhatsApp de 2024-05-22 à(s) 21.21.02_d5d9d383.jpg';
import Image from 'next/image';

function WhoIam() {
  return (
    <div className="mt-16 pb-16 border-b-main border-b-solid border-b-white">
      {/* container */}
      <div>
        <PageTitle text="Who am i?" />

        {/* container para centralizar o conteúdo  */}
        <div className="grid place-items-center mt-16 px-6 md:px-14">
          {/* container para centralizar e conter o tamanho dos textos */}
          <div className="max-w-full md:max-w-[1020px]">
            {/* imagem */}
            <div className="grid place-items-center mb-16">
              <Image
                src={ImageTeste}
                alt="Imagem"
                className="w-[220px] h-[220px] rounded-full"
              />
            </div>

            {/* textos */}
            <div className="flex flex-col md:flex-row gap-12">
              {/* primeira coluna */}
              <p className="text-lg font-medium text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been. Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
              <p className="text-lg font-medium text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been. Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoIam;
