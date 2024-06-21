import { useState } from "react";
import "./Navbar.css";
import { IoShieldCheckmark } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-header">
        <p>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </p>
      </div>
      <nav className="navbar-starts">
        <div>
          <div className="navbar-logo">
            <p>
              <IoShieldCheckmark />
            </p>
            <p>Medify</p>
          </div>
        </div>

        <div className="menu-icon" onClick={toggleNav}>
          ☰
        </div>
        <ul className={`navbar-list ${isOpen && "open"}`}>
          <li>Find Doctors</li>
          <li>Hospitals</li>
          <li>Medicines</li>
          <li>Surgeries</li>
          <li>Software for Provider</li>
          <li>Facilities</li>
          <li>
            <button>My Bookings</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
