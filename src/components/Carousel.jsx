import React, { useEffect, useState } from 'react';
import banner1 from '../images/banner AirPods Pro 2 T6_PC.jpg';
import banner2 from '../images/banner iPad Air 5 T6_PC.jpg';
import banner3 from '../images/banner iPad_PC.png';
import banner4 from '../images/banner iPhone 15 Pro_PC.png';
import banner5 from '../images/banner mac_PC.png';
import banner6 from '../images/banner MacBook Air M1 T6_PC.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const sliders = [
    { mobile: 'banner AirPods Pro 2 T6_PC.jpg', desktop: 'banner AirPods Pro 2 T6_PC.jpg' },
    { mobile: 'banner iPad Air 5 T6_PC.jpg', desktop: 'banner iPad Air 5 T6_PC.jpg' },
    { mobile: 'banner iPad_PC.png', desktop: 'banner iPad_PC.png' },
    { mobile: 'banner iPhone 15 Pro_PC.png', desktop: 'banner iPhone 15 Pro_PC.png' },
    { mobile: 'banner mac_PC.png', desktop: 'banner mac_PC.png' },
    { mobile: 'banner MacBook Air M1 T6_PC.jpg', desktop: 'banner MacBook Air M1 T6_PC.jpg' }
];

function Carousel() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
            >
                {isMobile
                    ? sliders.map((item, index) => (
                          <SwiperSlide key={index}>
                              <img className='w-100' src={`${process.env.REACT_APP_IMG_URL}slides/${item.mobile}`} alt="" />
                          </SwiperSlide>
                      ))
                    : sliders.map((item, index) => (
                          <SwiperSlide key={index}>
                              <img className='w-100' src={`${process.env.REACT_APP_IMG_URL}slides/${item.desktop || item.mobile}`} alt="" />
                          </SwiperSlide>
                      ))}
            </Swiper>
        </>
    );
}

export default Carousel;
