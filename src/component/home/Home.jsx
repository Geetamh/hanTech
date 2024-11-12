import './home.css';
import { Button } from 'bootstrap';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.png';
import img6 from '../assets/images/img6.png';
import img10 from '../assets/images/img10.png';
import img7 from '../assets/images/img7.png';
import img8 from '../assets/images/img8.png';
import img11 from '../assets/images/img11.png';
import img9 from '../assets/images/img9.png';
import img12 from '../assets/images/img12.png';
import img14 from '../assets/images/img14.png';
import img15 from '../assets/images/img15.png';
import img16 from '../assets/images/img16.png';
import img17 from '../assets/images/img17.png';
import img18 from '../assets/images/img18.png';



 export default function Home(){
    return (
        <div>
           
        <div id='container'>
        <div className='img'>
        <img  src= {img1} alt=""  />        
        </div>

        <div className='text'>
        <h1>All-in-one Hub for <br/>
        Mobile Apps, Web <br/> Apps, SAAS & SEO <br/> 
        services</h1>
        </div>

        </div>
        <button type="button" className='btn'>Getting strted</button>
        <br/><br/><br/>
        <div id="apps">
            <img id="img1" src={img2} alt=""  width="110px" height="130px"/>
            <img id="img2" src={img3} alt=""width="110px" height="130px" /><br></br>
            <img id="img3" src={img4} alt="" width="110px" height="130px"/>
            <img id="img4" src={img5} alt="" width="110px" height="130px"/>
        </div>
        <div id="section3">
            <div className="text1">
            <span>Welcome to HAN Technologies: We specialize in crafting innovative solutions that cater to all your needs in the digital sphere. Whether you’re looking to launch a cutting-edge mobile app, streamline your online operations with web apps, establish a captivating online presence with a stunning website, or boost your visibility and reach through SEO services, we’ve got you covered.Partner with us today and experience the difference with HAN Technologies – where innovation meets excellence in every project we undertake.</span>
            </div>
            <div className="img1">
                <img src={img6} alt=""  width="800px" height="500px"/>
            </div>
        </div>
        {/* code for Our Design & Development Process */}
        <div className="development">
            <h1>Our Design & Development Process</h1>
            <h3>At HAN Technologies, we streamline creativity, collaboration, and attention to detail to bring your digital ideas to life. From concept to completion, we prioritize understanding your vision, ensuring every step aligns with your goals. Expect innovative solutions that exceed expectations.</h3>

            <div>
            <img className="DevImage" src={img10} alt=""   /> 
            <div className="para1">
                <img className="roadmap" src={img7} alt="" />
                <h3 className="text3">SEO & Social Media Services</h3>
                <h4 className="text4">Elevate your online presence with our expert SEO and social media services. From boosting visibility to engaging your audience through our strategies.</h4>
            </div>
            <div className="para2">
                <img className="roadmap" src={img8} alt="" />
                <h3 className="text3">APP Development</h3>
                <h4 className="text4">From concept to code, our development team brings your ideas to life with precision and expertise. We craft seamless solutions that elevate your digital presence. </h4>
            </div>
            <div className="para3">
                <img className="roadmap2" src={img9} alt="" />
                <h3 className="text3">SaaS (Software as a Service)</h3>
                <h4 className="text4">SAAS revolutionizes software delivery by offering flexible, subscription-based access to powerful tools and applications over the cloud, with hassle-free maintenance.</h4>
            </div><br/><br/><br/>
            <div className="para4">
                <img className="roadmap2" src={img11} alt="" />
                <h3 className="text3">Strategy & Roadmap.</h3>
                <h4 className="text4">Our expert team at HAN Technologies develops tailored strategies and roadmaps to ensure your mobile and web apps reach their full potential. </h4>
            </div>
            </div>   
            <div className='caseStudies'>
                <h2>Case Studies</h2>
                <div className='caseTag'>
                    <div className='caseImage'>
                        <img src={img12} alt=""  width="616px;" height="550px"/>
                    </div>
                    <div className="caseText">
                        <p>Neighborhood Navigator</p> <br />
                        <span>Local Services</span><br />
                        <span>Discover local businesses effortlessly with our mobile app’s powerful search engine. Find everything you need nearby, from restaurants to services, with concise descriptions to guide your choice. Simplify your search and explore your neighborhood like never before.</span>
                    </div>
                    
                    
                </div>
                

            </div>  
           <div className='quote'>
           <h4 className='circle'>4.7</h4>
            <button type="button" className='btn1'>Get a Quote</button> 
            </div>
            <div className='offers'>
                <img src={img14} alt="" />
                <h1>What We Offer </h1>
                <h4>Discover our comprehensive suite of services at our All-in-One Hub. From mobile apps to web apps, SAAS solutions to captivating websites, and top-notch SEO services, we’re your go-to destination for all your digital needs. Elevate your online presence and drive success with our expertly crafted solutions.</h4>
                <div className='icons'>
                    <div>
                        
                    <img src={img15} alt="" width="50px"  height="70px"/>
                    <h1 className='heading'>Mobile App Development</h1>
                    <h4 className='mobile'>Unlock innovation with our Mobile App Development services. From concept to launch, we craft dynamic apps tailored to your needs. Elevate your brand and engage users on-the-go with our cutting-edge solutions.</h4>
                    </div>
                    <div>
                       
                    <img src={img16} alt="" width="50px"  height="70px"/>
                    <h1 className='heading'>Roadmap & Strategy</h1>
                    <h4 className='mobile'>Unlock innovation with our Mobile App Development services. From concept to launch, we craft dynamic apps tailored to your needs. Elevate your brand and engage users on-the-go with our cutting-edge solutions.</h4>
                    </div>
                    <div>
                        
                    <img src={img17} alt="" width="50px"  height="70px"/>
                    <h1 className='heading'>Web App Development</h1>
                    <h4 className='mobile'>Unlock innovation with our Mobile App Development services. From concept to launch, we craft dynamic apps tailored to your needs. Elevate your brand and engage users on-the-go with our cutting-edge solutions.</h4>
                    </div>
                </div>
                <div className='icons'>
                    <div>
                        
                    <img src={img10} alt="" width="50px"  height="70px"/>
                    <h1 className='heading'>SAAS</h1>
                    <h4 className='mobile'>Unlock innovation with our Mobile App Development services. From concept to launch, we craft dynamic apps tailored to your needs. Elevate your brand and engage users on-the-go with our cutting-edge solutions.</h4>
                    </div>                    
                    <div>
                    
                    <img src={img9} alt="" width="50px"  height="70px"/>
                    <h1 className='heading'>SEO & Social Media Services</h1>
                    <h4 className='mobile'>Unlock innovation with our Mobile App Development services. From concept to launch, we craft dynamic apps tailored to your needs. Elevate your brand and engage users on-the-go with our cutting-edge solutions.</h4>
                    </div>                    
                    <div>
                        
                    <img src={img8} alt="" width="50px"  height="70px"/>
                    <h1 className='heading'>WorldClass Support</h1>
                    <h4 className='mobile'>Unlock innovation with our Mobile App Development services. From concept to launch, we craft dynamic apps tailored to your needs. Elevate your brand and engage users on-the-go with our cutting-edge solutions.</h4>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    )
}