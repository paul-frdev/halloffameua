import { ProductItem } from '@/components/productId/ProductItem';
import productList from "../../../../scripts/products.json";
import React from "react";
import SubscribeForm from '@/components/forms/SubscribeForm';


const ProductPage = ({ params: { productId } }: { params: { productId: string } }) => {
  const formattedProduct = productList.find(item => item.id.toString() === productId);
  return (
    <>
      <ProductItem product={formattedProduct} />
      <SubscribeForm />
    </>
  );
};

export default ProductPage;