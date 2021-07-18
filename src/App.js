import Navbar from './Components/Navbar/Navbar'
import PopularPlaces from './Components/PopularPlaces/PopularPlaces'
import Footer from './Components/Footer/Footer'
import { PopularTrips } from './Components/PopularTrips/PopularTrips'
import MustVisit from './Components/MustVisit/MustVisit'
import BigCarousel from './Components/Carousel/BigCarousel';

import './App.scss';

function App() {
  return (
    <div>
      <Navbar />
      <PopularPlaces />
      <PopularTrips/>
      <BigCarousel />
      <MustVisit />
      <Footer />
    </div>
  );
}

export default App;
