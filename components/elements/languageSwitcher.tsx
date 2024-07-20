"use client";

import {
  usePathname,
  useRouter,
} from "@/i18n.config";
import { countries } from '@/constants'
import Image from "next/image";
import React from "react";
import { cn } from '@/lib/utils';

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="flex justify-between w-full gap-x-[31px] max-w-[122px] mr-[60px] items-center">
      {countries.map((locale: any) => (
        <span
          key={locale.id}
          onClick={() => router.replace(pathname, { locale: locale.locate })}
          className={cn(`hover:scale-150 transition-all duration-300 cursor-pointer`)}
        >
          <Image src={locale.src} alt="image" />
        </span>
      ))}
    </div>
  );
};
