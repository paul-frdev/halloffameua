import React from 'react'
import {
  Accordion as BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type AccordionProps = {
  title: string;
  description: string;
}

export const Accordion: React.FC<AccordionProps> = ({ title, description }) => {
  return (
    <BaseAccordion  type="single" collapsible className=' w-full'>
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-[3rem] font-oswald font-bold hover:no-underline'>{title}</AccordionTrigger>
        <AccordionContent className='w-full text-[1.5rem] font-sfPro font-normal leading-[140%] text-desc'>
          {description}
        </AccordionContent>
      </AccordionItem>
    </BaseAccordion>
  )
}
