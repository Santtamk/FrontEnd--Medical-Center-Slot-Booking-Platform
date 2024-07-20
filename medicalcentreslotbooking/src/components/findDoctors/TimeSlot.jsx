import PropTypes from "prop-types";

const TimeSlot = ({
  period,
  times,
  selectedDate,
  selectedTime,
  saveSelectedTime,
}) => {
  const handleClick = (time) => {
    saveSelectedTime(selectedDate, period, time);
  };

  return (
    <div className="flex justify-left py-2 px-4 lg:px-24">
      <div className="w-1/3 text-sm	font-normal	 md:w-1/5">{period}</div>
      <div className="flex flex-wrap w-2/5 md:w-4/5 gap-3 lg:gap-5 lg:flex-row">
        {times.map((time) => (
          <div
            key={time}
            className={`border cursor-pointer border-sky rounded bg-gray-100 text-sky w-20	h-8	flex items-center justify-center ${
              selectedTime === time ? "bg-sky text-white" : ""
            }`}
            onClick={() => handleClick(time)}
          >
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};

TimeSlot.propTypes = {
  period: PropTypes.string.isRequired,
  times: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedDate: PropTypes.string.isRequired,
  selectedTime: PropTypes.string,
  saveSelectedTime: PropTypes.func.isRequired,
};

export default TimeSlot;
