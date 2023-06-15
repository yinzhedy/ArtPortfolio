import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components import
import Footer from './components/footer/footer-index';
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


      <header class = "header">
        <div id="name" class=" text-left "> YINZHE DONG-YDEEN </div>
        <nav id="header-list-container" class="flex nowrap row justify-left ">
        <a href="/" class="header-list-item style-link hover-mint">Home</a>
          <a href="/about" class="header-list-item style-link hover-mint">about</a>
          <a href ="/contact"class="header-list-item style-link hover-mint">contact</a>
          <div class="header-list-item style-link dropdown">
            <a class="hover-mint">collections</a>
              <div id="collections-list" className="dropdown-content flex column left">
                <a href ="/portrait" class="style-link hover-mint">portraits</a>
                <a href ="/misc" class="style-link hover-mint">misc.</a>
                <a href ="/custom" class="style-link hover-mint">custom</a>
              </div>

          </div>
        </nav>
      </header>


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


      <Footer/>
    </div>
  );
}
export default App;
