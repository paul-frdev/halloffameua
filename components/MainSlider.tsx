'use client'

import React, { useRef } from 'react'
import { Swiper as SwiperCore } from 'swiper/types';
import { Slide } from './Slide';
import { Carousel } from './swiper/Carousel';
import { IMainSlide } from '@/types/sliders';
import { useTranslations } from 'next-intl';


type MainSliderProps = {
  slides: IMainSlide[]
}
export const MainSlider = ({ slides }: MainSliderProps) => {
  const swiperRef = useRef<SwiperCore>();
  const tr = useTranslations("slider");

  const carouselOptions = {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
    grabCursor: true,
    loop: true,
    pagination: {
      clickable: true,
    },
    slidesOffsetBefore: 0,
    speed: 700,
  };

  const mainSliders = slides.map((slide) => (
    <>
      <Slide title={tr(slide.title)} src={slide.src} key={slide.id} />
    </>
  ));

  return (
    <section className='w-full'>
      <div className='relative w-full max-w-[1632px] px-4 mx-auto z-0' >
        <Carousel
          className="mx-auto"
          height={760}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          items={mainSliders}
          options={carouselOptions}
        />
      </div>
    </section>
  )
}