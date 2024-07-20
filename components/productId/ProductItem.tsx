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

interface ProductItemProps {
  product: Product | undefined;
}
export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const [color, setColor] = useState<string | undefined>(product?.characteristics[0]?.color[0]);
  const [size, setSize] = useState<string | undefined>(product?.characteristics[0]?.size[0]);

  const { addProduct, products, addProductQuantity, subtractProductQuantity } = useProductCart();

  const productInCart = products.find(item => item.id === product?.id);

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
                className=" cursor-pointer hover:text-[#999999] transition-all duration-300 text-[26px] text-black whitespace-nowrap flex flex-col justify-start items-start gap-y-1"
              >
                <span className="text-sm text-[#999999] ">Категорія</span>
                {product?.category}
              </Link>
            </div>
            <div className="flex justify-between items-end gap-x-20 mb-12">
              <Title className="text-[48px] font-SFPRegular leading-snug tracking-wide">{product?.title}</Title>
              {product?.price!}
            </div>
            <TypographyP className="text-2xl tracking-wide leading-snug mb-20">{product?.description}</TypographyP>
            <div className="mb-12">
              {!productInCart ? (
                <Button
                  onClick={onHandleProduct}
                  variant="outline"
                  className=" bg-black hover:bg-blue text-white text-[20px] uppercase hover:text-white w-[285px] h-[60px]"
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
            <div>
              <Title className="text-[48px] font-SFPRegular mb-8">Характеристики товару</Title>
              <div>
                {/* <div className="w-full max-w-[600px] mb-8">
                  <SelectForm productColors={product?.characteristics[0]?.color} setColor={setColor} color={color} />
                </div>
                <div className="w-full max-w-[600px]">
                  <SelectForm productSizes={product?.characteristics[0]?.size} setSize={setSize} size={size} />
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
          <div>
            <Title className="text-[48px] font-SFPBold">Вам може сподобатися</Title>
          </div>
      </Container>
    </motion.section>
  );
};