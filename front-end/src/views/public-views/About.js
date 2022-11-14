import React from "react";
import img from "../../assets/imgs/CC3220img.png"


function About() {
    return (
      <>
        <div className="about-container"> 

        <div className="about-container-title"> 

        </div>

        <div className="about-container-body">
          <div style={{
               display: 'block',
               gridColumn: '1/3',
               gridRow: '1/4'}}> 

          <h3 className="font-google" > 
          Turn Your IoT Application Idea Into Reality 
          </h3>
          <h5 className="font-google"
              style={{color: 'rgb(105, 105, 105)'}}>
            We Make Prototyping New Inventions Easy
          </h5>
          <p>
          Texas Instruments Fidelity (TI-Fi) is a holistic system for rapid development of IoT applications.
          This project allows developers to prototype their IoT applications almost immediately. 
          The system includes five different sensors and a generic I2C port, in addition to a pre-configured 
          cloud platform where the developer can consume/monitor the sensors’ data online. 
          The peripherals included within this development kit are light detecting sensor, 
          motion detecting sensor, humidity sensor, volatile organic compound sensor, temperature sensor,
           and a generic sensor port for the user to add on their own sensor.
          </p>

          <h3 className="font-google"
              style={{marginTop: '80px'}}> 
          The team
          </h3>
          <p>
          The University of South Carolina provides capstone projects for all its electrical engineering students. 
          This course provides the soon to graduate students with an opportunity to apply what they have 
          learned over their time at USC to a real-world simulation of designing and building their own project.
          Team Ti-Fi consists of four USC students and Texas Instruments sponsor: Mason Williams, Anas Bamaroof,
          Abdullah Alawfi, Adrian Means, and the sponsor Mark Easley.
          </p>

          </div>

          <img className="about-body-img"
          src = {img}/>

        </div>

        </div>
      </>
    );
  }
  
  export default About;