import React from "react";
import {useState, useEffect} from "react"
import Sidebar from "../../components/SideBar";
import axios from 'axios'
import Nav from "react-bootstrap/Nav";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Devices() {
    // Collects data about who is currently logged in
    const base_URL = window.location.href
    const base_URL_clear = base_URL.replace("/devices", "")
    let last_index_of_slash = base_URL_clear.lastIndexOf("/")
    const current_user_const = (base_URL_clear.substring(last_index_of_slash+1, base_URL_clear.length))

  const [devices, setDevices] = useState([])


    // fetch the current device 
    useEffect( () => {  
      // at server environemnt, use https://www.ti-fi-uofsc.com/${current_user_const}/api/get-devices/
      axios.get(`http://localhost:8000/${current_user_const}/api/get-devices/`)
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
