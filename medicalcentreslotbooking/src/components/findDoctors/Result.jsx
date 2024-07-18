import { FaThumbsUp } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import PropTypes from "prop-types";

const Result = ({ resultData, city, state }) => {
  return (
    <div className="py-16 bg-white-off px-4">
      <div className="text-black font-medium text-2xl px-2">
        {resultData.length} medical{" "}
        {resultData.length > 1 ? "center's" : "center"} available in{" "}
        {city},{state}
      </div>
      {resultData.length === 0 ? null : (
        <div>
          <p className="flex justify-center items-center gap-2 text-light-grey pb-3 px-2">
            <span>
              <IoIosCheckmarkCircleOutline />
            </span>
            Book appointments with minimum wait-time & verified doctor details
          </p>

          <div className="flex flex-col gap-5">
            {resultData.map((item) => {
              return (
                <div
                  key={item["Provider ID"]}
                  className="bg-white py-5 rounded-lg shadow-2xl flex px-4 md:py-8 gap-2 md:px-8"
                >
                  <div className="md:w-1/5">
                    <div className="rounded-full bg-sky-light p-4 md:flex md:justify-center md:items-center w-24	h-24 hidden md:block">
                      <img
                        src="./hospital.png"
                        alt="hospital"
                        className="w-12	h-16"
                      />
                    </div>
                  </div>
                  <div className="md:flex md:flex-row md:w-2/5">
                    <div className="">
                      <h3 className="font-semibold	text-xl	text-sky">
                        {item["Hospital Name"]}
                      </h3>
                      <p className="text-sm	font-bold	">
                        {item.City},{item.State}
                      </p>
                      <p className="text-light-grey font-normal	text-sm	">
                        {item["Hospital Type"]}
                      </p>
                      <p>
                        <span className="font-bold	text-sm	text-green">FREE</span>{" "}
                        <span className="line-through text-light-grey font-normal	text-sm	">
                          ₹500 Consultation fee at clinic
                        </span>{" "}
                      </p>
                      <div className=" bg-green text-white flex items-center text-sm	font-bold	h-3.5	w-10 px-2 py-3 rounded-lg gap-1">
                        <FaThumbsUp />
                        <div className="pt-1">5</div>
                      </div>
                    </div>

                      <div className="flex flex-col gap-4 pt-3 md:w-2/5">
                        <p className="text-green text-sm	font-medium	">
                          Available Today
                        </p>
                        <button className="text-white bg-sky rounded-lg w-52	 h-10 text-base font-medium">
                          Book FREE Center Visit
                        </button>
                      </div>
                  </div>
                </div>
              );
            })}
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
