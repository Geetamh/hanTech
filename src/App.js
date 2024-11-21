import logo from './logo.svg';
import './App.css';
import Footer from './component/footer/Footer';
import Section from './component/section/Section';
import Routinglinks from './component/RoutingLinks';
import {BrowserRouter, Link,Route ,Routes} from 'react-router-dom';
import Home from './component/home/Home';
import AboutUs from './component/aboutUs/AboutUs';
import ContactUs from './component/contactUs/ContactUs';
import Services from './component/services/Services';
import Saas from './component/services/SAAS/Saas';


function App() {
  return (
    <div>
       <BrowserRouter>
       <Routinglinks/>
       <Routes>
        <Route path ="/" element ={ <Home /> } /> 
        <Route>
        <Route path ="/services" element = {<Services />}/>
        <Route path ="/services/saas" element = {<Saas />}/>

        </Route>
        <Route path ="/aboutUs" element = {<AboutUs /> } />
        <Route path ="/contactUs" element = {<ContactUs /> } />
       </Routes>
       </BrowserRouter>
       <Footer/>
    </div>
  );
}

export default App;
