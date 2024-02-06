

import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import About from './Components/About/About.jsx';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

export default function App() {
  return (
<BrowserRouter>
    <>
    <Navbar/>
  <Routes>
  <Route exact path='/' element={<Home/>} />
    <Route  path='/about' element={<About/>} />
    <Route  path='/portfolio' element={<Portfolio/>} />
    <Route  path='/contact' element={<Contact/>} />
  </Routes>
    <Footer/>
    </>
    </BrowserRouter>
  )
}

