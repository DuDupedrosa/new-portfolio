import { Button } from '@/components/ui/button';
import { handleRedirect } from '@/helpers/methods/handleRedirect';
import React from 'react';
import { useTranslation } from 'react-i18next';

function CardDividerSection() {
  const { t } = useTranslation();

  return (
    <div>
      {/* card */}
      <div className="ml-8 md:ml-20 my-16 py-16 rounded-xl  bg-orange-600 border-main border-solid border-white shadow-cardMainWhite">
        <div className="grid place-items-center">
          <span className="text-3xl md:text-5xl max-w-5xl px-5 text-center block font-bold text-white mb-5">
            {t('open_new_job')}
          </span>
        </div>

        <div className="grid place-items-center px-5">
          <p className="text-center font-medium text-base md:text-lg text-gray-200 max-w-[620px]">
            {t('open_new_job_sub_title')}
          </p>
        </div>

        <div className="mt-16 grid place-items-center">
          <Button
            onClick={() => {
              if (process.env.NEXT_PUBLIC_LINKEDIN) {
                handleRedirect(process.env.NEXT_PUBLIC_LINKEDIN);
              }
            }}
            className="text-lg md:text-xl font-bold text-mainBlack md:max-w-[280px] h-[54px] md:h-[64px] rounded-full shadow-buttonMainBlack bg-white border-[3px] border-solid border-mainBlack hover:bg-white hover:text-orange-600"
          >
            {t('lets_talk_with_me')}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardDividerSection;
