import { IoSearch } from "react-icons/io5";

const SearchMain = () => {
  return (
    <div className="bg-white  flex justify-center items-center flex-col -mt-20 relative pt-6 mx-4 md:mx-7 shadow-2xl">
      <div className="flex justify-center items-center flex-col gap-6">
        <input type="text" className="bg-searchColor" placeholder="State" />
        <input type="text" className="bg-searchColor" placeholder="City" />
        <button className="text-white bg-sky rounded-lg w-32 h-12 text-base font-medium flex justify-center items-center gap-2">
          <span>
            <IoSearch />
          </span>
          <span>Search</span>
        </button>
      </div>
      {/* <div className='flex flex-col text-center'>
            <p>You may be looking for</p>
            <div>
                <div className='flex flex-col'>
                    <div>
                        <img src='./medicine.png' alt='doctor logo'/>
                        <p>Doctors</p>
                    </div>
                    <div>
                        <img src='./medicine.png' alt='lab logo'/>
                        <p>Labs</p>
                    </div>
                    <div>
                        <img src='./medicine.png' alt='Hospitals logo'/>
                        <p>Hospitals</p>
                    </div>
                    <div>
                        <img src='./medicine.png' alt='Medical Store logo'/>
                        <p>Medical Store</p>
                    </div>
                    <div>
                        <img src='./medicine.png' alt='Ambulance logo'/>
                        <p>Ambulance</p>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  );
};

export default SearchMain;
