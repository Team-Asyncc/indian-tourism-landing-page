import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import PopularPlaces from './Components/PopularPlaces/PopularPlaces';
import Footer from './Components/Footer/Footer';
import BigCarousel from './Components/Carousel/BigCarousel';

function App() {
  return (
    <div>
      <Navbar />
      <BigCarousel />
    </div>
  );
}

export default App;
