import useData from '../../Hook/useData';
import ProductCard from '../Products/ProductCard';
import './FeaturedProducts.css';
import ProductCardSkeleton from '../Products/ProductCardSkeleton';

const FeaturedProducts = () => {
  const { data, error, isLoading } = useData('/products', {}, []);

  const skeletons = [1, 2, 3, 4];
  return (
    <section className='featured_products'>
      <h2>주요제품</h2>

      <div className='align_center featured_products_list'>
        {error && <em className='form_error'>{error}</em>}
        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
        {data &&
          data.products &&
          data.products
            .slice(0, 4)
            .map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                image={product.images[0]}
                price={product.price}
                title={product.title}
                rating={product.rating}
                ratingCounts={product.reviews.counts}
                stock={product.stock}
              />
            ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
