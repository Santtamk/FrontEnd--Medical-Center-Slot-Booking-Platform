
import { useState } from 'react'
import SearchSection from '../SearchBar/SearchSection'
import Result from './Result'
import PropTypes from 'prop-types';

const FindDoctorsPage = ({ fetchData, allStates, searchStates, selectedState, resultData, searchResult, valueCity, valueState }) => {
    const [stateInResult, setStateInResult] = useState('');
    const [cityInResult, setCityInResult] = useState('');

    const showStateNameInResult = (state,city) => {
        return setStateInResult(state), setCityInResult(city);
    }

  return (
    <div>
        <div className="bg-white  flex justify-center items-center flex-col mt-10 relative pt-6 mx-4 md:mx-7 rounded-lg shadow-2xl lg:mx-28 lg:mt-10">
            <SearchSection fetchData={fetchData} allStates={allStates} searchStates={searchStates} selectedState={selectedState} searchResult={searchResult} resultData={resultData} showStateNameInResult={showStateNameInResult}/>
        </div>
        <div>
            <Result  resultData={resultData} stateInResult={stateInResult} cityInResult={cityInResult} city={valueCity} state={valueState}/>
        </div>
    </div>
  )
}


FindDoctorsPage.propTypes = {
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
    resultData: PropTypes.array.isRequired,
    valueCity: PropTypes.string.isRequired,
    valueState: PropTypes.string.isRequired,
  };

export default FindDoctorsPage