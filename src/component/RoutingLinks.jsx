import { Link } from 'react-router-dom';
import './RoutingLinks.css'
import logo from '../component/assets/images/logo.png'

export default function Routinglinks(){
    function Showoption(){
        
       alert("dshbfskb") 
        
    }
    return(
        <div className='heade'>
        <ul>
            <li> 
                
                <img src={logo} alt="" width="90px" height="80px" />
                <h3 className='link'>Get a Quote</h3>
                <Link to ="/contactUs" className='links'>Contacts</Link>
                <Link to ="/services" className='links' onMouseOver={Showoption}>Services
                </Link>
                <Link to ="/aboutUs" className='links'>About</Link>
                <Link to ="/" className='links'>Home</Link>
                
            </li>
        </ul>
        </div>
    )
  }