import { useEffect, useState } from "react";
import HospitalView from "../findDoctors/HospitalView";

const MyBooking = () => {
  const [items, setItems] = useState([]);
  const [showBookingsView, setShowBookingsView] = useState(true);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("bookingDetails")) || [];
    setItems(items);
  }, []);

  // console.log("myBookings", items);

  return (
    <div>
      <div>
        <div>MY Booking</div>
        <div>
          <div>
            <input type="text" placeholder="Search By Hospital" />
            <button>Search</button>
          </div>
        </div>
      </div>
      {items.length === 0 ? (
        <>
          <h1>
            No bookings found. Please book a slot to view your previous
            bookings.
          </h1>
        </>
      ) : (
        items.map((item, index) => (
          <HospitalView key={index} bookingItem={item.hospital} timeItem={item.time} dateItem={item.date} showBookingsView={showBookingsView}/>
        ))
      )}
    </div>
  );
};

export default MyBooking;
