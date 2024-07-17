import { IoSearch } from "react-icons/io5";
import { LiaUserNurseSolid } from "react-icons/lia";
import { PiHospital } from "react-icons/pi";
import { RiHospitalLine } from "react-icons/ri";
import { BiSolidCapsule } from "react-icons/bi";
import { PiAmbulance } from "react-icons/pi";
import { useState } from "react";
import PropTypes from 'prop-types';


const SearchMain = ({ fetchData, allStates, searchStates, selectedState }) => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');


  const changeState = (e) => {
    setState(e.target.value);
    searchStates(e.target.value);
  }

  const getHospital = (e) => {
    e.preventDefault();
    fetchData(city, state);
  }


  // console.log('state', state)
  // console.log('selectedState', selectedState)
  // console.log('all states', allStates)
  // console.log('changeState', changeState())
  console.log("city and state", city, state)

  
  return (
    <div className="bg-white  flex justify-center items-center flex-col -mt-20 relative pt-6 mx-4 md:mx-7 rounded-lg shadow-2xl lg:mx-28 lg:-mt-40">
      <form className="flex justify-center items-center flex-col gap-7 lg:flex-row" onSubmit={getHospital}>
        <select
          name="state" id="state"
          className="bg-searchColor h-12 w-72 text-light-grey rounded-lg focus:outline-none focus:border-sky focus:ring-sky focus:ring-1"
          onChange={changeState}
          required
        >
          <option value="" className="text-light-grey" disabled selected>  &#x1F50D;&#xFE0E;   State</option>
          {allStates.map((item) => {
            return (   
              <option key={item} value={item} className="text-light-grey">{item}</option>
            )
          })}
        </select>

        <select
          name="state" id="state"
          className="bg-searchColor h-12 w-72 text-light-grey rounded-lg focus:outline-none focus:border-sky focus:ring-sky focus:ring-1"
          onChange={e => setCity(e.target.value)} required
        >
          <option value="" className="text-light-grey" disabled selected>  &#x1F50D;&#xFE0E;   City</option>
          {selectedState.map((item) => {
            return (   
              <option key={item} value={item} className="text-light-grey">{item}</option>
            )
          })}
        </select>
        <button className="text-white bg-sky rounded-lg w-32 h-12 text-base font-medium flex justify-center items-center gap-2">
          <span>
            <IoSearch />
          </span>
          <span>Search</span>
        </button>
      </form>
      <div className="flex flex-col text-center py-10">
        <p className="font-medium	text-xl py-4">You may be looking for</p>
        <div>
          <div className="flex flex-col justify-center items-center gap-4 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap">
            <div className="flex flex-col  w-52 *:justify-center items-center bg-white-off border-2 border-transparent rounded-md py-4 hover:border-2 hover:border-sky hover:bg-sky-400 text-light-grey2 hover:text-sky 	">
              <LiaUserNurseSolid className=" h-12	w-11 text-sky" />
              <p className="text-lg font-normal">Doctors</p>
            </div>
            <div className="flex flex-col  justify-center items-center bg-white-off rounded-md py-4 hover:border-2 hover:border-sky hover:bg-sky-400 text-light-grey2 hover:text-sky w-52	">
              <RiHospitalLine className=" h-12	w-11 text-sky" />
              <p className="text-lg	font-normal">Labs</p>
            </div>
            <div className="flex flex-col  justify-center items-center bg-white-off rounded-md py-4 hover:border-2 hover:border-sky hover:bg-sky-400 text-light-grey2 hover:text-sky w-52	">
              <PiHospital className=" h-12	w-11 text-sky" />
              <p className="text-lg	font-normal">Hospitals</p>
            </div>
            <div className="flex flex-col  justify-center items-center bg-white-off rounded-md py-4 hover:border-2 hover:border-sky hover:bg-sky-400 text-light-grey2 hover:text-sky w-52	">
              <BiSolidCapsule className=" h-12	w-11 text-sky" />
              <p className="text-lg	font-normal">Medical Store</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-white-off rounded-md py-4 hover:border-2 hover:border-sky hover:bg-sky-400 text-light-grey2 hover:text-sky w-52	">
              <PiAmbulance className=" h-12	w-11 text-sky" />
              <p className="text-lg	font-normal">Ambulance</p>
            </div>    
          </div>
        </div>
      </div>
    </div>
  );
};

SearchMain.propTypes = {
  allStates: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedState: PropTypes.string.isRequired,
  fetchData: PropTypes.func.isRequired,
  searchStates: PropTypes.func.isRequired,
};

export default SearchMain;
