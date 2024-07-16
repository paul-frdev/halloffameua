"use client";

import { fadeIn } from "@/constants";
import { INews } from "@/types";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Container } from '../ui/container';
import Breadcrumbs from '../Breadcrumbs';
import { Title } from '../ui/title';
import { Search } from '../Search';
import { NewsItem } from './NewsItem';

interface NewsListProps {
  news: INews[];
}
export const NewsList: React.FC<NewsListProps> = ({ news }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<INews[]>([]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    updateSearchResults(value);
  };

  const updateSearchResults = (query: string) => {
    const filteredResults = news.filter(
      media => media.title.toLowerCase().includes(query.toLowerCase()) || media.description?.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <motion.section initial="initial" animate="animate" variants={fadeIn} className="bg-white py-12">
      <Container className="flex-col justify-start items-start">
        <Breadcrumbs breadcrumbs={[
          { label: 'Home', href: '/' },
          {
            label: 'News',
            href: `/news`,
            active: true,
          },
        ]} />
        <div className="flex flex-col tablet:flex-row justify-between items-start tablet:items-center w-full my-12 pb-12 border-b-[2px] border-[#788191]">
          <Title className="text-[3.75rem] text-black font-oswald font-bold uppercase">Новини</Title>
          <Search className='-order-1 mb-8 tablet:mb-0 tablet:order-1' searchQuery={searchQuery} handleSearchInputChange={handleSearchInputChange} />
        </div>
        <div className="w-full flex justify-center flex-col text-black items-center gap-y-12 lDesktop:gap-y-6 last-of-type:mb-12">
          {(searchQuery ? searchResults : news).map(media => (
            <NewsItem key={media.id} mediaItem={media} />
          ))}
        </div>
      </Container>
    </motion.section>
  );
};