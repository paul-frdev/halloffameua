'use client'

import React, { useState } from "react";
import { ArrowRight } from "@/icons/arrowRight";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useCustomInView } from '@/hooks/useCustomInView';
import { Container } from '../ui/container';
import { Title } from '../ui/title';
import { TypographyP } from '../ui/typographyP';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';

export const History = () => {
  const route = useRouter();

  const { ref, animationBT, animationLR, animationRL } = useCustomInView()

  const isMob = useMediaQuery({ query: "(max-width: 416px)" });
  const tr = useTranslations("history");


  const buttons = [
    {
      text: tr("ДЕТАЛЬНІШЕ"),
      variant: "outline",
      route: "/about",
    },
    {
      text: tr("КНИГА ВІДГУКІВ"),
      variant: "default",
      route: "/testimonials",
    },
  ];
  return (
    <motion.section animate={animationBT} ref={ref} className="bg-bg relative h-full py-[56px] w-full object-cover bg-no-repeat max-w-[1930px] z-[3]">
      <Container className=" relative">
        <div className=' overflow-hidden flex justify-between items-start'>
          <div className="w-full max-w-[60%] pb-0">
            <Title animate={animationLR} className="text-5xl font-oswald font-bold pb-9 border-b-4 border-white mb-6">
              {tr("ІСТОРІЯ УКРАЇНСЬКОГО БОКСУ В ОДНОМУ МІСЦІ")}...
            </Title>
            <TypographyP
              animate={animationLR}
              className="w-full text-justify  max-w-[80%]  text-2xl font-sfPro font-normal mb-20"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed sed ullamcorper tellus risus tortor. Nisi, vitae sit dictumst
              tincidunt. Arcu eu massa ut arcu praesent arcu duis amet. Nunc sed et et, ipsum. Quam ornare viverra tincidunt etiam nisi, ullamcorper
              quis morbi malesuada. Diam lectus aliquam amet, justo quam orci, et consequat. Phasellus elementum sodales lacus in vivamus curabitur
              parturient. Sagittis sit id odio rhoncus, urna nisl egestas. Auctor sollicitudin quis in auctor tempus mollis nibh. Vitae, odio pretium
              quis lobortis rhoncus praesent nec velit magna. Malesuada dictum adipiscing tincidunt consequat gravida pharetra pulvinar. Rhoncus, neque
              hendrerit arcu, ullamcorper tellus quis. Congue fringilla a netus rhoncus, nisl ac vitae gravida donec. Dui nibh orci quisque neque
              feugiat pulvinar quis dignissim. Vestibulum pellentesque et blandit cursus pellentesque viverra iaculis. Massa a quis id leo consectetur
              aliquet nec in at. Nulla nec ipsum at suspendisse nunc. Adipiscing aenean fermentum vitae id et dolor eu. Pretim mattis ipsum, malesuada
              cursus risus, at.
            </TypographyP>
            <motion.div
              animate={animationBT}
              className=" w-full max-w-[30%] flex  gap-x-4 justify-between items-center"
            >
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  onClick={() => route.push(button.route)}
                  className={cn(
                    `flex justify-center h-[60px] items-center gap-x-4 text-[16px] lDesktop:text-2xl leading-[33.6px] py-4 px-8`,
                  )}
                  variant={button.variant as any}
                  size='lg'
                >
                  <span>{button.text}</span>
                  <ArrowRight />
                </Button>
              ))}
            </motion.div>
          </div>
          <motion.span
            animate={animationRL}
            whileTap={{ scale: 0.5 }}
            className=" block z-[5] bg-person absolute right-[16px]  bottom-[-56px] h-[635px] w-[350px]  bg-no-repeat object-cover"
          />
          <motion.span
            animate={animationBT}
            className=" block bg-boxingBack absolute z-[4] -top-[200px] right-[16px] bottom-0 h-[865px] w-[733px] bg-no-repeat object-cover"
          />
        </div>
      </Container>
    </motion.section>
  );
};
