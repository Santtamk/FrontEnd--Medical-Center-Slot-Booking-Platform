
import { FaThumbsUp  } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


import PropTypes from 'prop-types';

const Result = ({ resultData, stateInResult, cityInResult }) => {
  return (
    <div className="py-16 bg-white-off px-4">
        <div className="text-black font-medium text-2xl">
            {resultData.length} medical {resultData.length>1 ? "center's" : "center" } available in {cityInResult},{stateInResult}
        </div>
        { resultData.length === 0 ? null :
        <div>
            <p className="flex justify-center items-center gap-4 text-light-grey">
            <span>
              <IoIosCheckmarkCircleOutline />
              </span>
                Book appointments with minimum wait-time & verified doctor details
            </p>

            <div className="flex flex-col gap-5">
                {resultData.map((item) => {
                    return (
                    <div key={item["Provider ID"]} className="bg-white py-5 rounded-lg shadow-2xl flex px-2 gap-4">
                        <div className="rounded-full bg-sky-light p-4 flex justify-center items-center w-24	h-24 ">
                            <img src="./hospital.png" alt="hospital" className="w-12	h-16"/>
                        </div>
                        <div>
                          <div>
                            <h3 className="font-semibold	text-xl	text-sky">{item["Hospital Name"]}</h3>
                            <p className="text-sm	font-bold	">{item.City},{item.State}</p>
                            <p className="text-light-grey font-normal	text-sm	">{item["Hospital Type"]}</p>
                            <p><span className="font-bold	text-sm	text-green">FREE</span> <span className="line-through text-light-grey font-normal	text-sm	">₹500 Consultation fee at clinic</span> </p>
                            <div className=" bg-green text-white flex items-center text-sm	font-bold	h-3.5	w-8	">
                              <FaThumbsUp className="flex items-center justify-center"/>5
                            </div>

                            <div>
                                <p>Available Today</p>
                                <button>Book FREE Center Visit</button>
                            </div>
                          </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
        }
    </div>
  )
}

Result.propTypes = {
    resultData: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    stateInResult: PropTypes.string.isRequired,
    cityInResult: PropTypes.string.isRequired,
  };

export default Result