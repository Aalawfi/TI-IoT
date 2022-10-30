// React
import { React, useState, useEffect } from "react";

// Static objects
import SideBar from "../../components/SideBar";
import ReactSpeedometer from "react-d3-speedometer";
import { Button } from "@mui/material";
import humidity_img from "../../assets/imgs/humid.png";
import Chart from "../../components/Chart.js";

// HTTP
import axios from 'axios';

function Dashboard({user}) {
    const MAXIMUM_VALUE = 100

    // const HOST = "http://localhost:8000"
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

    // data states 
    const [current_temp, setCurrentTemp] = useState(0)
    const [current_humd, setCurrentHumd] = useState(0)
    const [current_mvmt, setCurrentMvmt] = useState(0)
    const [current_gas, setCurrentGas] = useState(0)
    const [current_gnrl, setCurrentGnrl] = useState(0)
    var default_timeline = [{name:'T-4', value:0},
                   {name:'T-3', value:0},
                   {name:'T-2', value:0},
                   {name:'T-1', value:0},
                   {name:'T', value:0}];
    const [current_timeline, setCurrentTimeline] = useState(default_timeline)


    const [streamToggle, setStreamToggle] = useState(false)
    
    // Collects data about who is currently logged in
    const base_URL = window.location.href
    const base_URL_clear = base_URL.replace("/dashboard", "")
    let last_index_of_slash = base_URL_clear.lastIndexOf("/")
    const current_user_const = (base_URL_clear.substring(last_index_of_slash+1, base_URL_clear.length))

    const [current_device, setDevice] = useState('')

    const devices = []

    // fetch the current device 
    useEffect( () => {  
      // Dev : `http://localhost:8000/${current_user_const}/api/get-devices/
      // at server environemnt, use https://www.ti-fi-uofsc.com/${current_user_const}/api/get-devices/
      axios.get(`${HOST}/${current_user_const}/api/get-devices/`)
      .then( (response) => { 
        setDevice(response.data[0].device_name)

        response.data.map( (element) => devices.push(element.device_name))
        console.log(devices)

      })  
      }, []
    )

/**
 *  The JSON response looks like this 
 * {"id":number,
 * "Tempurature":number,
 * "Humidity":number,
 * "Movement":number,
 * "Gas":number,
 * "Generic":number,
 * 
 * "creation_date":"2022-09-16T13:55:59.910246-04:00",
 * "to_device":numebr}
 */


    // make an api call to get the latest data
    const stream_data = ( () => {

      // Dev: http://localhost:8000/${current_user_const}/api/${current_device}/get-data/`
      // at server env use https://www.ti-fi-uofsc.com/${current_user_const}/api/${current_device}/get-data/`
      
      axios.get(`${HOST}/${current_user_const}/api/${current_device}/get-data/`)
      .then( (response) => { 
        
          // updating values
          setCurrentTemp(parseFloat(response.data['Temperature']))
          setCurrentHumd(parseFloat(response.data['Humidity']))
          setCurrentGas(parseFloat(response.data['Gas']))
          setCurrentMvmt(parseFloat(response.data['Movement']))
          setCurrentGnrl(parseFloat(response.data['Generic']))
          setCurrentTimeline(current_timeline => [...current_timeline.slice(-4),
                                                  {name:response.data['creation_date'].substring(11,19),
                                                   value:parseFloat(response.data['Movement'])}])
    
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
                            
                            // at server env use https://www.ti-fi-uofsc.com/${current_user_const}/api/${current_device}/get-data/`
                            axios.get(`${HOST}/${current_user_const}/api/${current_device}/get-data/`)
                            .then( (response) => { 
                              // updating values
                              setCurrentTemp(parseFloat(response.data['Temperature']))
                              setCurrentHumd(parseFloat(response.data['Humidity']))
                              setCurrentGas(parseFloat(response.data['Gas']))
                              setCurrentMvmt(parseFloat(response.data['Movement']))
                              setCurrentGnrl(parseFloat(response.data['Generic']))
                              setCurrentTimeline(current_timeline => [...current_timeline.slice(-4),
                                {name:response.data['creation_date'].substring(11,19),
                                 value:parseFloat(response.data['Movement'])}])


                            })  
                        }
                      }
                      
                      >
                        Snapshot
                      </Button>
                  </div>
          </div>

            <div className="dashboard-content-body-blocks"> 
            {/* temp graphics */}
              <div className="temp"> 
              <ReactSpeedometer
                      maxValue={MAXIMUM_VALUE}
                      value={current_temp > MAXIMUM_VALUE ? MAXIMUM_VALUE : current_temp}
                      needleColor="black"
                      startColor="blue"
                      segments={10}
                      endColor="red"
                      textColor="black"
                      width={500}
                    />

              </div>

              
  
              {/* humid graphics */}
              <div className="humid"> 
                <img width="150" height="150" src = {humidity_img} > 
                </img>
                <h1 style={{ 
                    fontSize: "7em",
                    textAlign: "left",
                    color: "Black"}}> {current_humd} </h1>
              </div>


              <div className="mvmt">
              <Chart 
                     timeline={current_timeline}/>
              </div>


              <div className="additional"> 
                <p> current temperature : {current_temp} </p>

                <p> current humidity : {current_humd} </p>
                <p> movement detected : {current_mvmt} </p>
                <p> gas reading : {current_gas} </p>
                <p> other : {current_gnrl} </p>
              </div>

            </div>

        </div>
        
    </div>
  );
}

export default Dashboard;
