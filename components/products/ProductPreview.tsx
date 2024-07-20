'use client'

import { Product } from "@/types";
import Link from "next/link";
import React from "react";
import { Title } from '../ui/title';
import { Image } from '../ui/Image';
import { Currency } from '../elements/Currency';

interface ProductPreviewItemProps {
  product: Product;
}
export const ProductPreview: React.FC<ProductPreviewItemProps> = ({ product }) => {

  return (
    <div className="relative bg-card rounded-md flex flex-col justify-start items-center cursor-pointer hover:shadow-lg w-full max-w-[435px] min-h-[552px] transition-all duration-300 shadow-md">
      <Link href={`/products/${product.id}`} className='h-full'>
        {product.isDiscount ? (
          <span className="absolute top-0 right-0">
            <Image src="/images/sale.png" className='w-[50px] h-[50px] bg-white' alt="sale" />
          </span>
        ) : null}
        <div className="flex flex-col justify-between h-full items-center">
          <Image src={product.images[0].src} alt="preview image" className="w-full bg-card" />
          <div className="mt-auto">
            <Title className="text-[1.5rem] leading-[140%] font-sfPro font-normal uppercase  mb-6">{product.title}</Title>
            <Currency price={product.price} discount={product.discount} isDiscount={product.isDiscount} />
          </div>
        </div>
      </Link>
    </div>
  );
};