import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import { product1_0, product2_0, product3_0, product4_0, product5_0 } from '~/assets/images';
import { useRef } from 'react';
import Button from '~/components/Button';

export default function ProductSlider() {
    const btnPrevRef = useRef(null);
    const btnNextRef = useRef(null);
    return (
        <div className="my-container-full relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(clamp(200px,80%,400px)+100px)] max-w-full px-1 flex justify-between z-10 pointer-events-none opacity-50">
                <Button icon="navigate_before" outline ref={btnPrevRef} className="rounded-full pointer-events-auto" />
                <Button icon="navigate_next" outline ref={btnNextRef} className="rounded-full pointer-events-auto" />
            </div>
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={700}
                pagination={{
                    bulletClass: 'bullet',
                    bulletActiveClass: 'bullet-active',
                    horizontalClass: 'bullets',
                }}
                navigation={{
                    prevEl: btnPrevRef.current,
                    nextEl: btnNextRef.current,
                }}
                onBeforeInit={swiper => {
                    swiper.params.navigation.prevEl = btnPrevRef.current;
                    swiper.params.navigation.nextEl = btnNextRef.current;
                }}
                className="w-[clamp(200px,80%,300px)]"
            >
                <SwiperSlide>
                    <img src={product1_0} alt="product 1" className="w-full h-auto aspect-square" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={product2_0} alt="product 1" className="w-full h-auto aspect-square" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={product3_0} alt="product 1" className="w-full h-auto aspect-square" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={product4_0} alt="product 1" className="w-full h-auto aspect-square" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={product5_0} alt="product 1" className="w-full h-auto aspect-square" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
