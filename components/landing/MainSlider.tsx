'use client'

import React, { useRef } from 'react'
import { Swiper as SwiperCore } from 'swiper/types';
import { Carousel } from '../swiper/Carousel';
import { Container } from '../ui/container';
import { Slide } from './Slide';

const mainSlides = [
  {
    id: 1,
    src: "/images/slider1.png",
    title: "Історія боксу в одному місці"
  },
  {
    id: 2,
    src: "/images/slider1.png",
    title: "Історія боксу в одному місці"
  },
  {
    id: 3,
    src: "/images/slider1.png",
    title: "Історія боксу в одному місці"
  },
  {
    id: 4,
    src: "/images/slider1.png",
    title: "Історія боксу в одному місці"
  },
  {
    id: 5,
    src: "/images/slider1.png",
    title: "Історія боксу в одному місці"
  },
  {
    id: 6,
    src: "/images/slider1.png",
    title: "Історія боксу в одному місці"
  },
  {
    id: 7,
    src: "/images/slider1.png",
    title: "Історія боксу в одному місці"
  }
]

export const MainSlider = () => {
  const swiperRef = useRef<SwiperCore>();

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

  const mainSliders = mainSlides.map((slide) => (
    <>
      <Slide {...slide} key={slide.id} />
    </>
  ));

  return (
    <section className='w-full'>
      <div className='relative flex justify-center items-center w-full max-w-[1632px] px-4 mx-auto'>
        <Carousel
          className="mx-auto"
          height={960}
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