
import './App.css';
import MoreProduct from './More';
import Navbar from './Navbar'
import Carousal from './carousal'
import About from './About'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousal/>
      <MoreProduct/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
