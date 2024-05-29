import React from 'react';
import SheetComponent from './components/SheetComponent';
import TranslateButtonComponent from './components/TranslateButtonComponent';

function PageFloatContainer() {
  return (
    <div className="flex flex-col gap-5 fixed z-50 bottom-9 md:right-9 right-4">
      <TranslateButtonComponent />
      <SheetComponent />
    </div>
  );
}

export default PageFloatContainer;
