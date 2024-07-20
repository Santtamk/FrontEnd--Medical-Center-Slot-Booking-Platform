
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";
import { useState } from "react";
import Calendar from "./Calendar";
import HospitalView from "./HospitalView";
import { TbRuler2 } from "react-icons/tb";

const Result = ({ resultData, city, state }) => {
  const [showCalendar, setShowCalendar] = useState(null);
  const [showAvailableCalendar, setShowAvailableCalendar] = useState(true);

  const toggleCalendar = (name) => {
      setShowCalendar(prevState => (prevState === name ? null : name));
  };
  return (
    <div className="py-16 bg-white-off px-4 md:px-8 lg:px-32">
      <div className="text-black font-medium text-2xl">
        {resultData.length} medical{" "}
        {resultData.length > 1 ? "center's" : "center"} available in {city},
        {state}
      </div>
      {resultData.length === 0 ? null : (
        <div>
            <p className="flex text-start gap-2 text-light-grey pb-4 md:px-0">
              <span className="flex justify-center items-center">
                <IoIosCheckmarkCircleOutline />
              </span>
              Book appointments with minimum wait-time & verified doctor details
            </p>

          {/*hospital information */}
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex flex-col gap-5 lg:w-2/3">
              {resultData.map((item) => {
                return (
                  <div key={item["Provider ID"]} className="bg-white">
                    <HospitalView item={item} toggleCalendar={toggleCalendar} showCalendar={showCalendar} 
                    // showAvailableCalendar={showAvailableCalendar}
                    />
                  <hr className="text-light-grey2 mx-4"/>
                  <div>
                    {showCalendar === item["Hospital Name"] && 
                      <Calendar hospital={item["Hospital Name"]}/>
                    }
                  </div>
                  </div>      
                );
              })}
            </div>
            <div 
            className="flex justify-center items-center py-4 lg:w-1/3 lg:justify-normal lg:items-start lg:py-0">
              <img src="./oralHealth.png" alt="oralHealth" className="shadow-2xl rounded-lg"/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Result.propTypes = {
  resultData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default Result;
