import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components import
import Footer from './components/footer/footer-index';
import NavMenu from './components/nav/nav-index';
// Pages import
import Homepage from './pages/homepage/homepage-index';
import About from './pages/about/about-index';
import Contact from './pages/contact/contact-index';
import PortraitCollection from './pages/portraits/portraits-index';
import CustomCollection from './pages/custom/custom-index';
import MiscCollection from './pages/misc/misc-index';

function App() {
  return (
    <div className="App">


      <header className = "header flex nowrap row justify-left align-center">
        <div className="name text-left "> <a className="capital-bold">Y</a>INZHE <a className="capital-bold">D</a>ONG-<a className="capital-bold">Y</a>DEEN </div>
        <nav id="header-list-container" className="flex nowrap row justify-left ">
        <a href="/" className="header-list-item style-link hover-mint">HOME</a>
          <a href="/about" className="header-list-item style-link hover-mint">ABOUT</a>
          <a href ="/contact"className="header-list-item style-link hover-mint">CONTACT</a>
          <a className="header-list-item style-link hover-mint">CV</a>

        </nav>
      </header>

      <main id="main-container" className = " flex columns nowrap">

        <NavMenu/>

        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Homepage/>}/>
            <Route path="/about" element = {<About/>}/>
            <Route path="/contact" element ={<Contact/>}/>
            <Route path="/portrait" element ={<PortraitCollection/>}/>
            <Route path="/misc" element ={<MiscCollection/>}/>
            <Route path="/custom" element ={<CustomCollection/>}/>
          </Routes>
        </BrowserRouter>

      </main>


      


      <Footer/>
    </div>
  );
}
export default App;
