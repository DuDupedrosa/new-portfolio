'use client';

import * as React from 'react';
import DividerSection from '@/components/Common/DividerSection';
import Header from '@/components/Common/Header';
import HomeComponent from '@/components/home/intro';
import ParticleComponent from '@/components/particles/ParticlesComponent';
import MyPortfolioComponent from '@/components/home/intro/MyPortfolio';

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

        {/* portfolio */}
        <div>
          <MyPortfolioComponent />
        </div>
      </div>
    </main>
  );
}
