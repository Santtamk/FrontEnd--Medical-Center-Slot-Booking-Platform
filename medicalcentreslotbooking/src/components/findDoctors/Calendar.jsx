// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import TimeSlot from "./TimeSlot";

const Calendar = ({ hospital, handleBooking }) => {
  let [weekDates, setWeekDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(false);
  const [timeSlots, setTimeSlots] = useState({});
  const [selectedTimes, setSelectedTimes] = useState({});

  const defaultTimeSlots = {
    Morning: ["11:00 AM"],
    Afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  useEffect(() => {
    const today = new Date();
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
    let slots = {};
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      const year = currentDate.getFullYear()
      const day = currentDate.getDate();
      const monthName = monthNames[currentDate.getMonth()];
      const dateString = `${day} ${monthName} ${year}`;
      dates.push(dateString);

      slots[dateString] = { ...defaultTimeSlots };
    }
    setWeekDates(dates);
    setTimeSlots(slots);
  }, []);

  const showSlots = (day) => {
    setSelectedDate((prevState) => (prevState === day ? null : day));
  };
  console.log(selectedDate);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    setSelectedDate(weekDates[activeIndex]);
  };

  const saveSelectedTime = (date, period, time) => {
    setSelectedTimes((prevSelectedTimes) => ({
      ...prevSelectedTimes,
      [date]: { ...prevSelectedTimes[date], [period]: time },
    }));
    if(handleBooking) {
      handleBooking(hospital, date, time);
      console.log(`Booking made on ${date} at ${time}`);
    }else{
      console.log("Booking handle not provided");
    }
  };

  // console.log(`SelectedTimes:`, selectedTimes)

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
        onSlideChange={handleSlideChange}
      >
        {weekDates.length > 0 ? (
          weekDates.map((day, index) => (
            <SwiperSlide
              key={index}
              className={`flex items-center justify-center py-4 flex-col gap-5 ${
                selectedDate === day ? "bg-sky !text-white-off " : "bg-white"
              }`}
            >
              <div className={`cursor-pointer `} onClick={() => showSlots(day)}>
                <div className="font-normal	 text-base	">{day}</div>
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

      {selectedDate && (
        <div className="flex flex-col px-4 gap-4 justify-center py-5 shadow-2xl w-full">
          <TimeSlot
            period="Morning"
            times={timeSlots[selectedDate]?.Morning || []}
            selectedDate={selectedDate}
            saveSelectedTime={saveSelectedTime}
            selectedTime={selectedTimes[selectedDate]?.Morning}
          />
          <hr className="text-light-grey2 mx-4" />
          <TimeSlot
            period="Afternoon"
            times={timeSlots[selectedDate]?.Afternoon || []}
            selectedDate={selectedDate}
            saveSelectedTime={saveSelectedTime}
            selectedTime={selectedTimes[selectedDate]?.Afternoon}
          />
          <hr className="text-light-grey2 mx-4" />
          <TimeSlot
            period="Evening"
            times={timeSlots[selectedDate]?.Evening || []}
            selectedDate={selectedDate}
            saveSelectedTime={saveSelectedTime}
            selectedTime={selectedTimes[selectedDate]?.Evening}
          />
        </div>
      )}
    </>
  );
};


Calendar.propTypes = {
  hospital: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleBooking: PropTypes.func.isRequired,
};
export default Calendar;
