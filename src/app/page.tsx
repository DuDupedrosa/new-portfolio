import Header from '@/components/Common/Header';
import HomeComponent from '@/components/home/intro';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-mainBlack">
      <div className="pt-1">
        <Header />
      </div>

      <div>
        <HomeComponent />
      </div>
    </main>
  );
}
