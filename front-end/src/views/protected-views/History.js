// React 
import React, { useState, useEffect } from 'react';
import Griddle, { ColumnDefinition, plugins, RowDefinition } from 'griddle-react';
// Static objects
import Sidebar from "../../components/SideBar";

// HTTP
import axios from 'axios';


function History() {
    
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
    const base_URL_clear = base_URL.replace("/history", "")
    
    let last_index_of_slash = base_URL_clear.lastIndexOf("/")
    const current_user_const = (base_URL_clear.substring(last_index_of_slash+1, base_URL_clear.length))

    const [data_array, setDataArray] = useState([])
    const [current_device, setDevice] = useState('')

    // fetch the current device 
    useEffect( () => {  
      // Dev : `http://localhost:8000/${current_user_const}/api/get-devices/
      // at server environemnt, use https://www.ti-fi-uofsc.com/${current_user_const}/api/get-devices/
      axios.get(`${HOST}/${current_user_const}/api/get-devices/`)
      .then( (response) => { 
        setDevice(response.data[0].device_name)
      })  
      }, []
    )

    // get all data device 
    useEffect( () => {  
      // at server environemnt, use https://www.ti-fi-uofsc.com/${current_user_const}/api/$device/get-all-data/
      axios.get(`${HOST}/${current_user_const}/api/${current_device}/get-all-data/?format=json`)
      .then( (response) => { 

        if(response.headers['content-type'] != "text/html; charset=utf-8"){
         // Update the table's data
          setDataArray(prevState => [...prevState, response.data])
          
        }

    })  
      }, [current_device]
    ) 

    // Styling the table
    const styleConfig = {
      icons: {
        TableHeadingCell: {
          sortDescendingIcon: '▼',
          sortAscendingIcon: '▲'
        },
      },
      classNames: {
        Row: 'row-class',
      },
      styles: {
        Filter: { fontSize: 18 },
        Table: { border: "2px solid #555 ", width: "60vw"},
        Cell: {  padding: "15px", border: "2px solid #555 ", },
        
      }
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
            <div> 
          
              <h3> View history </h3>
              <div style={{padding:'10px'}}> 

              <Griddle data={data_array[0]}
                       styleConfig={styleConfig}
                       plugins={[plugins.LocalPlugin]}>
              <RowDefinition>
                <ColumnDefinition id='creation_date'
                                  title='timestamp'
                                  width="18vw"/>
                <ColumnDefinition id='Temperature'/>
                <ColumnDefinition id='Humidity'/>
                <ColumnDefinition id='Movement'/>
                <ColumnDefinition id='Gas'/>
                <ColumnDefinition id='Generic'/>
                
              </RowDefinition>
              
              </Griddle>
              </div>
            </div>

         </div>
    </div>
  );
}

export default History;
