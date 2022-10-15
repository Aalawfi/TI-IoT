// React
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Static object
import SideBar from '../../components/SideBar';
import Header from "../../components/Header";

// User dependent views 
import Dashboard from "../protected-views/Dashboard";
import Devices from "../protected-views/Devices"
import Alerts from "../protected-views/Alerts"
import History from "../protected-views/History";

// Static views 
import About from "./About";
import Contact from "./Contact"
import Documentation from "./Docementation"
import LoginScreen from "../../components/LoginScreen"

// Userts list
import USERS from '../../USERS'

export default function LandingPage() {

    return(
        <>
            <Header/>
            <BrowserRouter> 
            
                <Routes>
                    {/**** Dynamic routes ***/}
                        {USERS.map( (user,key) => {
                            return(
   
                                <Route
                                 path={user.name+'/dashboard'} 
                                 element= {<Dashboard user={user.name}/>} 
                                 key = {user}
                                 />
                                 )
                        }) }
                        {USERS.map( (user,key) => {
                            return(
                                <Route
                                 path={user.name+'/devices'} 
                                 element= {<Devices/>} 
                                 key = {user}
                                 />
                                 )
                        }) } 

                        {USERS.map( (user,key) => {
                            return(
                                <Route
                                 path={user.name+'/alerts'} 
                                 element= {<Alerts/>} 
                                 key = {user}
                                 />
                                 )
                        }) }

                        {USERS.map( (user,key) => {
                            return(
                                <Route
                                 path={user.name+'/history'} 
                                 element= {<History/>} 
                                 key = {user}
                                 />
                                 )
                        }) }                        
                    {/**** Static routes ***/}

                        <Route path='/' exact element={<About />}/>
                        <Route path='About' element={<About />}/>
                        <Route path='Contact' element={<Contact />}/>
                        <Route path='Documentation' element = {<Documentation />} />
                        <Route path='login' element={<LoginScreen/>} />

                </Routes>
            </BrowserRouter>

        </>
    )
}