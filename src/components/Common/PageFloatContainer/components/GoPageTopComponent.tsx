import { Button } from '@/components/ui/button';
import React from 'react';
import { floatButtonIconMain, floatButtonMain } from '../style/style';
import { FaArrowUp } from 'react-icons/fa';

function GoPageTopComponent() {
  function handleToPageTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Button onClick={() => handleToPageTop()} className={`${floatButtonMain}`}>
      <FaArrowUp className={`${floatButtonIconMain}`} />
    </Button>
  );
}

export default GoPageTopComponent;
