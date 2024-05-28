import TranslateButton from '@/components/TranslateButton';
import React from 'react';
import SheetComponent from './components/SheetComponent';

function PageFloatContainer() {
  return (
    <div className="flex flex-col gap-5 fixed z-50 bottom-9 md:right-9 right-4">
      <TranslateButton />
      <SheetComponent />
    </div>
  );
}

export default PageFloatContainer;
