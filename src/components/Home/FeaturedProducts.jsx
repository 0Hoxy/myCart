import useData from '../../Hook/useData';
import ProductCard from '../Products/ProductCard';
import './FeaturedProducts.css';
import ProductCardSkeleton from '../Products/ProductCardSkeleton';

const FeaturedProducts = () => {
  const { data, error, isLoading } = useData('/products', {}, []);

  const skeletons = [1, 2, 3, 4];
  const filteredProducts = data?.products?.filter((product) => product.reviews.rate >= 4.5) || [];

  return (
    <section className='featured_products'>
      <h2>주요제품</h2>

      <div className='align_center featured_products_list'>
        {error && <em className='form_error'>{error}</em>}
        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
        {filteredProducts.slice(0, 4).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
