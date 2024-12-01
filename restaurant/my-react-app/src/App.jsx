import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './header';
import Best from './bestseling';
import Promo from './reviews';
import Connect from './connect';
import Chef from './chefsect';
import Footer from './footer';
import Menue from './menue';
import Menuecontain from './menuecontaint';
import About from './aboutus';
import Panier from './Panier';
import Reservation from './reservation';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={
          <>
            <Header />
        
            <Best />
            <Promo />
            <Connect />
            <Chef />
            <Footer />
          </>
        } />
        
        {/* Menu route */}
        <Route path="/menue" element={
          <>
           
            <Menue />
            
            <Menuecontain/>
            <Connect />
            <Chef />

            <Footer />
          </>
        } />
          <Route path="/about" element={
          <>
           
            <About/>

            <Panier/>
            

            <Footer />
          </>
        } />
         <Route path="/reservation" element={
          <>
           
           <Header/>
           <Panier/>

           <Reservation/>

            

            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
