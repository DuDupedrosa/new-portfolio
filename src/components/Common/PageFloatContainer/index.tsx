import React, { useEffect, useState } from 'react';
import SheetComponent from './components/SheetComponent';
import TranslateButtonComponent from './components/TranslateButtonComponent';
import GoPageTopComponent from './components/GoPageTopComponent';
import { usePathname, useRouter } from 'next/navigation';

interface Props {
  notUseSectionToGo?: boolean;
}

function PageFloatContainer({ notUseSectionToGo = false }: Props) {
  const [isBottom, setIsBottom] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const offset = 100; // Offset de 100 pixels do final da página

      if (windowHeight + scrollPosition >= documentHeight - offset) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col gap-5 fixed z-50 bottom-9 md:right-9 right-4">
      <TranslateButtonComponent />
      <SheetComponent notUseSectionToGo={notUseSectionToGo} />
      {isBottom && pathname !== '/projects' && <GoPageTopComponent />}
    </div>
  );
}

export default PageFloatContainer;
