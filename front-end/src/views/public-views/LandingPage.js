import React from "react"
import SideBar from '../../components/SideBar';

import Header from "../../components/Header"
import Dashboard from "../protected-views/Dashboard"
import About from "./About"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Devices from "../protected-views/Devices"
import Alerts from "../protected-views/Alerts"
import Contact from "./Contact"
import Documentation from "./Docementation"
import LoginScreen from "../../components/LoginScreen"
import USERS from '../../USERS'

export default function LandingPage() {

    return(
        <>
            <Header/>
            <BrowserRouter> 
            
                <Routes>
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