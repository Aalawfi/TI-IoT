// React 
import React from "react";
import {useState, useEffect} from "react"

// Static objects
import Sidebar from "../../components/SideBar";

// HTTP
import axios from 'axios'


function History() {
    
    //const HOST = "http://localhost:8000"
    const HOST = "https://www.ti-fi-uofsc.com"

    // Collects data about who is currently logged in
    const base_URL = window.location.href
    const base_URL_clear = base_URL.replace("/alerts", "")
    
    let last_index_of_slash = base_URL_clear.lastIndexOf("/")
    const current_user_const = (base_URL_clear.substring(last_index_of_slash+1, base_URL_clear.length))

    // fetch the current device 
    useEffect( () => {  
      // at server environemnt, use https://www.ti-fi-uofsc.com/${current_user_const}/api/update-phone/
      axios.get(`${HOST}/${current_user_const}/api/update-alerts/`)
      .then( (response) => { 
        
      })  
      }
    )

    const update_settings = () => {


    }

  return (
    <div className="dashboard-container">
        <div className="dashboard-sidebar"> 
            <Sidebar />
        </div>
        <div className="dashboard-content"> 
            <div className="dashboard-content-title"> 
              <h1> 
                History
              </h1>
            </div>
            <div className="dashboard-content-body-devices"> 
          
              <h3> View history </h3>
            
              <div>
 
            
              </div>
           </div>

         </div>
    </div>
  );
}

export default History;
