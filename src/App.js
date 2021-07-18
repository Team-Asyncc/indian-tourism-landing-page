import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import PopularPlaces from './Components/PopularPlaces/PopularPlaces'
import Footer from './Components/Footer/Footer'
import MustVisit from './Components/MustVisit/MustVisit'

function App() {
  return (
    <div>
      <Navbar />
      <PopularPlaces />
      <Footer />
      <MustVisit/>
    </div>
  )
}

export default App
