import './App.css';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';

// Components import
import Footer from './components/footer/footer-index';
// Pages import
import Homepage from './pages/homepage/homepage-index';
import About from './pages/about/about-index';
import Contact from './pages/contact/contact-index';


function App() {
  return (
    <div className="App">


      <header class = "header">
        <div id="name" class=" text-left "> YINZHE DONG-YDEEN </div>
        <nav id="header-list-container" class="flex nowrap row justify-left ">
        <a href="/" class="header-list-item hover-mint">Home</a>
          <a href="/about" class="header-list-item hover-mint">about</a>
          <a href ="/contact"class="header-list-item hover-mint">contact</a>
          <div class="header-list-item dropdown">
            <a class="hover-mint">collections</a>
              <div id="collections-list" className="dropdown-content flex column left">
                <a class="collections-list-item hover-mint-dark">portraits</a>
                <a class="collections-list-item hover-mint-dark">fan art</a>
                <a class="collections-list-item hover-mint-dark">custom orders</a>
              </div>

          </div>
        </nav>
      </header>


      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Homepage/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="contact" element ={<Contact/>}/>
        </Routes>
      </BrowserRouter>


      <Footer/>
    </div>
  );
}
export default App;
