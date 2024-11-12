
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.png';
import img6 from '../assets/images/img6.png';
import img10 from '../assets/images/img10.png';
import img7 from '../assets/images/img7.png';
import img8 from '../assets/images/img8.png';
import img9 from '../assets/images/img9.png';
import img12 from '../assets/images/img12.png';
import img14 from '../assets/images/img14.png';
import img15 from '../assets/images/img15.png';
import img16 from '../assets/images/img16.png';
import img17 from '../assets/images/img17.png';
import img18 from '../assets/images/img18.png';

export default function(){
    return(
        <div id="section3">
        <div className="text1">
        <span>Welcome to HAN Technologies: We specialize in crafting innovative solutions that cater to all your needs in the digital sphere. Whether you’re looking to launch a cutting-edge mobile app, streamline your online operations with web apps, establish a captivating online presence with a stunning website, or boost your visibility and reach through SEO services, we’ve got you covered.Partner with us today and experience the difference with HAN Technologies – where innovation meets excellence in every project we undertake.</span>
        </div>
        <div className="img1">
            <img src={img6} alt=""  width="800px" height="500px"/>
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
    )
}