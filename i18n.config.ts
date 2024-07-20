import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en-us", "uk-ua", "es-es"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  "en-us": "English",
  "uk-ua": "Ukraine",
  "es-es": "Spain",
};

export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });
