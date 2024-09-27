
import './App.css';
import { NavbarSK } from './Components/NavbarSK';
import Footer from './Components/Footer';
import { HomePage } from './Pages/HomePage';
import { AboutUs } from './Pages/AboutUs';
import { ContactUs } from './Pages/ContactUs';

function App() {
  return (
    <div className="App">
      
      <NavbarSK/>
<HomePage/>
<AboutUs/>
<ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
