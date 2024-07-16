"use client";

import { INews } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { Image } from '../ui/Image';
import { Button } from '../ui/button';

interface NewsItemProps {
  mediaItem: INews;
}
export const NewsItem: React.FC<NewsItemProps> = ({ mediaItem }) => {
  const route = useRouter();
  return (
    <div className=" flex flex-col lDesktop:flex-row  justify-start items-start lDesktop:gap-x-8 h-full ">
      <div className="w-full max-w-[738px]">
        <Image src={mediaItem.src} alt='image' className='w-full max-w-[738px]' />
      </div>

      <div className="flex flex-col justify-between h-full w-full lDesktop:w-[80%] gap-y-8">
        <div
          className=" h-full lDesktop:h-[350px] text-[1.5rem] font-sfPro font-normal text-justify tablet:text-left pt-4"
          dangerouslySetInnerHTML={{
            __html: mediaItem?.description?.length! > 550 ? mediaItem?.description?.slice(0, 550) + "..." : mediaItem?.description!,
          }}
        />
        <div className="mt-auto">
          <Button
            onClick={() => route.push(`/news/${mediaItem?.id}`)}
            variant="outline"
            className=" bg-black hover:bg-blue text-white uppercase hover:text-white w-full mobile:w-[265px] h-[60px]"
          >
            Читати Далі
          </Button>
        </div>
      </div>
    </div>
  );
};