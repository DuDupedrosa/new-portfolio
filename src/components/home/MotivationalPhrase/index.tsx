import React from 'react';
import { useTranslation } from 'react-i18next';

function MotivationalPhrase() {
  const { t } = useTranslation();

  return (
    <div className="py-16 px-6 md:px-14">
      {/* container para centralizar */}
      <div className="grid place-items-center">
        {/* conteúdo */}
        <div>
          <h4
            className="block text-3xl font-bold text-center text-white mb-9 md:text-5xl max-w-2xl leading-[100px]"
            style={{ lineHeight: 1.2 }}
          >
            " {t('steve_jobs_text')} "
          </h4>
          <span className="block text-center font-medium text-white text-xl">
            Steve Jobs 1995
          </span>
        </div>
      </div>
    </div>
  );
}

export default MotivationalPhrase;
