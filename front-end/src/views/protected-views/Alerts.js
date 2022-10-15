import React from "react";
import {useState, useEffect} from "react"
import Sidebar from "../../components/SideBar";
import axios from 'axios'


function Alerts() {
    // Collects data about who is currently logged in
    const base_URL = window.location.href
    const base_URL_clear = base_URL.replace("/alerts", "")
    
    let last_index_of_slash = base_URL_clear.lastIndexOf("/")
    const current_user_const = (base_URL_clear.substring(last_index_of_slash+1, base_URL_clear.length))

  const [phone_number, setPhoneNumber] = useState('')


    // fetch the current device 
    useEffect( () => {  
      // at server environemnt, use https://www.ti-fi-uofsc.com/${current_user_const}/api/get-devices/
      axios.get(`http://localhost:8000/${current_user_const}/api/update-phone/`)
      .then( (response) => { 
        setPhoneNumber(response.data)

      })  
      }
    )

    const update_phone = () => {
      var new_number = document.getElementById("new_phone_number").value;
      if (new_number.length > 1){
        axios.put(`http://localhost:8000/${current_user_const}/api/update-phone/`,
        {"new_number" : new_number} )
        window.location.reload();
        }
    }

  return (
    <div className="dashboard-container">
        <div className="dashboard-sidebar"> 
            <Sidebar />
        </div>
        <div className="dashboard-content"> 
          <div className="dashboard-content-title"> 
              <h1> Alerts </h1>
          </div>
          <div className="dashboard-content-body-devices"> 
          
              <h3> Manage alerts </h3>
            
              <div>
              <label> Select the sensor to recieve alerts from : </label>
              <select name="sensors_selection_list"
                      id="sensors_selection_list"
                      style={{margin: '20px' }}>
                <option value="none" > None </option>
                <option value="Temperature" 
                        selected={alert_sensor=='Temperature' ? true : false}> 
                        Temperature sensor 
                </option>
                <option value="Humidity" 
                        selected={alert_sensor=='Humidity' ? true : false}>
                        Humidity sensor 
                </option>
                <option value="Movement"
                        selected={alert_sensor=='Movement' ? true : false}> 
                        Movement sensor 
                </option>
                <option value="Gas" 
                        selected={alert_sensor=='Gas' ? true : false}>
                        Gas sensor 
                </option>
                <option value="Generic" 
                        selected={alert_sensor=='Generic' ? true : false}>
                        Generic sensor
                </option>
              </select>

              <label> 
                Trigger value: 
              </label>
              <input type="text"
                     id='new_trigger_value'
                     defaultValue={threshold_value}
                     placeholder={threshold_value}
                     style={{margin: '20px'}} />

              </div>


              <div> 
                <label>
                  Current Phone Number:
                  <input type="text"
                         value={phone_number}
                         id='current_phone_number'
                         style={{margin: '20px'}}
                         disabled />
                </label>
              </div>
              
                <div style={{display: 'inline-block'}} > 
                  <label>
                    New Phone Number:
                  <input type="text"
                        id='new_phone_number'
                        placeholder="+10001112222"
                        style={{margin: '20px'}} />
                  </label>
                  <input type="submit"
                        value="Update Number"
                        onClick={update_phone}
                        style={{width: '10vw'}} />
                </div>
              

             
          </div>
        </div>

         
    </div>
  );
}

export default Alerts;
