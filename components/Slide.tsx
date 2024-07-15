'use client'
import React from 'react'
import { Image } from './ui/Image';
import { Title } from './ui/title';


type ISlide = {
  id?: number,
  title: string;
  src: string;
}
export const Slide: React.FC<ISlide> = ({ id, title, src }) => {

  return (
    <>
      <div className=' w-full max-w-[80%] h-auto inset-center'>
        <Title tag='h1' className=' text-center text-white font-oswald font-bold text-[4rem]'>{title}</Title>
      </div>
      <Image src={src} alt='slide' className=' h-full object-fill' />
    </>
  )
}
