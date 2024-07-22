"use client";


import React from "react";
import { Image } from '../ui/Image';
import { News } from '@/types/blog';
import Link from 'next/link';
import { usePathname } from '@/i18n.config';

interface PreviewProps {
  newsItem: News;
}
export const PreviewInfo: React.FC<PreviewProps> = ({ newsItem }) => {
  const path = usePathname()

  const isArticle = path === `/blog`

  return (
    <div className=" flex flex-col lDesktop:flex-row  justify-start items-start lDesktop:gap-x-8 h-full ">
      <div className="w-full max-w-[738px]">
        <Image src={newsItem.src} alt='image' className='w-full max-w-[738px]' />
      </div>

      <div className="flex flex-col justify-between h-full w-full lDesktop:w-[80%] gap-y-8">
        <div
          className=" h-full lDesktop:h-[350px] text-[1.5rem] font-sfPro font-normal text-justify tablet:text-left pt-4"
          dangerouslySetInnerHTML={{
            __html: newsItem?.description?.length! > 550 ? newsItem?.description?.slice(0, 550) + "..." : newsItem?.description!,
          }}
        />
        <div className="mt-auto w-full">
          <Link
            href={isArticle ? `/blog/${newsItem.id}` : `/news/${newsItem.id}`}
            className=" inline-flex justify-center items-center bg-black hover:bg-blue text-white uppercase transition-all duration-300 w-full max-w-[455px] py-5 rounded-sm"
          >
            Читати Далі
          </Link>
        </div>
      </div>
    </div>
  );
};