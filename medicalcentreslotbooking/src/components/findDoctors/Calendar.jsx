// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import TimeSlot from "./TimeSlot";

const Calendar = () => {
  let [weekDates, setWeekDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(false);

  let Morning = ['11:00 AM']
  let Afternoon = ['12:00 PM', '12:30 PM', '01:30 PM', '02:00 PM', '02:30 PM']
  let Evening = ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM']

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

  const showSlots = () => {
    setSelectedDate(!selectedDate)
  }



  

  

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {weekDates.length > 0 ? (
          weekDates.map((day, index) => (
       
            <SwiperSlide key={index} className="bg-white flex items-center justify-center py-4 " >
              <div className="cursor-pointer" onClick={showSlots}>
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
      {selectedDate && 
            <div className="flex flex-col px-4 gap-4 justify-center py-5 shadow-2xl">
              <TimeSlot period="Morning" times={Morning} />
             <hr className="text-light-grey2 mx-4"/>
              <TimeSlot period="Afternoon" times={Afternoon} />
             <hr className="text-light-grey2 mx-4"/>
              <TimeSlot period="Evening" times={Evening} />
            </div>}
    </>
  );
};

export default Calendar;
