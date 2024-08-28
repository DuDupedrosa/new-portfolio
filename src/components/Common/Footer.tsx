import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="w-full border-t-solid border-t-main border-t-gray-200 p-8">
      <p className="text-gray-400 font-semibold text-sm">
        {t('footer_rights')}
      </p>
    </div>
  );
}

export default Footer;
