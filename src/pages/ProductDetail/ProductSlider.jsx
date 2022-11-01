import { useRef, useState } from 'react';
import { Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { product1_0, product2_0, product3_0, product4_0, product5_0 } from '~/assets/images';
import Button from '~/components/Button';

export default function ProductSlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const btnPrevRef = useRef(null);
    const btnNextRef = useRef(null);
    return (
        <div className="relative">
            {/* Navigation */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(clamp(200px,80%,400px)+100px)] max-w-full px-1 flex justify-between z-[2] pointer-events-none opacity-50">
                <Button icon="navigate_before" outline ref={btnPrevRef} className="rounded-full pointer-events-auto" />
                <Button icon="navigate_next" outline ref={btnNextRef} className="rounded-full pointer-events-auto" />
            </div>

            {/* Slider */}
            <Swiper
                modules={[Pagination, Navigation, Thumbs]}
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
                thumbs={{
                    swiper: thumbsSwiper,
                    slideThumbActiveClass: 'swiper-slide-thumb-active',
                    thumbsContainerClass: 'swiper-thumbs',
                }}
                onBeforeInit={swiper => {
                    swiper.params.navigation.prevEl = btnPrevRef.current;
                    swiper.params.navigation.nextEl = btnNextRef.current;
                }}
                className="w-[200px] md:w-[300px]"
            >
                {[product1_0, product2_0, product3_0, product4_0, product5_0].map(item => (
                    <SwiperSlide key={item}>
                        <img src={item} alt="product" className="w-full h-auto aspect-square" />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbs */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                watchSlidesProgress={true}
                modules={[Thumbs]}
            >
                {[product1_0, product2_0, product3_0, product4_0, product5_0].map(item => (
                    <SwiperSlide key={item} className="border cursor-pointer">
                        <img src={item} alt="Product" className="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
