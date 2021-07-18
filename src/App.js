import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import PopularPlaces from './Components/PopularPlaces/PopularPlaces';
import Footer from './Components/Footer/Footer';
import Experiance from './Components/Experiance/Experiance';
import { PopularTrips } from './Components/PopularTrips/PopularTrips';
import MustVisit from './Components/MustVisit/MustVisit';
import BigCarousel from './Components/Carousel/BigCarousel';

function App() {
  return (
    <div className="App">
      <Navbar />

      <BigCarousel />
      <PopularPlaces />
      <MustVisit />
      <PopularTrips />
      <Experiance />
      <Footer />
    </div>
  );
}

export default App;
