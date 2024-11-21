import { Outlet } from "react-router-dom"

export default function Services()
{
    return(
        <div className="services">
        <h1> We do all kind of services like web developement, SAAS,SEO servoces,Mobile apps</h1>
        <Outlet/> 
        </div>
        
    )
      
}

 function SAAS(){
    return(
        <h1>this is saas option</h1>
    )
}