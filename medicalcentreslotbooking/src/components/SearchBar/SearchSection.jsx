import { useState } from "react";
import PropTypes from 'prop-types';
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchSection = ({ fetchData, allStates, searchStates, selectedState, showStateNameInResult }) => {

    const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const navigate = useNavigate();

  const changeState = (e) => {
    setState(e.target.value);
    searchStates(e.target.value);
  }



  const getHospital = (e) => {
    e.preventDefault();
    fetchData(city, state);
    showStateNameInResult(state, city);
    navigate('/find-doctors');
  }

   // console.log('state', state)
  // console.log('selectedState', selectedState)
  // console.log('all states', allStates)
  // console.log('changeState', changeState())
  // console.log('searchResult', !searchResult)

  console.log("city and state", city, state)


  return (
    <div>
        <form className="flex justify-center pb-5 items-center flex-col gap-7 lg:flex-row" onSubmit={getHospital}>
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
    </div>
  )
}

SearchSection.propTypes = {
    allStates: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    selectedState: PropTypes.string.isRequired,
    fetchData: PropTypes.func.isRequired,
    searchStates: PropTypes.func.isRequired,
    showStateNameInResult: PropTypes.func.isRequired,
    searchResult: PropTypes.bool.isRequired,
  };


export default SearchSection