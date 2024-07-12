import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Swiper2 = () => {
  return (
    <div>
      <div className="mt-5 mb-10">
        <div className="text-center py-5">
            <p className="font-semibold	text-5xl text-navy">Our Medical Specialist</p>
        </div>
        <Swiper
          slidesPerView={'auto'}
          // spaceBetween={-350}
          loop={true}
          pagination={{
            el: ".pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            // 0: {
            //   slidesPerView: 1,
            // },
            600: {
              slidesPerView: 1,
              spaceBetween: 1
            },
            768: {
              // spaceBetween: 0,
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween:-350,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="flex flex-col justify-center items-center">
            <img
              src="/Doctors/doctor2.png"
              alt="Project"
              className="slide-image"
            />
            <div className="-mt-7">
              <h2 className="text-2xl font-normal text-center text-navy">
                Dr. Ahmad Khan
              </h2>
              <p className="text-base font-medium text-center text-sky">Neurologist</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center">
            <img
              src="/Doctors/doctor3.png"
              alt="Project"
              className="slide-image"
            />
            <div className="-mt-7">
              <h2 className="text-2xl font-normal text-center text-navy">
                Dr. Heena Sachdeva
              </h2>
              <p className="text-base font-medium text-center text-sky">Orthopadics</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center">
            <img
              src="/Doctors/doctor2.png"
              alt="Project"
              className="slide-image"
            />
            <div className="-mt-7">
              <h2 className="text-2xl font-normal text-center text-navy">
                Dr. Ahmad Khan
              </h2>
              <p className="text-base font-medium text-center text-sky">Neurologist</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center">
            <img
              src="/Doctors/doctor4.png"
              alt="Project"
              className="slide-image"
            />
            <div className="-mt-7">
              <h2 className="text-2xl font-normal text-center text-navy">
                Dr. Ankur Sharma
              </h2>
              <p className="text-base font-medium text-center text-sky">Medicine</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center">
            <img
              src="/Doctors/doctor3.png"
              alt="Project"
              className="slide-image"
            />
            <div className="-mt-7">
              <h2 className="text-2xl font-normal text-center text-navy">
                Dr. Heena Sachdeva
              </h2>
              <p className="text-base font-medium text-center text-sky">Orthopadics</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center">
            <img
              src="/Doctors/doctor3.png"
              alt="Project"
              className="slide-image"
            />
            <div className="-mt-7">
              <h2 className="text-2xl font-normal text-center text-navy">
                Dr. Heena Sachdeva
              </h2>
              <p className="text-base font-medium text-center text-sky">Orthopadics</p>
            </div>
          </SwiperSlide>
          <div className="pagination flex gap-4 items-center justify-center mt-10 cursor-pointer"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Swiper2;
