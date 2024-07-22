"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "react-responsive";
import { Squash as Hamburger } from 'hamburger-react';
import { cn } from "@/lib/utils";

// Import components
// import { MobileNav } from "./mobileNav";
// import { MobileMenu } from "./mobileMenu";
import { Typography } from './ui/typography';


import { mainNav, secondNav } from "@/constants";
import { Logo } from "@/icons/logo";
import { Container } from './ui/container';
import { LanguageSwitcher } from './elements/languageSwitcher';
import { SocialMedia } from './elements/socialMedia';
import { ChevronUp, CircleCheckBig } from 'lucide-react';
import { CartWidget } from './CartWidget';
import { gsap } from "gsap";
import debounce from "lodash.debounce";
import { Link, usePathname } from '@/i18n.config';


export const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const pathname = usePathname();
  const params = useParams();
  const tr = useTranslations("header");

  const isBigScreen = useMediaQuery({ query: "(min-width: 1400px)" });

  const showCart = !pathname.match(/^\/events\/\d+$/) && !pathname.match(/^\/products\/\d+$/) && pathname !== "/cart";

  const isActiveLink = (itemSrc: string) => {
    const currentPath = `${pathname}`;

    if (itemSrc === '/') {
      return currentPath === `/`;
    }

    return currentPath.startsWith(`${itemSrc}`);
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsFixed(window.scrollY > 30);
    }, 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.to(".logo-container svg", {
      width: !isFixed && isBigScreen ? 150 : 70,
      height: !isFixed && isBigScreen ? 150 : 70,
      duration: !isFixed && isBigScreen ? 0.3 : 0.3,
      ease: "Power4.ease",
    });
  }, [isFixed, isBigScreen]);


  const toggleOpenMobileNav = () => {
    setIsOpenMobileNav(prev => !prev)
  }

  return (
    <>
      <header
        className={cn(
          `transition-height fixed top-0 left-0 right-0 duration-300 bg-basic z-[12] pb-0 lDesktop:pt-6  lDesktop:pb-6`,
          isFixed ? "lDesktop:pb-4 lDesktop:pt-4" : ""
        )}
      >
        <Container className={cn(`flex justify-between w-full items-center lDesktop:items-end translate-height duration-300 h-[80px] lDesktop:h-auto [@media(min-width:1064px)]:gap-x-12`)}>
          <Link
            href="/"
            className={cn(` mr-auto pt-[10px]`, isFixed ? "mt-0" : "lDesktop:-mt-[12px]")}
          >
            <span className="logo-container">
              <Logo />
            </span>
          </Link>
          <div
            className={cn(
              `flex w-full max-w-[1200px] lDesktop:max-w-[1289px] flex-col justify-end items-start ml-auto transition-height duration-300`,
              isFixed ? "gap-y-0" : " lDesktop:gap-y-[40px]"
            )}
          >
            {/* Second Nav */}
            <div className={cn(`z-[14] w-full`, isFixed ? "hidden" : " visible ")}>
              <div className={cn(`hidden lDesktop:flex w-full  justify-between items-center`)}>
                <LanguageSwitcher />
                <ul className="flex justify-between items-end  gap-x-[60px]">
                  {secondNav.map(item => (
                    <li
                      key={item.id}
                      className={cn(
                        `text-lg leading-[20px] font-sfPro font-normal text-link transition-all duration-300 hover:text-white whitespace-nowrap py-1 `,
                        isActiveLink(item.src) ? "border-b border-[#ffffff] text-white" : "border-b border-transparent"
                      )}
                    >
                      <Link href={item.src}>{tr(item.title)}</Link>
                    </li>
                  ))}
                </ul>
                <SocialMedia />
                {showCart ? (
                  <Link href="/cart" className="flex justify-start items-center gap-x-[17px]">
                    <Typography className=" text-white inline-block mb-0">{tr("Кошик")}</Typography>
                    <CartWidget className="relative pb-[2px]" widthNumber={17} heightNumber={17} />
                  </Link>
                ) : null}
              </div>
            </div>
            {/* Main Nav Sticky */}
            <div
              className={cn(
                `flex  w-full gap-x-2 tablet:gap-x-12 items-center ml-auto justify-end lDesktop:justify-between`,
              )}
            >
              <ul className=" hidden tablet:flex justify-between items-start gap-x-[35px] desktop:gap-x-[50px] lDesktop:gap-x-[92px]">
                {mainNav.map(item => (
                  <li
                    className={cn(`text-[27px] font-sfPro font-normal leading-normal text-white`, isActiveLink(item.src) ? "border-b border-white" : "border-b border-transparent")}
                    key={item.id}
                  >
                    <Link className={cn(`pb-2`)} href={item.src}>
                      {tr(item.title)}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end items-end">
                {!showCart ? (
                  <Link href="/cart" className="relative">
                    <CartWidget width={35} height={35} className="mr-8 pr-1" />
                  </Link>
                ) : (
                  <Link
                    href="/events"
                    className="bg-white hover:bg-blue  text-basic /* transition */-all px-4 lDesktop:px-12 duration-300 inline-flex items-center justify-center rounded-md font-medium ring-offset-background hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[12px]  tablet:text-lg lDesktop::text-2xl uppercase font-oswaldBold h-[40px] tablet:h-[50px] lDesktop:h-[69px] w-full max-w-[200px] tablet:max-w-[220px] desktop:max-w-[305px] mobile:text-sm"
                  >
                    {tr("Замовити квиток")}
                  </Link>
                )}
              </div>
              <div className="block tablet:hidden pt-[1px]">
                <Hamburger toggled={isOpenMobileNav} toggle={toggleOpenMobileNav} size={40} color='#fff' />
              </div>
            </div>
          </div>
        </Container>
        {/* Mobile navigation */}
        {/* <MobileNav isOpen={isOpenMobileNav} setIsOpen={setIsOpenMobileNav} /> */}
        <div className="hidden items-start items-center tablet:flex lDesktop:hidden  bg-basic h-auto w-full py-[5px] border-t mt-2 border-white">
          <Container className="items-start flex-col justify-start text-white font-oswaldBold py-2">
            <div className="w-full" onClick={() => setIsExpanded(prev => !prev)}>
              <div className='flex w-[96px] justify-between items-center'>
                <span className="text-[16px] tracking-wider leading-relaxed uppercase pl-6">Menu</span>
                {!isExpanded ? <ChevronUp /> : <CircleCheckBig />}
              </div>
            </div>
            {/* <MobileMenu isOpen={isExpanded} setIsExpanded={setIsExpanded} /> */}
          </Container>
        </div>
      </header>
    </>
  );
};
