import { Button } from '@/components/ui/button';
import { handleRedirect } from '@/helpers/methods/handleRedirect';
import React from 'react';
import { useTranslation } from 'react-i18next';

function ButtonMainCallAction() {
  const { t } = useTranslation();

  return (
    <Button
      onClick={() => {
        if (process.env.NEXT_PUBLIC_LINKEDIN) {
          handleRedirect(process.env.NEXT_PUBLIC_LINKEDIN);
        }
      }}
      className="text-lg md:text-xl font-bold text-white md:max-w-[280px] h-[54px] md:h-[64px] rounded-full shadow-buttonMain bg-orange-600 border-[3px] border-solid border-white hover:bg-gray-800"
    >
      {t('lets_talk_with_me')}
    </Button>
  );
}

export default ButtonMainCallAction;
