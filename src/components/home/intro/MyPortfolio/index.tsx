import PageTitle from '@/components/Common/PageTitle.tsx';
import { portfolioItems } from '@/helpers/PorfolioItems';
import React from 'react';

const openP = '<p>';
const closeP = '</p>';

function PortfolioCard() {
  return (
    <>
      {/* cards- container */}
      <div className="mt-16">
        {/* card */}
        {portfolioItems.map((item, i) => {
          return (
            <div key={i}>
              <div
                className={`bg-gray-800  p-5 w-[384px] h-96 rounded-lg border-solid border-[2px] border-gray-400 shadow-cardMain`}
              >
                {/* title */}
                <div className="flex items-center gap-2 justify-center mb-5">
                  <span className="block w-4 h-4 rounded-full bg-orange-600 border-[2px] border-solid border-white"></span>
                  <span className="flex text-white text-2xl font-bold">
                    {item.title}
                  </span>
                  <span className="block w-4 h-4 rounded-full bg-orange-600 border-[2px] border-solid border-white"></span>
                </div>

                {/* texto */}
                <p className="text-balance font-normal text-gray-400 leading-5">
                  <span className="text-orange-600 font-medium">{openP}</span>
                  {item.description}
                  <span className="text-orange-600 font-medium">{closeP}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function MyPortfolioComponent() {
  return (
    <div className="mt-16 px-6 md:px-[52px]">
      <PageTitle text="My portfolio" />

      <PortfolioCard />
    </div>
  );
}

export default MyPortfolioComponent;
