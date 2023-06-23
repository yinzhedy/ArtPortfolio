import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components import
import Footer from './components/footer/footer-index';
import Nav from './components/nav/nav'


// General Pages import
import Homepage from './pages/general/homepage/homepage-index'
import About from './pages/general/about/about-index';
import Contact from './pages/general/contact/contact-index';
import Highlights from './pages/general/highlights/highlights';
import Exhibitions from './pages/general/exhibitions/exhibitions';
import eastonNightsHome from './pages/general/easton-nights-home/easton-nights-home';


// Gallery Pages import
import valleyDaysGallery from './pages/galleries/valley-days/valley-days';
import valleyDaysRondelsGallery from './pages/galleries/valley-days-rondels/valley-days-rondels';
import waitingForPalmsGallery from './pages/galleries/waiting-for-palms/waiting-for-palms';
import blackWhiteAndGreyGallery from './pages/galleries/black-white-and-gray/black-white-and-grey';
import aCommutersMotionsGallery from './pages/galleries/a-commuters-motions/a-commuters-motions';
import awayGallery from './pages/galleries/away/away';

import dreamsGallery from './pages/galleries/dreams/dreams';
import colorsGallery from './pages/galleries/colors/colors';
import stagesGallery from './pages/galleries/stages/stages';
import wordsGallery from './pages/galleries/words/words';
import geometryGallery from './pages/galleries/geometry/geometry';
import beehivesGallery from './pages/galleries/beehives/beehives';
import portalsGallery from './pages/galleries/portals/portals';
import faunaGallery from './pages/galleries/fauna/fauna';
import floraGallery from './pages/galleries/flora/flora';
import memesisGallery from './pages/galleries/memesis/memesis';
import theEndTheBeginningGallery from './pages/galleries/the-end-the-beginning/the-end-the-beginning';


function App() {
  return (
    <div className="App">


      <header className = "header flex nowrap row justify-left align-center">
        <div className="name text-left "> <a className ="style-link" href="/" ><a className="capital-bold">Y</a>INZHE <a className="capital-bold">D</a>ONG-<a className="capital-bold">Y</a>DEEN </a></div>
        <nav id="header-list-container" className="flex nowrap row justify-left ">
        <a href="/" className="header-list-item style-link hover-mint">HOME</a>
          <a href="/about" className="header-list-item style-link hover-mint">ABOUT</a>
          <a href ="/contact"className="header-list-item style-link hover-mint">CONTACT</a>
          <a className="header-list-item style-link hover-mint">CV</a>

        </nav>
      </header>

      <main id="main-container">


        <Nav/>

        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Homepage/>}/>
            <Route path="/about" element = {<About/>}/>
            <Route path="/contact" element ={<Contact/>}/>
            <Route path="/easton-nights-home" element ={<eastonNightsHome/>}/>
            <Route path="/exhibitions" element ={<Exhibitions/>}/>
            <Route path="/highlights" element ={<Highlights/>}/>
            <Route path="/valley-days" element ={<valleyDaysGallery/>}/>
            <Route path="/valley-days-rondels" element ={<valleyDaysRondelsGallery/>}/>
            <Route path="/waiting-for-palms" element ={<waitingForPalmsGallery/>}/>
            <Route path="/black-white-and-grey" element ={<blackWhiteAndGreyGallery/>}/>
            <Route path="/a-commuters-motions" element ={<aCommutersMotionsGallery/>}/>
            <Route path="/away" element ={<awayGallery/>}/>
          </Routes>
        </BrowserRouter>

      </main>


      


      <Footer/>
    </div>
  );
}
export default App;
