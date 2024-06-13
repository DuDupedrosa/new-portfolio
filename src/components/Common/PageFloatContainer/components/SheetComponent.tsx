import React, { useEffect, useRef, useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useRouter } from 'next/navigation';
import { MdAssistantNavigation } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import { handleRedirect } from '@/helpers/methods/handleRedirect';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoShareSocial } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { TfiMoreAlt } from 'react-icons/tfi';
import { navigationRoutes } from '@/helpers/shared/navigationMenuItems';
import { handleToPage } from '@/helpers/methods/handleToPage';
import { AiOutlineMenu } from 'react-icons/ai';
import { X } from 'lucide-react';
import { floatButtonIconMain, floatButtonMain } from '../style/style';
import Link from 'next/link';

const menuItemDropdownItemStyle = `text-lg rounded-lg hover:bg-gray-600 hover:text-gray-200 transition-all py-1 text-gray-400 font-medium flex items-center gap-2 cursor-pointer pl-6`;
const menuItemLinkIcon = `text-orange-600 text-xl`;

interface Props {
  notUseSectionToGo: boolean;
}

function SheetComponent({ notUseSectionToGo }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [sectionToGo, seSectionToGo] = useState<string>('');
  const { t } = useTranslation();

  const closeOutsideSheet = (event: MouseEvent) => {
    if (sheetRef.current && !sheetRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      window.addEventListener('click', closeOutsideSheet);
    } else {
      window.removeEventListener('click', closeOutsideSheet);
    }

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('click', closeOutsideSheet);
    };
  }, [open]);

  useEffect(() => {
    // usando o scroll suave pelo localStorage
    if (notUseSectionToGo) {
      localStorage.setItem('sectionToGo', sectionToGo);
      return;
    }

    if (sectionToGo) {
      handleToPage(sectionToGo, () => {
        setOpen(false);
      });
    }
  }, [sectionToGo]);

  return (
    <Sheet open={open}>
      <SheetTrigger
        onClick={(event) => {
          setOpen(!open);
          event.stopPropagation();
        }}
        className={`${floatButtonMain} hover:bg-primary/90`}
      >
        <span className="sr-only">open menu</span>
        <TfiMoreAlt className={`${floatButtonIconMain} hidden md:block`} />
        <AiOutlineMenu className={`${floatButtonIconMain} block md:hidden`} />
      </SheetTrigger>
      <SheetContent
        ref={sheetRef}
        side={'left'}
        className="bg-mainBlack"
        id="sheet"
      >
        <div
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary cursor-pointer p-1"
        >
          <X className="h-5 w-5 text-white" />
          <span className="sr-only">Close</span>
        </div>
        <div className="h-full flex flex-col justify-between">
          {/* top page */}
          <div>
            {/* navegação */}
            <div>
              <span className="text-xl text-gray-200 font-bold flex items-center gap-2">
                <MdAssistantNavigation className="text-gray-200" />
                {t('navigation')}
              </span>
              <div className="flex flex-col gap-4 mt-5">
                {/* manda sempre para a home, quando não estiver no /, dessa forma ele vai para a home manda o id da section para o localstorage e da o scroll suave quando cai na home */}
                {notUseSectionToGo &&
                  navigationRoutes.map((route, i) => {
                    return (
                      <Link
                        onClick={() => seSectionToGo(route.link)}
                        href={'/'}
                        key={i}
                        className={`text-lg rounded-lg hover:bg-gray-600 hover:text-gray-200 transition-all text-gray-400 pl-6 font-medium flex items-center gap-2 cursor-pointer py-1`}
                      >
                        <span className="w-3 h-3 rounded-full border-solid border-[1px] border-white bg-orange-600" />
                        {t(route.label)}
                      </Link>
                    );
                  })}

                {!notUseSectionToGo &&
                  navigationRoutes.map((route, i) => {
                    return (
                      <div
                        onClick={() => seSectionToGo(route.link)}
                        key={i}
                        className={`text-lg rounded-lg hover:bg-gray-600 hover:text-gray-200 transition-all text-gray-400 pl-6 font-medium flex items-center gap-2 cursor-pointer py-1`}
                      >
                        <span className="w-3 h-3 rounded-full border-solid border-[1px] border-white bg-orange-600" />
                        {t(route.label)}
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* separator */}
            <div className="w-full h-[1px] bg-gray-200 my-12"></div>

            {/* socials media */}
            <div>
              <span className="text-xl text-gray-200 font-bold flex items-center gap-2">
                <IoShareSocial className="text-gray-200" />
                {t('socials_links')}
              </span>

              <ul className="flex flex-col gap-4 mt-5">
                <li
                  onClick={() => {
                    if (process.env.NEXT_PUBLIC_GITHUB) {
                      handleRedirect(process.env.NEXT_PUBLIC_GITHUB);
                    }
                  }}
                  className={`${menuItemDropdownItemStyle}`}
                >
                  <FaGithub className={`${menuItemLinkIcon}`} />
                  Github
                </li>
                <li
                  onClick={() => {
                    if (process.env.NEXT_PUBLIC_LINKEDIN) {
                      handleRedirect(process.env.NEXT_PUBLIC_LINKEDIN);
                    }
                  }}
                  className={`${menuItemDropdownItemStyle}`}
                >
                  <FaLinkedin className={`${menuItemLinkIcon}`} />
                  Linkedin
                </li>
              </ul>
            </div>
          </div>

          {/* end page */}
          <div>
            <Button
              onClick={() => {
                if (process.env.NEXT_PUBLIC_LINKEDIN) {
                  handleRedirect(process.env.NEXT_PUBLIC_LINKEDIN);
                }
              }}
              className="text-lg md:text-xl font-bold text-white w-full h-[52px] rounded-full shadow-buttonMain bg-orange-600 border-[3px] border-solid border-white hover:bg-gray-800"
            >
              Fale comigo
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SheetComponent;
