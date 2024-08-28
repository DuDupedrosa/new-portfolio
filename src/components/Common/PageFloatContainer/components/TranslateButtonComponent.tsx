import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MdOutlineTranslate } from 'react-icons/md';
import { AiOutlineGlobal } from 'react-icons/ai';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialogNotXClose';
import { useTranslation } from 'react-i18next';
import { languageTextEnum } from '@/helpers/enums/LanguageEnum';
import { changeLanguage } from 'i18next';
import { floatButtonIconMain, floatButtonMain } from '../style/style';
import BR from '@/assets/images/BR.png';
import US from '@/assets/images/US.png';
import Image from 'next/image';

const buttonLanguage = `text-base hover:bg-transparent text-start border-solid border-[1px] border-transparent font-semibold hover:border-orange-600 
bg-transparent grid grid-cols-[28px_1fr] gap-2 h-11 w-full py-2`;

function TranslateButtonComponent() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const [openChangeLanguageOptions, setOpenChangeLanguageOptions] =
    useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  function handleChangeLanguage() {
    if (i18n.language === languageTextEnum.PT) {
      changeLanguage(languageTextEnum.EN);
    } else {
      changeLanguage(languageTextEnum.PT);
    }

    setOpen(false);
  }

  const closeOutsideDropDown = (event: MouseEvent) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(event.target as Node)
    ) {
      setOpenChangeLanguageOptions(false);
    }
  };

  useEffect(() => {
    if (openChangeLanguageOptions) {
      window.addEventListener('click', closeOutsideDropDown);
    } else {
      window.removeEventListener('click', closeOutsideDropDown);
    }

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('click', closeOutsideDropDown);
    };
  }, [openChangeLanguageOptions]);

  return (
    <div className="relative" ref={dropDownRef}>
      <Button
        onClick={(event) => {
          setOpenChangeLanguageOptions(!openChangeLanguageOptions);
          event.stopPropagation();
        }}
        className={`${floatButtonMain}`}
      >
        <span className="sr-only">open translate dialog</span>
        <MdOutlineTranslate className={`${floatButtonIconMain}`} />
      </Button>

      {openChangeLanguageOptions && (
        <div className="absolute animate__animated animate__fadeIn animate__faster bg-gray-800 py-5 px-2 w-[240px] bottom-[70px] right-[0px] rounded-lg border-solid border-[1px] border-gray-200">
          <Button
            onClick={() => {
              if (i18n.language !== languageTextEnum.PT) {
                setOpen(true);
              }
            }}
            className={`${buttonLanguage} ${
              i18n.language === languageTextEnum.PT
                ? 'bg-gray-600 hover:bg-gray-600'
                : ''
            }`}
          >
            <Image alt="BRL" src={BR} className="w-[28px] h-[28px]" />
            Português
          </Button>
          <Button
            onClick={() => {
              if (i18n.language !== languageTextEnum.EN) {
                setOpen(true);
              }
            }}
            className={`${buttonLanguage} mt-2 ${
              i18n.language === languageTextEnum.EN
                ? 'bg-gray-600 hover:bg-gray-600'
                : ''
            }`}
          >
            <Image alt="US" src={US} className="w-[28px] h-[28px]" />
            English
          </Button>
        </div>
      )}

      <Dialog open={open}>
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
    </div>
  );
}

export default TranslateButtonComponent;
