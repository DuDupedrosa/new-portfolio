'use client';

import * as React from 'react';
import DividerSection from '@/components/Common/DividerSection';
import Header from '@/components/Common/Header';
import ParticleComponent from '@/components/particles/ParticlesComponent';
import MyPortfolioComponent from '@/components/home/MyPortfolio';
import WhoIam from '@/components/home/WhoIAm';
import CardDividerSection from '@/components/Common/CardDividerSection';
import MotivationalPhrase from '@/components/home/MotivationalPhrase';
import Graduation from '@/components/home/Graduation';
import HomeComponent from '@/components/home/Introduction';
import i18n from '@/i18n/i18n';
import PageFloatContainer from '@/components/Common/PageFloatContainer';
import { handleToPage } from '@/helpers/methods/handleToPage';
import Footer from '@/components/Common/Footer';
import type { Metadata } from 'next';

export default function Home() {
  const [isBottom, setIsBottom] = React.useState(false);

  // initialized i18n
  React.useEffect(() => {
    const sectionToGo = localStorage.getItem('sectionToGo');
    i18n.changeLanguage('pt');

    if (sectionToGo) {
      handleToPage(sectionToGo);
      localStorage.removeItem('sectionToGo');
    }
  }, []);

  return (
    <main className="bg-mainBlack md:bg-[initial]">
      <PageFloatContainer />
      {/* intro com as particulas */}
      <div id="intro">
        <div>
          {/* paticulas */}
          <div className="-z-50 hidden md:block absolute">
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
        <div id="about-me">
          <WhoIam />
        </div>

        {/* card divider section */}
        <div>
          <CardDividerSection />
        </div>

        {/* portfolio */}
        <div id="portfolio">
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
        <div id="graduation">
          <Graduation />
        </div>

        {/* footer */}
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
