'use client';

import Header from '@/components/Common/Header';
import HomeComponent from '@/components/home/intro';
import ParticleComponent from '@/components/particles/ParticlesComponent';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-mainBlack">
      <div>
        <ParticleComponent />
        {/* conteudo da home */}
        <div className="absolute top-0 min-w-full">
          <div className="pt-1">
            <Header />
          </div>

          <div>
            <HomeComponent />
            {/* vai ter que ir aqui os outros componentes */}
            <div className="h-[1020px] bg-mainBlack w-full"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
