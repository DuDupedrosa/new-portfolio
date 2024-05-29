'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { handleRedirect } from '@/helpers/methods/handleRedirect';
import { MdAssistantNavigation } from 'react-icons/md';
import './style/header-style.css';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { navigationRoutes } from '@/helpers/shared/navigationMenuItems';
import { handleToPage } from '@/helpers/methods/handleToPage';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const linksHeader = [
  {
    label: 'Github',
    link: process.env.NEXT_PUBLIC_GITHUB,
  },
  {
    label: 'Linkedin',
    link: process.env.NEXT_PUBLIC_LINKEDIN,
  },
  {
    label: 'lets_talk',
    link: process.env.NEXT_PUBLIC_LINKEDIN,
  },
];

function Header() {
  const { t } = useTranslation();
  const router = useRouter();
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const closeOutsideDropDown = (event: MouseEvent) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(event.target as Node)
    ) {
      setOpenNavigation(false);
    }
  };

  useEffect(() => {
    if (openNavigation) {
      window.addEventListener('click', closeOutsideDropDown);
    } else {
      window.removeEventListener('click', closeOutsideDropDown);
    }

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('click', closeOutsideDropDown);
    };
  }, [openNavigation]);

  return (
    <div className="w-full h-24 border-solid border-white border-main">
      <div className="flex justify-between">
        {/* navigation drop down */}
        <div className="relative" ref={dropDownRef}>
          {/* button to open/close */}
          <div
            onClick={(event) => {
              setOpenNavigation(!openNavigation);
              event.stopPropagation();
            }}
            className="border-r-solid h-[90px] hover:bg-orange-600 border-r-white border-r-main focus:outline-none"
          >
            <div className="flex h-full items-center gap-2 px-5 cursor-pointer navigation-icon w-full">
              <MdAssistantNavigation className="text-orange-600 text-4xl" />
              <span className="text-2xl font-bold text-white">
                {t('navigation')}
              </span>
            </div>
          </div>

          {/* navigation box */}
          {openNavigation && (
            <div className="bg-gray-800 animate__animated animate__fadeIn animate__faster rounded-lg py-5 px-2 absolute top-24 mt-2 w-[220px] ml-5 border-solid border-[2px] border-gray-400 shadow-cardMain">
              <ul className="flex flex-col gap-3">
                {navigationRoutes.map((route, i) => {
                  return (
                    <li className="no-hover p-0" key={i}>
                      <div
                        onClick={() =>
                          handleToPage(route.link, () => {
                            setOpenNavigation(false);
                          })
                        }
                        className={`text-lg rounded-lg hover:bg-gray-600 transition-all hover:text-gray-200 text-gray-400 font-medium flex items-center gap-2 cursor-pointer py-1 pl-2 w-full`}
                      >
                        <span className="w-3 h-3 rounded-full transition-all border-solid border-[1px] border-white bg-orange-600" />
                        {t(route.label)}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        {/* socials media - only desktop */}
        <ul className="hidden md:grid grid-cols-[1fr_1fr_1fr]">
          {linksHeader.map((item, i) => {
            return (
              <li
                onClick={() => {
                  if (item.link) {
                    handleRedirect(item.link);
                  }
                }}
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
