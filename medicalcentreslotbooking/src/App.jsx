import './App.css'
import HeroSection from './components/heroSection/HeroSection'
import Navbar from './components/navbar/Navbar'
import SearchMain from './components/SearchBar/SearchMain'

function App() {
  

  return (
    <>
     <div className='navAndHero'>
      <Navbar />
      <HeroSection />
     </div>
      <SearchMain />
    </>
  )
}

export default App
