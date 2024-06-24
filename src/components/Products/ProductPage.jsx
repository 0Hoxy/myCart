import ProductsList from './ProductsList';
import ProductsSidebar from './ProductsSidebar';

const ProductsPage = () => {
  return (
    <section className='products_page'>
      <ProductsSidebar />
      <ProductsList />
    </section>
  );
};

export default ProductsPage;
