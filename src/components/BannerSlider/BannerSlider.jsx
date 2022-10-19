import { useRef } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { banner1, banner2, banner3 } from '../../assets/images';

const BannerSlider = () => {
    const refPrevButton = useRef();
    const refNextButton = useRef();

    return (
        <>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={500}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                navigation={{
                    hideOnClick: true,
                    prevEl: refPrevButton.current || null,
                    nextEl: refNextButton.current || null,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    bulletActiveClass: 'bullet-active',
                    bulletClass: 'bullet',
                }}
                onBeforeInit={swiper => {
                    swiper.params.navigation.prevEl = refPrevButton.current;
                    swiper.params.navigation.nextEl = refNextButton.current;
                }}
            >
                <SwiperSlide className="w-full aspect-video">
                    <img src={banner1} alt="Banner 1" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide className="w-full aspect-video">
                    <img src={banner2} alt="Banner 2" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide className="w-full aspect-video">
                    <img src={banner3} alt="Banner 3" className="w-full h-full object-cover" />
                </SwiperSlide>
                <div
                    slot="container-start"
                    className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 flex justify-between p-2"
                >
                    <button
                        ref={refPrevButton}
                        className="text-lg flex items-center justify-center p-2 rounded-full bg-primary opacity-20 text-white active:opacity-60"
                    >
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button
                        ref={refNextButton}
                        className="text-lg flex items-center justify-center p-2 rounded-full bg-primary opacity-20 text-white active:opacity-60"
                    >
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </Swiper>
        </>
    );
};

export default BannerSlider;
