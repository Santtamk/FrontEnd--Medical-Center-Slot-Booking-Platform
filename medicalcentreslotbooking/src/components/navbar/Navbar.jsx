import { useState } from "react";
import "./Navbar.css";
import { IoShieldCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <div className="navbar-logo">
            <p>
              <IoShieldCheckmark />
            </p>
            <p>Medify</p>
          </div>
        </Link>
        </div>

        <div className="menu-icon" onClick={toggleNav}>
          ☰
        </div>
        <ul className={`navbar-list ${isOpen && "open"} z-40`}>
          <li><Link to='/find-doctors'>Find Doctors</Link></li>
          <li>Hospitals</li>
          <li>Medicines</li>
          <li>Surgeries</li>
          <li>Software for Provider</li>
          <li>Facilities</li>
          <li>
            <button> <Link to="/my-bookings">My Bookings</Link></button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
