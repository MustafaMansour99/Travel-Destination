import Home from './components/home/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Tours from './components/tours/Tours';
import TourDetails from './components/TourDetails/TourDetails';
import About from './components/about/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>     
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/city' element={<Tours />} />
        <Route path='/city/:id' element={<TourDetails />} />

      </Routes>
      </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
