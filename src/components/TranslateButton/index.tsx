import React, { useState } from 'react';
import { Button } from '../ui/button';
import { MdOutlineGTranslate, MdOutlineTranslate } from 'react-icons/md';
import { AiOutlineGlobal } from 'react-icons/ai';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialogNotXClose';
import { useTranslation } from 'react-i18next';
import { languageTextEnum } from '@/helpers/enums/LanguageEnum';
import { changeLanguage } from 'i18next';

function TranslateButton() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);

  function handleChangeLanguage() {
    if (i18n.language === languageTextEnum.PT) {
      changeLanguage(languageTextEnum.EN);
    } else {
      changeLanguage(languageTextEnum.PT);
    }

    setOpen(false);
  }

  return (
    <>
      <Dialog open={open}>
        <DialogTrigger asChild>
          <Button
            onClick={() => setOpen(true)}
            className="md:w-16 md:h-16 w-14 h-14 border-[2px]  border-solid border-white rounded-full bg-orange-600 grid place-items-center"
          >
            <MdOutlineTranslate className="text-white text-3xl" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[320px] min-[340px]:w-[345px] sm:w-[520px] bg-gray-900 border-[1px] border-solid border-gray-400">
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-medium text-white mb-3">
              <span className="flex justify-center flex-col items-center gap-2">
                <AiOutlineGlobal className="text-lg md:text-xl" />
                {i18n.language === languageTextEnum.EN
                  ? 'Gostaria de mudar o idioma do site para português?'
                  : 'Would you like to change the site language to English?'}
              </span>
            </DialogTitle>
            <DialogDescription className="text-gray-400 text-sm font-normal text-center">
              {i18n.language === languageTextEnum.EN
                ? 'Isso vai mudar todo o idioma da interface, incluindo textos, descrições e mensagens. Todo o conteúdo será exibido de acordo com o idioma escolhido.'
                : 'This will change the entire language of the interface, including texts, descriptions and messages. All content will be displayed according to the chosen language.'}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center items-center gap-5 mt-8">
            <Button
              onClick={() => handleChangeLanguage()}
              className="bg-orange-600 border-solid border-[1px] border-transparent hover:border-white hover:font-bold hover:bg-orange-600 rounded-lg text-sm md:text-base font-medium"
            >
              {i18n.language === languageTextEnum.EN
                ? 'Sim, tenho certeza'
                : `Yes, I'm sure`}
            </Button>
            <DialogClose asChild>
              <Button
                onClick={() => setOpen(false)}
                type="button"
                className="bg-transparent hover:bg-gray-600 hover:text-gray-200 transition-all border-solid border-[1px] border-gray-400 text-gray-400 font-medium text-sm md:text-base"
              >
                {i18n.language === languageTextEnum.EN
                  ? 'Não, fechar'
                  : `Not, close`}
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default TranslateButton;
