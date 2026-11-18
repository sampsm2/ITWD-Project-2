import './App.css';
import Header from './components/common/Header.js'; //import header
import Home from './components/Home.js'; //import Home
import Footer from './components/common/Footer.js'; //import Footer
import AdvancedJS from "./components/AdvancedJS.js"; //import Advanced
import FAQ from "./components/FAQ.js"; //import FAQ
import Booking from "./components/Booking.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //imort required router stuff


function App() {
  return (
    <>
    <BrowserRouter>
      <div style={{overflowX: 'hidden'}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advancedJS" element={<AdvancedJS />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/booking" element={<Booking />} />
          {/*Inside here also routes for other two Routes e.g. Booking*/}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
