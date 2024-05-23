import React from 'react';

interface Props {
  text: string;
}

function PageTitle({ text }: Props) {
  return (
    <div className="flex items-center gap-2 w-full justify-center">
      <span className="w-5 h-5 rounded-full border-[2px] border-solid border-white bg-orange-600"></span>
      <h2 className="font-bold text-white md:text-[44px] text-3xl -tracking-tighter capitalize">
        {text}
      </h2>
      <span className="w-5 h-5 rounded-full border-[2px] border-solid border-white bg-orange-600"></span>
    </div>
  );
}

export default PageTitle;
