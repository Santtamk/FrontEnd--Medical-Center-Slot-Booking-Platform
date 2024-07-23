import { useEffect, useState } from "react";
import HospitalView from "../findDoctors/HospitalView";
import { IoSearch } from "react-icons/io5";

const MyBooking = () => {
  const [items, setItems] = useState([]);
  const [showBookingsView, setShowBookingsView] = useState(true);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("bookingDetails")) || [];
    setItems(items);
  }, []);

  // console.log("myBookings", items);

  return (
    <div className="px-4 py-5 md:px-10 md:py-10 lg:px-28 lg:py-16">
      <div className="flex flex-col md:flex-row md:justify-between md: pb-5">
        <div className="text-4xl	font-bold	">MY Booking</div>
        <div>
          <div className="py-5 flex m-5 gap-2 md:py-0 md:m-0 ">
            <input
              type="text"
              placeholder="Search By Hospital"
              className="bg-white-off rounded-xl"
            />
            <button className="text-white bg-sky rounded-lg w-32 h-12 text-base font-medium flex justify-center items-center gap-2">
              <span>
                <IoSearch />
              </span>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-5">
          {items.length === 0 ? (
            <>
              <h1>
                No bookings found. Please book a slot to view your previous
                bookings.
              </h1>
            </>
          ) : (
            items.map((item, index) => (
              <HospitalView
                key={index}
                bookingItem={item.hospital}
                timeItem={item.time}
                dateItem={item.date}
                showBookingsView={showBookingsView}
              />
            ))
          )}
        </div>
        <div className="flex justify-center items-center py-4 lg:w-1/3 lg:justify-normal lg:items-start lg:py-0">
          <img
            src="./oralHealth.png"
            alt="oralHealth"
            className="shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
