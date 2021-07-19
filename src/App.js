import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import PopularPlaces from './Components/PopularPlaces/PopularPlaces';
import Footer from './Components/Footer/Footer';
import Experience from './Components/Experience/Experience';
import { PopularTrips } from './Components/PopularTrips/PopularTrips';
import MustVisit from './Components/MustVisit/MustVisit';
import BigCarousel from './Components/Carousel/BigCarousel';
import HomePage from './Components/HomePage/HomePage';
import Form from './Components/Form/Form';
import Toastify from './Components/Toast/Toast';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <BigCarousel />
      <PopularPlaces />
      <MustVisit />
      <PopularTrips />
      <Experience />
      <Form />
      <Footer />
      <Toastify />
    </div>
  );
}

export default App;
