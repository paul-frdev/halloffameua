"use client";

import { fadeIn } from "@/constants";
import useProductCart from "@/hooks/useProductCart";
import { Product } from "@/types";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import Breadcrumbs from '../Breadcrumbs';
import { Container } from '../ui/container';
import { Gallery } from '../gallery/Gallery';
import { Title } from '../ui/title';
import { TypographyP } from '../ui/typographyP';
import { Button } from '../ui/button';
import { CountButtons } from './CountButtons';
import { PRODUCT_COLORS, PRODUCT_SIZES } from '@/constants/forms';
import FormGenerator from '../forms/FormGenerator';
import { useSubscribeForm } from '@/hooks/useSubscribeForm';
import { Accordion } from '../elements/Accordion';
import { Currency } from '../elements/Currency';

interface ProductItemProps {
  product: Product | undefined;
}

/* temporary description of a product */
const description = [
  {
    id: '1',
    title: 'Опис продукту',
    description: 'Some'
  }
]
export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const [color, setColor] = useState<string | undefined>(product?.characteristics[0]?.color[0]);
  const [size, setSize] = useState<string | undefined>(product?.characteristics[0]?.size[0]);

  const { addProduct, products, addProductQuantity, subtractProductQuantity } = useProductCart();
  const { methods, onHandleSubmit, loading } = useSubscribeForm()

  const productInCart = products.find(item => item.id === product?.id);
  const productColors = product?.characteristics[0].color.map((item, index) => ({
    value: item,
    label: item,
    id: `${index++}`.toString()
  }))
  const productSizes = product?.characteristics[0].size.map((item, index) => ({
    value: item,
    label: item,
    id: `${index++}`.toString()
  }))

  const onHandleProduct = () => {
    if (product && product.id && color && size) {
      const formattedProduct = {
        ...product,
        id: product.id,
        color,
        size,
      };
      addProduct(formattedProduct);
    }
  };

  return (
    <motion.section initial="initial" animate="animate" variants={fadeIn} className="bg-white w-full pt-12 text-black">
      <Container className="flex justify-start items-start flex-col ">
        <Breadcrumbs className='mb-12' breadcrumbs={[
          { label: 'Головна', href: '/' },
          {
            label: 'Магазин',
            href: `/products`,
          },
          {
            label: `${product?.title?.length! > 20 ? product?.title?.slice(20) + "..." : product?.title}`, href: `/products/${product?.id}`,
            active: true
          },
        ]} />
        <div className="w-full flex justify-start items-start gap-x-24 mb-12">
          <div className="mb-8 w-full max-w-[700px]">
            <Gallery images={product?.images!} />
          </div>
          <div className="w-full flex flex-col justify-start items-start pt-8">
            <div className="mb-24">
              <Link
                href="/"
                className=" cursor-pointer hover:text-label transition-all duration-300 text-[1.625rem] text-black whitespace-nowrap flex flex-col justify-start items-start gap-y-1"
              >
                <span className="text-label text-[1.313rem] ">Категорія</span>
                {product?.category}
              </Link>
            </div>
            <div className="flex justify-between items-center gap-x-4 mb-12">
              <Title className="text-[3.563rem] font-sfPro font-normal leading-[57px] text-nowrap">{product?.title}</Title>
              <Currency priceClass='text-[3rem] text-nowrap font-sfPro font-bold leading-[57px]' price={product?.price!} discount={product?.discount} isDiscount={product?.isDiscount} />
            </div>
            <TypographyP className="text-2xl font-sfPro font-normal leading-[140%] tracking-wide leading-snug mb-20">{product?.description}</TypographyP>
            <div className="mb-12">
              {!productInCart ? (
                <Button
                  onClick={onHandleProduct}
                  variant="outline"
                  className=" bg-black hover:bg-blue text-white text-[1.25rem] uppercase hover:text-white w-[285px] h-[60px]"
                >
                  Додати до кошику
                </Button>
              ) : (
                <CountButtons
                  quantity={productInCart.quantity}
                  product={productInCart}
                  addQuantity={addProductQuantity}
                  subtractQuantity={subtractProductQuantity}
                />
              )}
            </div>
            <div className='w-full max-w-[730px]'>
              <Title className="text-[48px] font-SFPRegular mb-8">Характеристики товару</Title>
              <div className="w-full mb-8 border-b border-solid border-[rgba(0,0,0,0.5)]">
                {PRODUCT_COLORS.map(field => (
                  <FormGenerator
                    key={field.id}
                    {...field}
                    errors={methods.formState.errors}
                    register={methods.register}
                    name={field.name}
                    label={field.label}
                    placeholder=''
                    options={productColors}
                    labelClass='w-full flex justify-between items-center text-[1.5rem] font-sfPro font-normal text-label'
                    inputClass='text-black'

                  />
                ))}
              </div>
              <div className="w-full  mb-8 border-b border-solid border-[rgba(0,0,0,0.5)]">
                {PRODUCT_SIZES.map(field => (
                  <FormGenerator
                    key={field.id}
                    {...field}
                    errors={methods.formState.errors}
                    register={methods.register}
                    name={field.name}
                    label={field.label}
                    placeholder=''
                    options={productSizes}
                    labelClass='w-full flex justify-between items-center text-[1.5rem] font-sfPro font-normal text-label'
                    inputClass='text-black'

                  />
                ))}
              </div>
              <div className="w-full mb-8 border-b border-solid border-[rgba(0,0,0,0.5)]">
                {description.map(item => (
                  <Accordion titleClass='text-[1.5rem] font-sfPro font-normal text-label' key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Title className="text-[3rem] font-sfPro font-bold">Вам може сподобатися</Title>
        </div>
      </Container>
    </motion.section>
  );
};