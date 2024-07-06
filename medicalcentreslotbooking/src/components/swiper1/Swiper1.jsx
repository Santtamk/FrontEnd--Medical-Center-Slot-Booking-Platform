import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";



const Swiper1 = () => {
    
  return (
    <div>
                <Swiper
                   spaceBetween={0}
                   slidesPerView={3}
                   onSlideChange={() => console.log('slide change')}
                   onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                        <img
                        src='./swiper0-1.png'
                        alt="Project"
                        className="slide-image"
                        />
                  </SwiperSlide>
                  <SwiperSlide>
                        <img
                        src='./swiper0-2.png'
                        alt="Project"
                        className="slide-image"
                        />
                  </SwiperSlide>
                  <SwiperSlide>
                        <img
                        src='./swiper0-3.png'
                        alt="Project"
                        className="slide-image"
                        />
                  </SwiperSlide>
                </Swiper>
    </div>
  )
}

export default Swiper1