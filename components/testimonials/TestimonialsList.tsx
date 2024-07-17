'use client'

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "@/constants";
import { Testimonial as TestimonialType } from "@/types";
import { Container } from '../ui/container';
import Breadcrumbs from '../Breadcrumbs';
import { Search } from '../Search';
import { Title } from '../ui/title';
import { Testimonial } from './Testimonial';
import { Image } from '../ui/Image';
import { Button } from '../ui/button';

interface TestimonialsListProps {
  testimonials: TestimonialType[];
}

export const TestimonialsList: React.FC<TestimonialsListProps> = ({ testimonials }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<TestimonialType[]>([]);
  const [displayedTestimonials, setDisplayedTestimonials] = useState<TestimonialType[]>([]);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    updateDisplayedTestimonials();
  }, [searchQuery, limit, testimonials]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    setLimit(3);
  };

  const loadMore = () => {
    setLimit((prev) => prev + 3);
  };

  const updateDisplayedTestimonials = () => {
    const filteredResults = testimonials.filter(
      testimonial =>
        testimonial.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
    setDisplayedTestimonials(filteredResults.slice(0, limit));
  };

  return (
    <motion.section initial="initial" animate="animate" variants={fadeIn} className="bg-white w-full">
      <div className="w-full max-w-[1900px] h-full mb-8">
        <Image className='w-full' alt='testimonial-image' src='/images/ring.png' />
      </div>
      <Container className="flex-col justify-start items-start text-black pt-8 pb-12">
        <div className="flex flex-row gap-y-8 w-full justify-between items-center mb-4">
          <Breadcrumbs breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Testimonials', href: `/testimonials`, active: true },
          ]} />
          <Search searchQuery={searchQuery} handleSearchInputChange={handleSearchInputChange} />
        </div>
        <div className="mb-4 tablet:mb-12">
          <Title className="text-[3rem] text-black font-oswald font-bold uppercase">Книга відгуків</Title>
        </div>
        {displayedTestimonials.map(item => (
          <Testimonial key={item.id} testimonial={item} />
        ))}
        {displayedTestimonials.length < searchResults.length && (
          <div className='flex justify-center items-center w-full mt-4'>
            <Button onClick={loadMore} className="w-full font-sfPro font-normal bg-transparent text-black h-[50px] text-[2rem] uppercase border-transparent max-w-[300px] hover:bg-transparent hover:text-black hover:border hover:border-solid hover:border-black ">
              Load more
            </Button>
          </div>
        )}
      </Container>
    </motion.section>
  );
};