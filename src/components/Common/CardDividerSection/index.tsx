import { Button } from '@/components/ui/button';
import React from 'react';

function CardDividerSection() {
  return (
    <div>
      {/* card */}
      <div className="ml-8 md:ml-20 my-16 py-16 rounded-xl bg-orange-600 border-main border-solid border-white shadow-cardMainWhite">
        <span className="text-3xl md:text-5xl px-5 text-center block font-bold text-white mb-5">
          I'm are available for a new project, let's talk with me.
        </span>

        <div className="grid place-items-center px-5">
          <p className="text-center font-medium text-base md:text-lg text-gray-200 max-w-[620px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            sunt tempora animi dignissimos. At cupiditate dolore molestias modi
            accusamus iste quo totam expedita error! Architecto tempore illo
            voluptate laborum odio!
          </p>
        </div>

        <div className="mt-16 grid place-items-center">
          <Button className="text-lg md:text-xl font-bold text-mainBlack md:max-w-[280px] h-[54px] md:h-[64px] rounded-full shadow-buttonMainBlack bg-white border-[3px] border-solid border-mainBlack hover:bg-white hover:text-orange-600">
            Let's talk with me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardDividerSection;
