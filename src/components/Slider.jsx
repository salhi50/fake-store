import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { memo } from 'react';

const Slider = memo (function ({ images }) {
    return (
        <Swiper
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
        {
            images.map((img, indx) => (
                <SwiperSlide key={indx}>{img}</SwiperSlide>
            ))
        }
        </Swiper>
    )
})

export default Slider;