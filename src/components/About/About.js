import React, { Fragment } from "react";
import NavigationBar from "../Navigation";
import "./About.css"
import Lucky from "./WhatsApp Image 2023-10-22 at 10.20.01 PM.jpeg"
const About=()=>{
    return(
        <Fragment>
        <NavigationBar/>
        
<div className="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who am I and what I do</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>




  <div className="column">
    <div className="card">
      <img src={Lucky} alt="Mike" />
      <div className="container">
        <h2>Lalit Negi</h2>
        <p className="title">College Student</p>
        <p><a href="https://www.linkedin.com/in/lalit-negi-14789a280/">Linkedin</a></p>
        
        <a href="https://github.com/igennova">Git Hub</a>
        
       
      </div>
    </div>
  </div>
  
 
 

</Fragment>



    )
}
export default About