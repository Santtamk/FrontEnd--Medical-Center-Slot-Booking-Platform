import PropTypes from 'prop-types';
import { LiaUserNurseSolid } from "react-icons/lia";
import { PiHospital } from "react-icons/pi";
import { RiHospitalLine } from "react-icons/ri";
import { BiSolidCapsule } from "react-icons/bi";
import { PiAmbulance } from "react-icons/pi";
import SearchSection from "./SearchSection";


const SearchMain = ({ fetchData, allStates, searchStates, selectedState }) => {

  
  
  return (
    <div className="bg-white  flex justify-center items-center flex-col -mt-20 relative pt-6 mx-4 md:mx-7 rounded-lg shadow-2xl lg:mx-28 lg:-mt-40">
        <SearchSection fetchData={fetchData} allStates={allStates} searchStates={searchStates} selectedState={selectedState}/>
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
  searchResult: PropTypes.bool.isRequired,
};

export default SearchMain;
