"use client";

import { Product } from "@/types";
import React, { useState } from "react";
import Breadcrumbs from '../Breadcrumbs';
import { Container } from '../ui/container';
import { Search } from '../Search';
import { Filters } from '../Filters';
import { Title } from '../ui/title';
import { ProductPreview } from './ProductPreview';

interface ProductListProps {
  products: Product[];
  title?: string;
}
export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    updateSearchResults(value);
  };

  const updateSearchResults = (query: string) => {
    const filteredResults = products.filter(
      product => product.title.toLowerCase().includes(query.toLowerCase()) || product.description.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <section className=' w-full bg-white'>
      <Container className=" flex-col justify-start items-start text-black py-12">
        <Breadcrumbs breadcrumbs={[
          { label: 'Додому', href: '/' },
          {
            label: 'Магазин',
            href: `/products`,
            active: true,
          },
        ]} />
        <div className="flex w-full justify-between items-center mt-4 mb-10">
          <Filters />
          <Search searchQuery={searchQuery} handleSearchInputChange={handleSearchInputChange} />
        </div>
        <div className="grid grid-cols-4 gap-y-10 gap-x-6 m-auto mb-12">
          {(searchQuery ? searchResults : products).map(product => (
            <ProductPreview key={product.id} product={product} />
          ))}
        </div>
        <div>
          <Title className="text-3xl">Вам може бути цікаво :</Title>
          {/* suggested products based on the search params and categoryId */}
        </div>
      </Container>
    </section>
  );
};
