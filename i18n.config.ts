import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en-us", "ua-uk", "sp-es"] as const;
export type Locale = (typeof locales)[number];


export const localeNames: Record<Locale, string> = {
    "en-us": "English",
    "ua-uk": "Ukraine",
    "sp-es": 'Spain'
   };

export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });