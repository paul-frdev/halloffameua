
'use client'

import { upcomingEvents } from "@/constants";
import { useCustomInView } from '@/hooks/useCustomInView';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Container } from '../ui/container';
import { Title } from '../ui/title';
import { Typography } from '../ui/typography';
import { Button } from '../ui/button';
import { Swiper as SwiperCore } from 'swiper/types';
import { Carousel, CustomNextArrow } from '../swiper/Carousel';
import { UpcomingCart } from './UpcomingCart';
import { ArrowRight } from 'lucide-react';

export const UpcomingEvents = () => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const route = useRouter();
  const pathname = usePathname();

  const { ref, animationBT, animationRL } = useCustomInView()

  const isMain = ["/", "/en-us/", "es-sp", "ua-uk"].includes(pathname);


  const carouselOptions = {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesOffsetBefore: 0,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesOffsetBefore: 0,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesOffsetBefore: 50,
      },
    },
    grabCursor: true,
    loop: true,
    pagination: false,
    slidesOffsetBefore: 0,
    speed: 700,
    navigation: {
      clickable: true,
      nextEl: ".custom-next-arrow",
    },
    onSlideChange: (swiper: any) => setActiveSlideIndex(swiper.activeIndex)
  };

  const handleNextClick = () => {
    setActiveSlideIndex(prevIndex => prevIndex + 1);
    console.log(activeSlideIndex);

  };


  const carouselItems = upcomingEvents.map((item) => (
    <>
      <UpcomingCart event={item} key={item.id} />
    </>
  ));


  return (
    <section
      className={cn(
        `relative h-full smallTablet:h-[680px] bg-upcoming object-center bg-no-repeat object-fill w-full max-w-[1930px]`,
        isMain ? "pb-20" : "mb-0"
      )}
    >
      <Container animate={animationBT} ref={ref} className=" [@media(max-width:732px)]:flex-col justify-between items-start">
        <div className="z-10 w-full smallTablet:max-w-[40%] pt-12 pb-0 smallTablet:py-24">
          <Title tag='h2' className="text-3xl font-sfPro font-normal text-[1.5rem]  border-b-4 pb-3  border-white mb-8">
            НАЙБЛИЖЧІ ПОДІЇ
          </Title>
          <Typography className="w-full smallTablet:max-w-[80%] text-2xl font-SFPRegular mb-12">
            Наші заходи порадують шанувальників та фанатів боксу
          </Typography>
          {pathname === "/" ? (
            <Button
              className="flex justify-center items-center gap-x-4 text-2xl leading-[33.6px]"
              variant="outline"
              size="lg"
              onClick={() => route.push("/events")}
            >
              <span>Дивитись усі події</span>
              <span className="pt-1">
                <ArrowRight color='fff' />
              </span>
            </Button>
          ) : null}
        </div>
        <motion.div className="block relative smallTablet:absolute top-0 right-0 w-full smallTablet:w-[55%]  py-20">
          <Carousel options={carouselOptions} items={carouselItems} />
          <CustomNextArrow
            className="custom-next-arrow hidden smallTablet:flex hover:bg-transparent bg-transparent absolute -bottom-[59px] desktop:top-[40%] left-[50%] z-[11]  w-[150px] h-[150px] border-[2px] border-white rounded-full"
            icon={ArrowRight}
            onClick={handleNextClick}
          />
        </motion.div>
      </Container>
    </section>
  );
};
