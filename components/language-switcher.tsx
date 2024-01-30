"use client"

import { useState, useEffect, useRef } from 'react';
import { selfNames } from '@/app/i18n/settings'

export function LanguageSwitcher() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const buildLanguageLink = (lng: string) => {
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
  
    if (pathSegments.length > 0) {
      pathSegments[0] = lng;
    } else {
      pathSegments.push(lng);
    }
  
    return `/${pathSegments.join('/')}`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="border rounded-md w-6 h-6 ml-1 flex items-center justify-center"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
        </svg>
      </button>
      {dropdownOpen && (
        <div className="absolute mt-2 w-40 py-2 border rounded shadow-xl bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
        {Object.keys(selfNames).map(lng => (
            <a
            href={buildLanguageLink(lng)}
            key={lng}
            className="block px-4 py-2 hover:bg-gray-100 hover:text-slate-900"
            >
            {selfNames[lng]}
            </a>)
        )}
        </div>
      )}
    </div>
  );
};

