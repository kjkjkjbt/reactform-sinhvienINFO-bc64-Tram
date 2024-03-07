import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactForm from './Components/ReactForm/ReactForm'
import {BrowserRouter, Navigate, Route,Routes } from 'react-router-dom';
import HeaderLayout from './HeaderLayout';
import Admin from './Page/Admin';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<HeaderLayout />} ></Route>
      <Route path="sinhvienInfo" element={<ReactForm/>}></Route>
  
  <Route path='admin' element={<Admin />} ></Route>
  <Route path='*' element={<Navigate to= "" />} ></Route>
  </Routes>
  </BrowserRouter>
  

);


