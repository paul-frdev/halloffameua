import React from 'react'
import { Image } from '../ui/Image';
import { TypographyH2 } from '../ui/typographyH2';


type ISlide = {
  id: number,
  title: string;
  src: string;
}
export const Slide: React.FC<ISlide> = ({ id, title, src }) => {

  return (
    <>
      <div className=' w-full max-w-[800px] h-auto inset-center'>
        <TypographyH2 className='mb-8'>{title}</TypographyH2>
      </div>
      <div>
        <Image src={src} alt='slide' />
      </div>
    </>
  )
}
