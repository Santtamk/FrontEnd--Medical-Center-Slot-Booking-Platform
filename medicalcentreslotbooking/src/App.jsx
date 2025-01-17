import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DownloadApp from "./components/appStore/DownloadApp";
import Blog from "./components/blog/Blog";
import MidCaring from "./components/caringMid/MidCaring";
import Families from "./components/families/Families";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import SearchMain from "./components/SearchBar/SearchMain";
import Specialisation from "./components/specialisation/Specialisation";
import Swiper1 from "./components/swiper1/Swiper1";
import Swiper2 from "./components/swiper1/Swiper2";
import axios from "axios";
import FindDoctorsPage from "./components/findDoctors/FindDoctorsPage";
import MyBooking from "./components/myBookings/MyBooking";

function App() {
  const URL = "https://meddata-backend.onrender.com/";
  const [allStates, setAllStates] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [valueCity, setValueCity] = useState('');
  const [valueState, setValueState] = useState('');
  const [searchResult, setSearchResult] = useState(false);
  const findDoctorsPageRef = useRef(null);

  //toggle in search
  const [switchToFindDoctor, setSwitchTOFindDoctor] = useState(false);
  // Fetch data from API
  const fetchData = async (city, state) => {
    setSwitchTOFindDoctor(true);
    setLoading(true);
    setValueCity(city);
    setValueState(state);
    try {
      const response = await axios.get(
        `${URL}data/?state=${state}&city=${city}`
      );
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchStates = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`${URL}states`);
        setAllStates(response.data);
      } catch (error) {
        setError(error);
      }finally {
        setLoading(false);
      }
    };
    fetchStates();
  }, []);

  const searchStates = async (state) => {
    setLoading(true);
    try {
      const response = await axios.get(`${URL}cities/${state}`);
      setSelectedState(response.data);
    } catch (error) {
      setError(error);
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (switchToFindDoctor && findDoctorsPageRef.current) {
      findDoctorsPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [switchToFindDoctor]);

  // console.log(searchStates);
  // console.log(selectedState)
  // console.log("final data", data);

  return (
    <Router>
      
      <Navbar />
      <Routes>
      <Route  path='/' element={
        <>
          <HeroSection />
          <SearchMain
            fetchData={fetchData}
            allStates={allStates}
            searchStates={searchStates}
            selectedState={selectedState}
            searchResult={searchResult}
            loading={loading}
          />
          <Swiper1 />
          <Specialisation />
          <Swiper2 />
          <MidCaring />
          <Blog />
          <Families />
          <Faq />
        </>
       } /> 
       <Route path="/find-doctors" element={
        <>
         <FindDoctorsPage
           ref={findDoctorsPageRef}
             fetchData={fetchData}
             allStates={allStates}
             searchStates={searchStates}
             selectedState={selectedState}
             searchResult={searchResult}
             resultData={data}
             valueCity={valueCity}
             valueState={valueState}
             loading={loading}
           />
           <Faq />
        </>
      } />
        <Route path="/my-bookings" element={
          <MyBooking />
        } />
        </Routes>
      <DownloadApp />
      <Footer />
    </Router>
  );
}

export default App;
