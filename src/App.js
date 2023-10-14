import { Fragment } from 'react';

import Image from "./components/Image/Image"
import {  Routes, Route } from "react-router-dom";
import Faculty from './components/Pages/Faculty';
import About from './components/Pages/About';
import Home from './components/home/Home';
import Adm from './components/Pages/Admission';

function App() {
  return(
   
    <Fragment>
      <Routes>
        <Route path='/admissions' element={<Adm/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/faculty' element={<Faculty/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      
   
  </Fragment>)
}
   

export default App;
