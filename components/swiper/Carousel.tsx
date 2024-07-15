'use client'

import React from 'react'

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export type CustomArrowPrev = {
  onClick?: () => void;
  icon?: LucideIcon;
  className?: string;
  variant?: 'secondary' | 'link' | 'outline' | 'default' | 'ghost';
  size?: 'icon' | 'default' | 'lg' | 'sm';
  disabled?: boolean
};

export type CustomArrowNext = {
  onClick?: () => void;
  icon?: LucideIcon;
  className?: string;
  variant?: 'secondary' | 'link' | 'outline' | 'default' | 'ghost';
  size?: 'icon' | 'default' | 'lg' | 'sm';
  disabled?: boolean
};

type SwipperProps = {
  items: React.ReactElement[];
  options: SwiperOptions;
  slidesPerView?: number | 'auto';
  height?: number;
  width?: string;
  className?: string;
  maxWidth?: string;
  onBeforeInit?: (swiper: any) => void;
  classNameSlide?: string;
};


export const CustomPrevArrow = React.forwardRef<HTMLButtonElement, CustomArrowPrev>(({ onClick, icon: Icon, className, variant, size }, ref) => (
  <Button ref={ref} onClick={onClick} className={className} variant={variant} size={size}>
    {Icon && <Icon size={27} />}
  </Button>
));
CustomPrevArrow.displayName = 'CustomPrevArrow';

export const CustomNextArrow = React.forwardRef<HTMLButtonElement, CustomArrowNext>(({ onClick, icon: Icon, className, variant, size }, ref) => (
  <Button ref={ref} onClick={onClick} className={className} variant={variant} size={size}>
    {Icon && <Icon size={27} fill='currentColor' />}
  </Button>
));
CustomNextArrow.displayName = 'CustomNextArrow';

export const Carousel: React.FC<SwipperProps> = ({ options, items, height = 416, classNameSlide, slidesPerView = 3, className, onBeforeInit, width = '100%' }) => {
  return (
    <Swiper modules={[Navigation, Pagination]} onBeforeInit={onBeforeInit} slidesPerView={slidesPerView} {...options} className={cn(className)}>
      {items.map((item, index) => (
        <SwiperSlide className={classNameSlide} style={{ height: height, width: width }} key={index}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};