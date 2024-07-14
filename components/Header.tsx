"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "react-responsive";
import { Squash as Hamburger } from 'hamburger-react';
import { cn } from "@/lib/utils";

// Import components
// import { MobileNav } from "./mobileNav";
// import { MobileMenu } from "./mobileMenu";
import { Typography } from './ui/typography';

// Import constants and icons
import { mainNav, secondNav } from "@/constants";
import { Logo } from "@/icons/logo";
import { Facebook } from "@/icons/facebook";
import { Twitter } from "@/icons/twitter";
import { Instagram } from "@/icons/instagram";
import { Youtube } from "@/icons/youtube";
import { Container } from './ui/container';
import { LanguageSwitcher } from './ui/languageSwitcher';
import { SocialMedia } from './ui/socialMedia';
import { ChevronUp, CircleCheckBig } from 'lucide-react';
import { CartWidget } from './CartWidget';
import { gsap } from "gsap";
import debounce from "lodash.debounce";



export const socialMediaData = [
  { id: 1, social: <Facebook />, link: "https://www.facebook.com" },
  { id: 2, social: <Twitter />, link: "https://www.twitter.com" },
  { id: 3, social: <Instagram />, link: "https://www.instagram.com" },
  { id: 4, social: <Youtube />, link: "https://www.youtube.com" },
];

export const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const pathname = usePathname();
  const params = useParams();
  const tr = useTranslations("header");

  const isBigScreen = useMediaQuery({ query: "(min-width: 1400px)" });

  const match = pathname.match(/^\/events\/(\d+)$/);
  const eventId = match ? match[1] : null;
  const matchProductId = pathname.match(/^\/shop\/(\d+)$/);
  const productId = matchProductId ? matchProductId[1] : null;

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 30) {
        setIsFixed(true);
      } else {
        if (window.scrollY < 60) {
          setIsFixed(false);
        }
      }
    }, 0);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
          `transition-all fixed top-0 left-0 right-0 duration-300 bg-basic z-[12] pb-0 lDesktop:pt-6  lDesktop:pb-6`,
          isFixed ? "lDesktop:pb-4 lDesktop:pt-4" : ""
        )}
      >
        <Container className={cn(`flex justify-between w-full items-center lDesktop:items-end translate-all duration-300 h-[80px] lDesktop:h-auto [@media(min-width:1064px)]:gap-x-12`)}>
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
              `flex w-full max-w-[1200px] lDesktop:max-w-[1289px] flex-col justify-end items-start ml-auto transition-all duration-300`,
              isFixed ? "gap-y-0" : " lDesktop:gap-y-[40px]"
            )}
          >
            <div className={cn(`z-[14] w-full transition-all duration-300`, isFixed ? "hidden" : " visible ")}>
              <div className={cn(`hidden lDesktop:flex w-full  justify-between items-center`)}>
                <LanguageSwitcher />
                <ul className="flex justify-between items-end  gap-x-[60px]">
                  {secondNav.map(item => {
                    const isActive = `/${params.locale}${item.src}`.slice(0, -1) === pathname || `/${params.locale}${item.src}/${params.mediaId}` === pathname;

                    return (
                      <li
                        key={item.id}
                        className={cn(
                          `text-lg leading-[20px] font-sfPro font-normal text-link transition-all duration-300 hover:text-white whitespace-nowrap py-1 `,
                          isActive ? "border-b border-[#ffffff] text-white" : "border-b border-transparent"
                        )}
                      >
                        <Link href={item.src}>{tr(item.title)}</Link>
                      </li>
                    );
                  })}
                </ul>
                <SocialMedia />
                {eventId || productId || pathname === "/cart" ? null : (
                  <Link href="/cart" className="flex justify-start items-center gap-x-[17px]">
                    <Typography className=" text-white inline-block mb-0">{tr("Кошик")}</Typography>
                    <CartWidget className="relative pb-[2px]" widthNumber={17} heightNumber={17} />
                  </Link>
                )}
              </div>
            </div>

            <div
              className={cn(
                `flex  w-full gap-x-2 tablet:gap-x-12 items-center ml-auto justify-end lDesktop:justify-between`,
              )}
            >
              <ul className=" hidden tablet:flex justify-between items-start gap-x-[35px] desktop:gap-x-[50px] lDesktop:gap-x-[92px]">
                {mainNav.map(item => {
                  const isActive =
                    `/${params.locale}${item.src}`.slice(0, -1) === pathname ||
                    `/${params.locale}${item.src}/${params.eventId}` === pathname ||
                    `/${params.locale}${item.src}/${params.productId}` === pathname ||
                    `/${params.locale}${item.src}/${params.newsId}` === pathname;

                  return (
                    <li
                      className={cn(`text-[27px] font-sfPro font-normal leading-normal text-white`, isActive ? "border-b border-white" : "border-b border-transparent")}
                      key={item.id}
                    >
                      <Link className={cn(`pb-2`)} href={item.src}>
                        {tr(item.title)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="flex justify-end items-end">
                {eventId || productId || pathname === "/cart" ? (
                  <Link href="/cart" className="relative">
                    <CartWidget width={35} height={35} className="mr-8 pr-1" />
                  </Link>
                ) : (
                  <Link
                    href="/events"
                    className="bg-white hover:bg-blue  text-basic transition-all px-4 lDesktop:px-12 duration-300 inline-flex items-center justify-center rounded-md font-medium ring-offset-background hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[12px]  tablet:text-lg lDesktop::text-2xl uppercase font-oswaldBold h-[40px] tablet:h-[50px] lDesktop:h-[69px] w-full max-w-[200px] tablet:max-w-[220px] desktop:max-w-[305px] mobile:text-sm"
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