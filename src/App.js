import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import PopularPlaces from './Components/PopularPlaces/PopularPlaces';
import Footer from './Components/Footer/Footer';
import Experience from './Components/Experience/Experience';
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
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
