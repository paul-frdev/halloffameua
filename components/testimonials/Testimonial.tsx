import { Testimonial as TestimonialType } from "@/types";
import React from "react";
import { Image } from '../ui/Image';
import { TypographyP } from '../ui/typographyP';

interface TestimonialProps {
  testimonial: TestimonialType;
}

export const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="flex flex-row justify-start items-stretch gap-x-8 mb-12 min-h-[400px]">
      <div className="w-full max-w-[738px]">
        <Image className='w-full h-full object-cover' alt='image' src={testimonial.src} />
      </div>
      <div className="flex flex-col justify-between w-full">
        <TypographyP className='text-[1.5rem] font-sfPro font-normal text-desc'>{testimonial.description}</TypographyP>
        <div className="w-full mt-5 pt-4 border-t border-[rgba(15, 15, 15, .5)]">
          <TypographyP className="text-[1.125rem] font-oswald font-bold mb-2">{testimonial.author}</TypographyP>
          <TypographyP className='text-[1.125rem] font-sfPro font-normal'>{testimonial.dignity}</TypographyP>
        </div>
      </div>
    </div>
  );
};