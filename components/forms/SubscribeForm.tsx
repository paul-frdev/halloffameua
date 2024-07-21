'use client'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { motion } from "framer-motion";
import { useCustomInView } from '@/hooks/useCustomInView';
import { Container } from '../ui/container';
import { Title } from '../ui/title';
import { SUBSCRIBE_USER } from '@/constants/forms';
import FormGenerator from './FormGenerator';
import { useSubscribeForm } from '@/hooks/useSubscribeForm';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';



type Props = {}


const SubscribeForm = (props: Props) => {

  const { ref, animationLR } = useCustomInView()

  const { methods, onHandleSubmit, loading } = useSubscribeForm();
  const tr = useTranslations("subscribe-form");

  return (
    <section
      className="h-[294px] pt-8 w-full  flex justify-start items-center w-full bg-black text-white"
    >
      <Container className=' justify-start'>
        <Title tag='h4' className="w-full max-w-[250px] mr-[4.25rem] text-[1.5rem] font-sfPro font-normal leading-[33.6px] text-left">
          {tr("Підпишиться щоб залишатися в курсі подій:")}
        </Title>
        <div className='flex justify-between items-center w-full max-w-[910px] gap-x-6'>
          {SUBSCRIBE_USER.map((field) => (
            <FormGenerator
              key={field.id}
              {...field}
              errors={methods.formState.errors}
              register={methods.register}
              name={field.name}
              label={tr(field.label)}
              placeholder=''
              inputClass="w-full max-w-[455px] bg-transparent border-b-1 border-t-0 border-l-0 border-r-0  rounded-none mt-2"
              labelClass='max-w-[455px] relative'
              errorClass='absolute -bottom-[29px] left-0'
            />
          ))}
        </div>
        <Button variant='blue' className='w-full max-w-[283px] h-[60px] text-[1.5rem] font-sfPro font-normal ml-[4.25rem] ' onClick={onHandleSubmit}>{tr("Підписатися")}</Button>
      </Container>
    </section>
  )
}


export default SubscribeForm