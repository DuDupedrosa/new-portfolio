import Link from 'next/link';
import React from 'react';
import { FaHouse } from 'react-icons/fa6';

interface BradCrumbItem {
  label: string;
  current: boolean;
  toPath: string;
}

interface Props {
  routes: BradCrumbItem[];
}

const divider = '>';
function BreadCrumb({ routes }: Props) {
  return (
    <div className="flex items-center">
      <Link
        href={'/'}
        className="flex items-center gap-2 mr-2 text-gray-400 text-base hover:underline"
      >
        <FaHouse className="text-base text-gray-400 mb-1" />
        Home
      </Link>
      <ul>
        {routes.map((route, i) => {
          return (
            <li key={i} className="flex items-center gap-2">
              <span className="block text-gray-400 text-base">{divider}</span>
              {route.current ? (
                <Link
                  href={route.toPath}
                  className={`text-base text-gray-200 underline`}
                >
                  {route.label}
                </Link>
              ) : (
                <Link
                  href={route.toPath}
                  className={`text-base text-gray-400 hover:underline`}
                >
                  {route.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BreadCrumb;
