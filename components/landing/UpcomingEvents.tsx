
'use client'

import { upcomingEvents } from "@/constants";
import { useCustomInView } from '@/hooks/useCustomInView';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Container } from '../ui/container';
import { Title } from '../ui/title';
import { Typography } from '../ui/typography';
import { Button } from '../ui/button';
import { Carousel, CustomNextArrow } from '../swiper/Carousel';
import { UpcomingCart } from './UpcomingCart';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const UpcomingEvents = () => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const route = useRouter();
  const pathname = usePathname();

  const { ref, animationLR, animationRL } = useCustomInView()
  const tr = useTranslations("upcoming-events");

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
        `relative h-full w-full max-w-[1930px]`,
        isMain ? "pb-20" : "mb-0"
      )}
    >
      <span className=' absolute top-0 left-0 right-0 bottom-0 h-full w-full blur  bg-upcoming  object-center bg-no-repeat object-fill' />
      <Container ref={ref} className="justify-between items-start py-20 overflow-hidden">
        <div className="z-10 w-full max-w-[40%] pb-0 py-24 ">
          <Title tag='h2' className="text-6xl font-oswald font-bold  border-b-4 pb-10 uppercase  border-white mb-20">
            {tr("Найближчі події")}
          </Title>
          <Typography className="w-full text-2xl font-sfPro font-normal mb-12">
            {tr("Наші заходи порадують шанувальників та фанатів боксу")}
          </Typography>
          <Button
            className="flex justify-center h-[60px] items-center gap-x-4 text-2xl leading-[33.6px]"
            variant="outline"
            size="lg"
            onClick={() => route.push("/events")}
          >
            <span>{tr("Дивитись усі події")}</span>
            <span className="pt-1">
              <ArrowRight />
            </span>
          </Button>
        </div>
        <div className="block relative top-0 right-0 w-full max-w-[55%]">
          <Carousel options={carouselOptions} items={carouselItems} height={495} />
          <CustomNextArrow
            className="custom-next-arrow flex hover:bg-transparent bg-transparent absolute -bottom-[59px] top-[40%] left-[50%] z-[11]  w-[150px] h-[150px] border-[2px] border-white rounded-full text-white group-hover:text-blue"
            icon={ArrowRight}
            onClick={handleNextClick}
          />
        </div>
      </Container>
    </section>
  );
};
