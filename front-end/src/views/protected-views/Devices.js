// React
import React from "react";
import {useState, useEffect} from "react"

// Static objects 
import Sidebar from "../../components/SideBar";

// HTTP
import axios from 'axios'


function Devices() {

  //const HOST = "http://localhost:8000"
  // const HOST = "https://www.ti-fi-uofsc.com"

    // if in dev mode, don't use HTTPS
    if(process.env.REACT_APP_DEV_MODE == 1) {
      var HOST = process.env.REACT_APP_LOCAL_HOST 
      HOST = 'http://'.concat(HOST)
    } 
    else {
      var HOST = process.env.REACT_APP_PROD_HOST
      HOST = 'https://www.'.concat(HOST)
    }

    // Collects data about who is currently logged in
    const base_URL = window.location.href
    const base_URL_clear = base_URL.replace("/devices", "")
    let last_index_of_slash = base_URL_clear.lastIndexOf("/")
    const current_user_const = (base_URL_clear.substring(last_index_of_slash+1, base_URL_clear.length))

  const [devices, setDevices] = useState([])


    // fetch the current device 
    useEffect( () => {  
      // at server environemnt, use https://www.ti-fi-uofsc.com/${current_user_const}/api/get-devices/
      axios.get(`${HOST}/${current_user_const}/api/get-devices/`)
      .then( (response) => { 

        response.data.map( (element) => { setDevices(prevState => [...prevState, element.device_name]) } )
        console.log(devices)

      })  
      }, [current_user_const]
    )

  return (
    <div className="dashboard-container">
        <div className="dashboard-sidebar"> 
            <Sidebar />
        </div>
        <div className="dashboard-content"> 
          <div className="dashboard-content-title"> 
              <h1> Devices content </h1>
          </div>
          <div className="dashboard-content-body-devices"> 
          
              <h3> Registered devices </h3>
            
              {devices.map( (element) => { return <li> {element} </li>} )} 
              
             
          </div>
        </div>

         
    </div>
  );
}

export default Devices;
