import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import PopularPlaces from "./Components/PopularPlaces/PopularPlaces";
import Footer from "./Components/Footer/Footer";
import Experiance from "./Components/Experiance/Experiance";
function App() {
  return (
    <div>
      <Navbar />
      <PopularPlaces />
      <Footer />
      <Experiance />
    </div>
  );
}

export default App;
