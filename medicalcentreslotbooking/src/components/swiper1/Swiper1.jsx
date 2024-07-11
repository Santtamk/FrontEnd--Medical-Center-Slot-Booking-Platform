
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Swiper1 = () => {
  return (
    <div className='mt-20 mb-20 flex justify-center items-center'>
      <Swiper
        // spaceBetween={1}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            
          },
          1024: {
            slidesPerView: 3,
            
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide className='flex justify-center items-center'>
          <img
            src='/swiper0-1.png'
            alt="Project"
            className="slide-image"
          />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <img
            src='/swiper0-2.png'
            alt="Project"
            className="slide-image"
          />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <img
            src='/swiper0-3.png'
            alt="Project"
            className="slide-image"
          />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <img
            src='/swiper0-2.png'
            alt="Project"
            className="slide-image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Swiper1;
