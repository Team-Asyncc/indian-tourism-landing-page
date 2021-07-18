import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import PopularPlaces from './Components/PopularPlaces/PopularPlaces'
import Footer from './Components/Footer/Footer'
import { PopularTrips } from './Components/PopularTrips/PopularTrips'

function App() {
  return (
    <div>
      <Navbar />
      <PopularPlaces />
      <PopularTrips/>
      <Footer />
    </div>
  )
}

export default App
