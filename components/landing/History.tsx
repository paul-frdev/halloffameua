'use client'

import React, {  useState } from "react";
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

export const History = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const route = useRouter();

  const { ref, animationBT, animationLR, animationRL } = useCustomInView()

  const isMob = useMediaQuery({ query: "(max-width: 416px)" });

  const handleMouseEnter = (buttonIndex: any) => {
    setHoveredButton(buttonIndex);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const buttons = [
    {
      text: "ДЕТАЛЬНІШЕ",
      variant: "outline",
      route: "/about",
      color: hoveredButton === 0 ? "#FFFFFF" : "#000000",
    },
    {
      text: "КНИГА ВІДГУКІВ",
      variant: "default",
      route: "/testimonials",
      color: hoveredButton === 1 ? "#000000" : "#FFFFFF",
    },
  ];
  return (
    <motion.section animate={animationBT} ref={ref} className="relative h-full pb-[56px] w-full max-w-[1930px]">
      <span className="bg-bg block absolute top-0 left-0 right-0 bottom-0 w-full smallTablet:h-[1005px] isShowAllElems:h-[1094px] object-cover bg-no-repeat" />
      <Container className=" justify-between items-start relative ">
        <div className="w-full max-w-full isShowAllElems:max-w-[60%] pt-12 pb-0 smallTablet:py-24">
          <Title animate={animationLR} className="text-3xl mobile:text-5xl tablet:text-6xl pb-6 border-b-4 border-white mb-6">
            ІСТОРІЯ УКРАЇНСЬКОГО БОКСУ
            <br />В ОДНОМУ МІСЦІ...
          </Title>
          <TypographyP
            animate={animationLR}
            className="w-full text-justify smallTablet:text-left max-w-full smallTablet:max-w-[70%] isShowAllElems:max-w-[80%] text-2xl font-SFPRegular mb-12"
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
            className=" w-full smallTablet:w-[70%] flex justify-start gap-x-4 lDesktop:justify-between items-center"
          >
            {buttons.map((button, index) => (
              <Button
                key={index}
                onClick={() => route.push(button.route)}
                className={cn(
                  `flex justify-center items-center gap-x-4 text-[16px] lDesktop:text-2xl leading-[33.6px] py-4 px-8`,
                  index === 1 && isMob ? "hidden" : "flex"
                )}
                variant={button.variant as any}
                size='lg'
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <span>{button.text}</span>
                <ArrowRight active color={button.color} />
              </Button>
            ))}
          </motion.div>
        </div>
        <motion.span
          animate={animationRL}
          whileTap={{ scale: 0.5 }}
          className="hidden smallTablet:block z-[1] bg-person absolute right-[0] isShowAllElems:right-[276px] bottom-[-56px] h-[635px] w-[350px] isShowAllElems:w-[526px] bg-no-repeat object-cover"
        />
      </Container>
      <motion.span
        animate={animationBT}
        className="hidden isShowAllElems:block bg-boxingBack absolute -top-[200px] right-0 bottom-0 h-[1300px] w-[733px] bg-no-repeat object-cover"
      />
    </motion.section>
  );
};
