import { useState } from "react";
import PropTypes from "prop-types";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchSection = ({
  fetchData,
  allStates,
  searchStates,
  selectedState,
  showStateNameInResult,
  loading
}) => {
  const navigate = useNavigate(); // Initialize navigate function

  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const changeState = (e) => {
    setState(e.target.value);
    searchStates(e.target.value);
  };

  const getHospital = (e) => {
    e.preventDefault();
    fetchData(city, state);
    if (typeof showStateNameInResult === 'function') {
      showStateNameInResult(state, city);
    } else {
      console.error('showStateNameInResult is not a function');
    }
    navigate('/find-doctors');
  };


  return (
    <div>
      <form
        className="flex justify-center pb-5 items-center flex-col gap-7 lg:flex-row"
        onSubmit={getHospital}
      >
        <select
          name="state"
          id="state"
          value={state}
          className="bg-searchColor h-12 w-72 text-light-grey rounded-lg focus:outline-none focus:border-sky focus:ring-sky focus:ring-1"
          onChange={changeState}
          required
        >
          <option value="" className="text-light-grey" disabled >
            {" "}
            &#x1F50D;&#xFE0E; State
          </option>
          {loading ? (<option value="" className="text-light-grey" disabled >
            Loading Data...
          </option>) : (

            allStates.map((item) => {
              return (
                <option key={item} value={item} className="text-light-grey">
                {item}
              </option>
            );
          })
        )
        }
        </select>

        <select
          name="city"
          id="city"
          value={city}
          className="bg-searchColor h-12 w-72 text-light-grey rounded-lg focus:outline-none focus:border-sky focus:ring-sky focus:ring-1"
          onChange={(e) => setCity(e.target.value)}
          required
        >
          <option value="" className="text-light-grey" disabled >
            {" "}
            &#x1F50D;&#xFE0E; City
          </option>
          {loading ? (<option value="" className="text-light-grey" disabled>
            Loading Data...
          </option>) : (
          selectedState.map((item) => {
            return (
              <option key={item} value={item} className="text-light-grey">
                {item}
              </option>
            );
          }))}
        </select>
        <button className="text-white bg-sky rounded-lg w-32 h-12 text-base font-medium flex justify-center items-center gap-2">
          <span>
            <IoSearch />
          </span>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

SearchSection.propTypes = {
  allStates: PropTypes.arrayOf(PropTypes.string.isRequired),
  selectedState: PropTypes.arrayOf(PropTypes.string.isRequired),
  fetchData: PropTypes.func,
  searchStates: PropTypes.func,
  showStateNameInResult: PropTypes.func,
  searchResult: PropTypes.bool,
};

export default SearchSection;
