import { Routes,Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/home";
import About from "./Pages/About";
import Drivers from "./Pages/Drivers";
import Cars from "./Pages/Cars";
import Store from "./Pages/Store";
import Results from "./Pages/Results";
import Membership from './Pages/Membership';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/store" element={<Store />} />
        <Route path="/results" element={<Results />} />
        <Route path="/Membership" element={<Membership/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;