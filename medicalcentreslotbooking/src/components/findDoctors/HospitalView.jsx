import { FaThumbsUp } from "react-icons/fa";
import PropTypes from "prop-types";

const HospitalView = ({
  hospitalItem,
  bookingItem,
  showCalendar,
  toggleCalendar,
  showAvailableCalendar,
  showBookingsView,
  dateItem,
  timeItem,
}) => {

  let item= hospitalItem || bookingItem

  // console.log('mybookings:', item)
  // console.log('item.City',item.City)
  // console.log('dateItem:', dateItem)
  // console.log('showBookingsView',showBookingsView)

  return (
    <div>
      <div className=" py-5 rounded-lg shadow-2xl flex px-4 md:py-8 gap-2 ">
        <div className="md:w-1/5 md:flex md:justify-center lg:flex lg:justify-center">
          <div className="rounded-full bg-sky-light p-4 md:flex md:justify-center md:items-center w-24	h-24 hidden md:block">
            <img src="./hospital.png" alt="hospital" className="w-12	h-16" />
          </div>
        </div>
        <div className="md:flex md:flex-row md:w-4/5 md:justify-evenly">
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

          {showAvailableCalendar !== undefined ? (
            <div className="flex flex-col gap-4 pt-3 md:justify-end">
              <p className="text-green text-sm	font-medium	">Available Today</p>
              <button
                className="text-white bg-sky rounded-lg w-52	 h-10 text-base font-medium"
                onClick={() => toggleCalendar(item["Hospital Name"])}
              >
                {showCalendar === item["Hospital Name"]
                  ? "Close"
                  : "Book FREE Center Visit"}
              </button>
            </div>
          ) : null}

          {showBookingsView !== undefined ? (
            <div className="flex flex-col gap-4 pt-3 md:justify-start md:flex-row">
              <div
                className={`border cursor-pointer border-sky rounded bg-gray-100 text-sky w-20	h-8	flex items-center justify-center`}
              >
                {timeItem}
                {/* 10:30AM */}
              </div>
              <div
                className={`border cursor-pointer border-green rounded bg-gray-100 text-green w-28	h-8	flex items-center justify-center`}
              >
                {dateItem}
                {/* 20 April 2024 */}
              </div>
            </div>
          ) : null} 
        </div>
      </div>
    </div>
  );
};

HospitalView.propTypes = {
  item: PropTypes.object.isRequired,
  showCalendar: PropTypes.string,
  toggleCalendar: PropTypes.func.isRequired,
  showAvailableCalendar: PropTypes.bool.isRequired,
  showBookingsView: PropTypes.bool.isRequired,
  hospitalItem: PropTypes.array,
  bookingItem: PropTypes.array,
  dateItem: PropTypes.array,
  timeItem: PropTypes.array,
};

export default HospitalView;
