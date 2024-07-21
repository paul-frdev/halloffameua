'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { Container } from '../components/ui/container';
import { Title } from '../components/ui/title';
import { Button } from '../components/ui/button';
import { TypographyP } from '../components/ui/typographyP';
import useProductCart from '@/hooks/useProductCart';
import { fadeIn } from '@/constants';
import { Currency } from '../components/elements/Currency';
import { Image } from './ui/Image';
import { useRouter } from 'next/navigation';

export const Cart: React.FC = () => {
  const router = useRouter();
  const { products, removeProduct, addProductQuantity, subtractProductQuantity } = useProductCart();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <motion.section initial="initial" animate="animate" variants={fadeIn} className="bg-white w-full h-screen pt-12 text-black">
      <Container className=''>
        <Title className="text-4xl font-sfPro font-bold my-12">Your Cart</Title>
        {products.length === 0 ? (
          <TypographyP className=' text-[2rem] font-sfPro font-semibold'>Your cart is empty.</TypographyP>
        ) : (
          <>
            {products.map((product) => (
              <div key={product.id} className="flex justify-between items-center border-b py-4">
                <div className="flex items-center">
                  <Image src='/' alt={product.title} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <TypographyP className="font-sfPro font-bold">{product.title}</TypographyP>
                    {/* <TypographyP>Size: {product.size}, Color: {product.color}</TypographyP> */}
                  </div>
                </div>
                <div className="flex items-center">
                  <Button onClick={() => subtractProductQuantity(product)} variant="outline" className="px-2 py-1 mr-2">-</Button>
                  <TypographyP>{product.quantity}</TypographyP>
                  <Button onClick={() => addProductQuantity(product)} variant="outline" className="px-2 py-1 ml-2">+</Button>
                  <Currency price={product.price * product.quantity} />
                  <Button onClick={() => removeProduct(product.id)} variant="outline" className="ml-4">Remove</Button>
                </div>
              </div>
            ))}
            <div className="mt-8 flex justify-between items-center">
              <Title className="text-2xl font-sfPro font-bold">Total:</Title>
              <Currency price={totalPrice} />
            </div>
            <Button onClick={() => router.push('/checkout')} className="mt-8 w-full bg-black text-white hover:bg-blue">
              Proceed to Checkout
            </Button>
          </>
        )}
      </Container>
    </motion.section>
  );
};
