import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import PopularPlaces from "./Components/PopularPlaces/PopularPlaces";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <PopularPlaces />
      <Footer />
    </div>
  );
}

export default App;
