'use client';

import React from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IoShareSocial } from 'react-icons/io5';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAssistantNavigation, MdOutlinePhoneInTalk } from 'react-icons/md';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import ButtonMainCallAction from './Button/ButtonMainCallAction';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';

const linksHeader = [
  {
    label: 'Github',
    link: 'https://github.com',
  },
  {
    label: 'Linkedin',
    link: 'https://github.com',
  },
  {
    label: 'lets_talk',
    link: 'https://github.com',
  },
];

const itemMenu = [
  {
    label: 'Inicio',
    link: '/home',
  },
  {
    label: 'Sobre mim',
    link: '/home',
  },
  {
    label: 'Portfólio',
    link: '/home',
  },
  {
    label: 'Formação',
    link: '/home',
  },
];

const menuItemDropdownItemStyle = `text-lg rounded-lg hover:bg-gray-600 hover:text-gray-200 transition-all py-1 text-gray-400 font-medium flex items-center gap-2 cursor-pointer pl-6`;
const menuItemLinkIcon = `text-orange-600 text-xl`;

function Header() {
  const { t } = useTranslation();

  function handleRedirect(link: string) {
    window.open(link, '_blank');
  }

  return (
    <div className="w-full h-24 border-solid border-white border-main">
      <div className="flex  justify-between">
        {/* item do menu */}
        <Sheet>
          <SheetTrigger className="border-r-solid border-r-white border-r-main focus:outline-none">
            <div className="flex h-[90px] md:h-[initial] items-center gap-2 px-5 cursor-pointer">
              <RiMenu2Fill className="text-orange-600 text-4xl" />
              <span className="text-2xl font-bold text-white">{t('menu')}</span>
            </div>
          </SheetTrigger>
          <SheetContent side={'left'} className="bg-mainBlack">
            <div className="h-full flex flex-col justify-between">
              {/* top page */}
              <div>
                {/* navegação */}
                <div>
                  <span className="text-xl text-gray-200 font-bold flex items-center gap-2">
                    <MdAssistantNavigation className="text-gray-200" />
                    Navegação
                  </span>
                  <div className="flex flex-col gap-4 mt-5">
                    {itemMenu.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className={`text-lg rounded-lg hover:bg-gray-600 hover:text-gray-200 transition-all text-gray-400 pl-6 font-medium flex items-center gap-2 cursor-pointer py-1`}
                        >
                          <span className="w-3 h-3 rounded-full border-solid border-[1px] border-white bg-orange-600" />
                          {item.label}
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
                    Fale comigo
                  </span>

                  <ul className="flex flex-col gap-4 mt-5">
                    <li className={`${menuItemDropdownItemStyle}`}>
                      <FaGithub className={`${menuItemLinkIcon}`} />
                      Github
                    </li>
                    <li className={`${menuItemDropdownItemStyle}`}>
                      <FaLinkedin className={`${menuItemLinkIcon}`} />
                      Linkedin
                    </li>
                  </ul>
                </div>
              </div>

              {/* end page */}
              <div>
                <Button className="text-lg md:text-xl font-bold text-white w-full h-[52px] rounded-full shadow-buttonMain bg-orange-600 border-[3px] border-solid border-white hover:bg-gray-800">
                  Fale comigo
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* socials media - only desktop */}
        <ul className="hidden md:grid grid-cols-[1fr_1fr_1fr]">
          {linksHeader.map((item, i) => {
            return (
              <li
                onClick={() => handleRedirect(item.link)}
                key={i}
                className="border-l-solid border-l-white border-l-main flex-1 h-[90px] px-5 grid place-items-center transition-all hover:bg-orange-600 cursor-pointer"
              >
                <a
                  href={item.link}
                  target="_blank"
                  className="text-2xl text-white font-bold"
                >
                  {t(item.label)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
