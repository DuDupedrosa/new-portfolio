'use client';

import * as React from 'react';
import DividerSection from '@/components/Common/DividerSection';
import Header from '@/components/Common/Header';
import HomeComponent from '@/components/home/Intro';
import ParticleComponent from '@/components/particles/ParticlesComponent';
import MyPortfolioComponent from '@/components/home/MyPortfolio';
import WhoIam from '@/components/home/WhoIAm';
import CardDividerSection from '@/components/Common/CardDividerSection';
import MotivationalPhrase from '@/components/home/MotivationalPhrase';
import Graduation from '@/components/home/Graduation';

export default function Home() {
  return (
    <main className="">
      {/* intro com as particulas */}
      <div>
        <div>
          {/* paticulas */}
          <div className="-z-50 absolute">
            <ParticleComponent />
          </div>

          {/* conteudo da home */}
          <div>
            <div className="pt-1">
              <Header />
            </div>

            <div>
              <HomeComponent />
            </div>
          </div>
        </div>
      </div>

      {/* aqui vai o restate da home que não vai pegar as particulas */}
      <div className="bg-mainBlack min-h-screen">
        <div>
          <DividerSection />
        </div>

        {/* WhoIam am i */}
        <div>
          <WhoIam />
        </div>

        {/* card divider section */}
        <div>
          <CardDividerSection />
        </div>

        {/* portfolio */}
        <div>
          <MyPortfolioComponent />
        </div>

        {/* mark phrase */}
        <div>
          <MotivationalPhrase />
        </div>

        {/* divider */}
        <div>
          <DividerSection />
        </div>

        {/* Graduation */}
        <div>
          <Graduation />
        </div>
      </div>
    </main>
  );
}
