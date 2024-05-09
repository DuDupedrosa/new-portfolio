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
    label: "Let's talk",
    link: 'https://github.com',
  },
];

const itemMenu = [
  {
    label: 'Item 1',
    link: '/home',
  },
  {
    label: 'Item 1',
    link: '/home',
  },
  {
    label: 'Item 1',
    link: '/home',
  },
  {
    label: 'Item 1',
    link: '/home',
  },
];

const menuItemDropdownItemStyle = `text-xl md:hidden text-gray-400 font-bold flex items-center gap-2`;
const menuItemLinkIcon = `text-orange-600 text-xl`;

function Header() {
  function handleRedirect(link: string) {
    window.open(link, '_blank');
  }

  return (
    <div className="w-full h-24 border-solid border-white border-main">
      <div className="flex  justify-between">
        {/* item do menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="border-r-solid border-r-white border-r-main focus:outline-none">
            <div className="flex h-[90px] md:h-[initial] items-center gap-2 px-5 cursor-pointer">
              <RiMenu2Fill className="text-orange-600 text-4xl" />
              <span className="text-2xl font-bold text-white">Menu</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 mt-2 w-[320px] md:w-[220px] ml-5 border-solid border-[2px] border-gray-400 shadow-cardMain">
            {/* links right header - only mobile */}
            <DropdownMenuLabel className="text-xl md:hidden text-gray-400 font-bold flex items-center gap-2">
              <IoShareSocial className="text-gray-400" />
              Socials Medias
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-400 md:hidden" />
            <div className="flex md:hidden flex-col gap-2">
              <DropdownMenuItem className={`${menuItemDropdownItemStyle}`}>
                <FaGithub className={`${menuItemLinkIcon}`} />
                Github
              </DropdownMenuItem>
              <DropdownMenuItem className={`${menuItemDropdownItemStyle}`}>
                <FaLinkedin className={`${menuItemLinkIcon}`} />
                Linkedin
              </DropdownMenuItem>
              <DropdownMenuItem className={`${menuItemDropdownItemStyle}`}>
                <MdOutlinePhoneInTalk className={`${menuItemLinkIcon}`} />
                Let's talk
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator className="bg-gray-400 md:hidden mt-8" />

            {/* navegação - mobile and desktop */}
            <DropdownMenuLabel className="text-xl text-gray-400 font-bold flex items-center gap-2">
              <MdAssistantNavigation className="text-gray-400" />
              Navigation
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-400" />
            <div className="flex flex-col gap-2">
              {itemMenu.map((item, i) => {
                return (
                  <DropdownMenuItem
                    key={i}
                    className={`text-xl text-gray-400 font-bold flex items-center gap-2`}
                  >
                    <span className="w-3 h-3 rounded-full border-solid border-[1px] border-white bg-orange-600" />
                    {item.label}
                  </DropdownMenuItem>
                );
              })}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* links header - only desktop */}
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
                  {item.label}
                </a>
              </li>
            );
          })}
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
