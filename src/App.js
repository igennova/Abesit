import { Fragment } from 'react';

import Image from "./components/Image/Image"
import {  Routes, Route } from "react-router-dom";

import About from './components/Pages/About';
import Home from './components/home/Home';
import Adm from "./components/Pages/Admission/Admission"
import Placements from './components/Pages/Placements/Placemts';

function App() {
  return(
   
    <Fragment>
      <Routes>
        <Route path='/admissions' element={<Adm/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/faculty' element={<Placements/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      
   
  </Fragment>)
}
   

export default App;
