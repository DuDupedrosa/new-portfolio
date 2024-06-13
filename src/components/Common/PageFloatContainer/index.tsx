import React from 'react';
import SheetComponent from './components/SheetComponent';
import TranslateButtonComponent from './components/TranslateButtonComponent';

interface Props {
  notUseSectionToGo?: boolean;
}

function PageFloatContainer({ notUseSectionToGo = false }: Props) {
  return (
    <div className="flex flex-col gap-5 fixed z-50 bottom-9 md:right-9 right-4">
      <TranslateButtonComponent />
      <SheetComponent notUseSectionToGo={notUseSectionToGo} />
    </div>
  );
}

export default PageFloatContainer;
