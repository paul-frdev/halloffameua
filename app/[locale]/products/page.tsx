import { ProductList } from '@/components/products/ProductsList';
import productsList from '../../../scripts/products.json'
import { MainSlider } from '@/components/MainSlider';
import { shopSlides } from '@/constants/sliders';


export default function ProductsPage() {
  return (
    <>
      <MainSlider slides={shopSlides} />
      <ProductList products={productsList} />
    </>
  );
}