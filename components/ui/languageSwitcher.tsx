"use client";

import {
  localeNames,
  locales,
  usePathname,
  useRouter,
  type Locale,
} from "@/i18n.config";
import { countries } from '@/constants'
import Image from "next/image";
import React from "react";

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newLocale = event.target.value as Locale;

    // ...if the user chose Arabic ("ar-eg"),
    // router.replace() will prefix the pathname
    // with this `newLocale`, effectively changing
    // languages by navigating to `/ar-eg/about`.
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex justify-between w-full gap-x-[31px] max-w-[122px] mr-[60px] items-center">
      {countries.map((locale: any) => (
        <span
          key={locale.id}
          onClick={() => router.replace(pathname, { locale: locale.locate })}
          className="hover:scale-150 transition-all duration-300 cursor-pointer"
        >
          <Image src={locale.src} alt="image" />
        </span>
      ))}
    </div>
  );
};
