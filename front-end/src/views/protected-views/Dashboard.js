import { React, useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import ReactSpeedometer from "react-d3-speedometer"
import { Button } from "@mui/material";
import axios from 'axios'


function Dashboard({user}) {
    const MAXIMUM_VALUE = 100
    const [current_data, setCurrentData] = useState(0)
    const [streamToggle, setStreamToggle] = useState(false)
    const [current_user, setCurrentUser] = useState('')
    
    // Collects data about who is currently logged in
    const base_URL = window.location.href
    const base_URL_clear = base_URL.replace("/dashboard", "")
    let last_index_of_slash = base_URL_clear.lastIndexOf("/")
    const current_user_const = (base_URL_clear.substring(last_index_of_slash+1, base_URL_clear.length))
    const [current_device, setDevice] = useState('')

    // fetch the current device 
    useEffect( () => {  
      // at server environemnt, use http://www.ti-fi-uofsc.com/${current_user_const}/api/get-devices/
      axios.get(`http://localhost:8000/${current_user_const}/api/get-devices/`)
      .then( (response) => { 
        setDevice(response.data[0].device_name)
      })  
      }, []
    )

    // make an api call to get the latest data
    const stream_data = ( () => {

      // at server env use http://www.ti-fi-uofsc.com/${current_user_const}/api/${current_device}/get-data/`
      axios.get(`http://localhost:8000/${current_user_const}/api/${current_device}/get-data/`)
      .then( (response) => { 
        console.log(response.data.data)
        setCurrentData(response.data.data)
      })  

    })
  
    const [tickerID, setTickerID] = useState()
    // function to be executed when the stream button is pressed
    const stream_callback = ( () => { 

      // fetch current data
      stream_data()

      // start a periodic call for function `stream_data` to update every 5 seconds
      setTickerID(setInterval(stream_data, 5000))
    })
    


  return (
    <div className="dashboard-container">
        <div className="dashboard-sidebar"> 
            <SideBar user= {user}/>
        </div>

        <div className="dashboard-content"> 

          <div className="dashboard-content-title"> 
            <h1> dashboard content </h1>
          </div>

          <div className="dashborad-content-controlPanel"> 
                  <div className="controlPanel-stream">

                    {streamToggle === false ?  // if statement
                    
                    <Button 
                        variant="outlined"
                        onClick={() => {
                          stream_callback()
                          setStreamToggle(!streamToggle)
                          }}>
                      Start Streaming
                      </Button>

                      : // else statement
                      <Button
                      variant="outlined"
                      color='error'
                      onClick={() => { 
                        clearInterval(tickerID); 
                        setStreamToggle(!streamToggle)} }> 
                      Stop Stream 
                      </Button>}
                      

                  </div>

                  <div className="controlPanel-streamOnce">
                      <Button 
                      onClick = { () => {
                            // at server env use http://www.ti-fi-uofsc.com/${current_user_const}/api/${current_device}/get-data/`
                            axios.get(`http://localhost:8000/${current_user_const}/api/${current_device}/get-data/`)
                            .then( (response) => { 
                              console.log(response.data.data)
                              setCurrentData(response.data.data)
                            })  
                        }
                      }
                      
                      >
                        Stream Once
                      </Button>
                  </div>
            </div>

            <div className="dashboard-content-body"> 
              <div>
                <ReactSpeedometer
                      maxValue={MAXIMUM_VALUE}
                      value={current_data > MAXIMUM_VALUE ? MAXIMUM_VALUE : current_data}
                      needleColor="black"
                      startColor="blue"
                      segments={10}
                      endColor="red"
                      textColor="black"
                      width={500}
                    />
              </div>

              <div> 
                <p> current temperature : {current_data} </p>
              </div>

            </div>

        </div>
        
    </div>
  );
}

export default Dashboard;
