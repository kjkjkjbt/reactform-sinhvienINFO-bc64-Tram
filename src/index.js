import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactForm from './Components/ReactForm'
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import HeaderLayout from './HeaderLayout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<ReactForm />}/></Routes>
        <Route path =" info" element={<HeaderLayout/>} ></Route>
    </Routes>
  </BrowserRouter>
  

);


