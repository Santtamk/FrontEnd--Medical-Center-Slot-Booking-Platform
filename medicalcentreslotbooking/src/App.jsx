import { useEffect, useState } from 'react'
import './App.css'
import DownloadApp from './components/appStore/DownloadApp'
import Blog from './components/blog/Blog'
import MidCaring from './components/caringMid/MidCaring'
import Families from './components/families/Families'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'
import HeroSection from './components/heroSection/HeroSection'
import Navbar from './components/navbar/Navbar'
import SearchMain from './components/SearchBar/SearchMain'
import Specialisation from './components/specialisation/Specialisation'
import Swiper1 from './components/swiper1/Swiper1'
import Swiper2 from './components/swiper1/Swiper2'
import axios from 'axios';

function App() {
  const URL = "https://meddata-backend.onrender.com/"
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  const fetchData = async ( city, state) => {
    setLoading(true);
    try{
      const response = await axios.get(`${URL}data/?state=${state}&city=${city}`);
      setData(response.data); 
    }catch(error){
      setError(error);
    }finally{
      setLoading(false);
    }
  }
  // useEffect(() => {
  //   fetchdata();
  // },[])
  
console.log(data)
  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchMain fetchData={fetchData}/>
      <Swiper1 />
      <Specialisation />
      <Swiper2 />
      <MidCaring />
      <Blog />
      <Families />
      <Faq />
      <DownloadApp />
      <Footer />
    </>
  )
}

export default App
