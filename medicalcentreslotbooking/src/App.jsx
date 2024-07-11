import './App.css'
import HeroSection from './components/heroSection/HeroSection'
import Navbar from './components/navbar/Navbar'
import SearchMain from './components/SearchBar/SearchMain'
import Specialisation from './components/specialisation/Specialisation'
import Swiper1 from './components/swiper1/Swiper1'
import Swiper2 from './components/swiper1/Swiper2'

function App() {
  

  return (
    <>
     <div className='navAndHero'>
      <Navbar />
      <HeroSection />
     </div>
      <SearchMain />
      <Swiper1 />
      <Specialisation />
      <Swiper2 />
    </>
  )
}

export default App
