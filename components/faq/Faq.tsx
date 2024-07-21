"use client";

import { fadeIn, questions } from "@/constants";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Container } from '../ui/container';
import Breadcrumbs from '../Breadcrumbs';
import { Title } from '../ui/title';
import { Search } from '../Search';
import { Accordion } from '../elements/Accordion';

export const Faq = () => {

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
  };



  return (
    <motion.section initial="initial" animate="animate" variants={fadeIn} className="bg-white pt-12 w-full text-black pb-12">
      <Container className="flex-col justify-start items-start">
        <Breadcrumbs breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Faq', href: `/faq`, active: true },
        ]} />
        <div className="w-full flex justify-between items-center mt-8 border-b border-gray900 pb-4">
          <Title className="uppercase text-[4rem] text-black font-oswald font-bold">Оплата, доставка та повернення</Title>
          <Search className='-order-1 max-w-[350px] mb-8 tablet:mb-0 tablet:order-1' searchQuery={searchQuery} handleSearchInputChange={handleSearchInputChange} />
        </div>
        <div className='w-full flex flex-col justify-start items-start'>
          {questions.map((item) => (
            <Accordion key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </motion.section>
  );
};
