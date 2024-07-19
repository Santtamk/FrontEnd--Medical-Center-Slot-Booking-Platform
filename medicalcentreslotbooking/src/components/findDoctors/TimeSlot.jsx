
import PropTypes from "prop-types";

const TimeSlot = ({ period, times }) => {
    
    return (
      <div className="flex justify-left py-2 px-4 lg:px-24">
        <div className="w-1/3 text-sm	font-normal	 md:w-1/5">{period}</div>
        <div className="flex flex-wrap w-2/5 md:w-4/5 gap-3 lg:gap-5">
          {times.map((time) => (
            <div key={time} className="border border-sky rounded bg-gray-100 text-sky w-20	h-8	flex items-center justify-center">
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
  };

export default TimeSlot;