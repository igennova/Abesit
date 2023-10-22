import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import  "./Navigation.css";

// const classNameFunc = ({ isActive }) => (isActive ? "active" : "");

const NavigationBar=(props)=>{
  
  
  
    return(<Fragment>
      <div className="topnav">
      <NavLink  to="/">Home</NavLink>
      <NavLink to="/admissions">Admission</NavLink>
      <NavLink to="/faculty">Placements</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>

    
  
  
  </Fragment>)
}
export default NavigationBar