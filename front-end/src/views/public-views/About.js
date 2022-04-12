import React from "react";
import img from "../../assets/imgs/CC3220img.png"
function About() {
    return (
      <>
        <div className="about-container"> 

        <div className="about-container-title"> 
          <h1> 
            Ti-Fi 
          </h1>
        </div>

        <div className="about-container-body">

          <h3 className="about-body-title"> 
          Eiusmod Tempor
          </h3>
          <p className="about-body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <img className="about-body-img"
          src = {img}/>

        </div>

        </div>
      </>
    );
  }
  
  export default About;