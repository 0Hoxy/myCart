import HeroSection from './HeroSection';
import FeaturedProducts from './FeaturedProducts';
import config from '../../config.json';

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title='아이폰 14 프로 그 이상'
        subtitle='Experience the power of the latest iPhone 14 with our most Pro camera ever.'
        link='/product/667b6e740e8be951a1625416'
        image={`${config.backendURL}/products/iphone-14-pro.webp`}
      />
      <FeaturedProducts />
      <HeroSection
        title='궁극의 장비를 세팅하세요'
        subtitle='You can add Studio Display and colour-matched Magic accessories to your bag after configure your Mac mini.'
        link='/product/667b6e740e8be951a162541e'
        image={`${config.backendURL}/products/mac-system-cut.jfif`}
      />
    </div>
  );
};

export default HomePage;
