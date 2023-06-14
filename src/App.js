import './App.css';
import Header from './components/header/header-index'
import Footer from './components/footer/footer-index';
import Homepage from './components/homepage/homepage-index'

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
