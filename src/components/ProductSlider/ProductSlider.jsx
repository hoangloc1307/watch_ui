import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProductCard from '../ProductCard';

const ProductSlider = () => (
    <div className="my-10">
        <h2>Selling Products</h2>
        <Swiper modules={[FreeMode]} spaceBetween={8} slidesPerView={3} freeMode={true}>
            <SwiperSlide>
                <div className="p-5">
                    <ProductCard />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-5">
                    <ProductCard />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-5">
                    <ProductCard />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-5">
                    <ProductCard />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
);

export default ProductSlider;
