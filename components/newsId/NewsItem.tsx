"use client";

import { fadeIn } from "@/constants";
import { DateRageIcon } from "@/icons/dateRageIcon";
import { motion } from "framer-motion";
import React from "react";
import { Container } from '../ui/container';
import Breadcrumbs from '../Breadcrumbs';
import { TypographyP } from '../ui/typographyP';
import { Title } from '../ui/title';
import { Image } from '../ui/Image';
import { Social } from './Social';
import { News } from '@/types/blog';
import { usePathname } from '@/i18n.config';

interface INewsItem {
  newsItem?: News;
}
export const NewsItem: React.FC<INewsItem> = ({ newsItem }) => {

  const pathname = usePathname();

  const isArticle = pathname === `/blog/${newsItem?.id}`

  return (
    <motion.section initial="initial" animate="animate" variants={fadeIn} className="bg-white pt-12 w-full text-black">
      <Container className="flex-col justify-start items-start">
        <Breadcrumbs breadcrumbs={[
          { label: 'Home', href: '/' },
          {
            label: `${isArticle ? 'Blog' : 'News'}`,
            href: `${isArticle ? '/blog' : '/news'}`,
          },
          {
            label: `${newsItem?.title?.length! >= 20 ? newsItem?.title.slice(0, 20) + "..." : newsItem?.title}`,
            href: `${isArticle ? `/blog/${newsItem?.id}` : `/news/${newsItem?.id}`}`,
            active: true,
          },
        ]} />
        <div className="w-full flex flex-col tablet:flex-row justify-between items-start gap-y-2 tablet:gap-y-0  tablet:items-center mt-6 mb-6">
          <div className="flex items-center order-3 tablet:order-1 gap-x-4">
            <DateRageIcon />
            <span className=' font-sfPro font-normal text-[1.5rem]'>{newsItem?.date}</span>
          </div>
          <div className='order-2'>
            <Title className=' font-oswald font-bold text-[4rem]'>{newsItem?.title}</Title>
          </div>
          <Social className='order-4 tablet:order-3' />
        </div>
        <div className="mb-12">
          <div className="w-full mb-8">
            <Image src={newsItem?.src!} alt='news-item' className='h-[630px] object-cover object-fill object-center' />
          </div>
          <TypographyP className=" font-sfPro font-normal text-[1.5rem]">{newsItem?.description}</TypographyP>
        </div>
      </Container>
    </motion.section>
  );
};
