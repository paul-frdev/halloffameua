import { AboutUs } from '@/components/about/AboutUs';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Slide } from '@/components/Slide';
import { Container } from '@/components/ui/container';
import { fadeIn } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";


function AboutUsPage() {

  return (
    <section className="bg-white w-full text-black flex flex-col justify-start pb-24">
      <div className=' relative'>
        <Slide title='НАША МІСІЯ, ЦІННОСТІ ТА ЦІЛІ ЗАЛУ
СЛАВИ УКРАЇНСЬКОГО БОКСУ' src='/images/about.png' />
      </div>
      <AboutUs />
    </section>
  );
};


export default AboutUsPage