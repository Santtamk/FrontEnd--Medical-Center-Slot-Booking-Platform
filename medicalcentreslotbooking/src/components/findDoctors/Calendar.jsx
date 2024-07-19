// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Calendar = () => {
  let [weekDates, setWeekDates] = useState([]);

  useEffect(() => {
    const today = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let dates = [];
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const dayName = daysOfWeek[currentDate.getDay()];
      const day = currentDate.getDate();
      const monthName = monthNames[currentDate.getMonth()];
      dates.push(`${dayName}, ${day} ${monthName}`);
    }
    setWeekDates(dates);
  }, []);
  // console.log("weekDates", weekDates)

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {weekDates.length > 0 ? (
          weekDates.map((day, index) => (
            <SwiperSlide key={index} className="bg-white flex items-center justify-center py-4 " >
              <div className="cursor-pointer">
                <div className="font-normal	 text-base	">
                {day}
                </div>
                <div className="font-normal	text-xs	text-green">
                  15 Slots Available
                </div>
              </div>
              
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>No dates available</SwiperSlide>
        )}
      </Swiper>
    </>
  );
};

export default Calendar;
