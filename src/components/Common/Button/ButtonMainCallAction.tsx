import { Button } from '@/components/ui/button';
import React from 'react';

function ButtonMainCallAction() {
  return (
    <Button className="text-lg md:text-xl font-bold text-white md:max-w-[280px] h-[54px] md:h-[64px] rounded-full shadow-buttonMain bg-orange-600 border-[3px] border-solid border-white hover:bg-gray-800">
      Let's talk with me
    </Button>
  );
}

export default ButtonMainCallAction;
