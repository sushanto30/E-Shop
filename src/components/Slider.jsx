import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

 

 

const Slider = () => {


    const pagination = {
        clickable: true,
        renderBullet: (index, className)=> {
            return '<span class="' +  className + '">' + (index + 1) + '</span>';
        },
    };





    return (
        <div className=' '>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img className='h-[500px] w-full object-cover relative' src="ritupon-baishya-ZctszMbK0xU-unsplash.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[500px] w-full object-cover relative' src="samer-khodeir-V2owNGx837Q-unsplash.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[500px] w-full object-cover relative' src="simon-daoudi-2wFoa040m8g-unsplash.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;