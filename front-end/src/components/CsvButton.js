// React essentials
import {React, useEffect, useState} from 'react'

// CSV link module
import { CSVLink } from "react-csv";


function CsvButton(props){


   const headers = [
        { label: 'Timestamp', key: 'creation_date' },
        { label: 'Temperature', key: 'Temperature' },
        { label: 'Humidity', key: 'Humidity' },
        { label: 'Movement', key: 'Movement'},
        { label: 'Volatile Organic Compound Index', key: 'Gas'},
        { label: 'Generic', key: 'Generic'},
      ];


    
    return(
        <> 
<div className="d-grid gap-2 col-6 mx-auto">
    <CSVLink 
             filename={"tifi-history.csv"}
             className="btn btn-outline-danger "
             data={props.data.length != 0 ? props.data[0] : [{timestamp: '0'}]}
             headers={headers}>
    Export as .csv
    </CSVLink>
    </div>

        </>
    );

};

export default CsvButton;