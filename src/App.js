//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
//import TextForm from './components/TextForm';
import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
 const [mode, setMode] = useState('light');
 const[alert,setAlert] = useState(null);

 const showAlert = (message, type)=>{
   setAlert({
     msg: message,
     type:type
   })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
 }

 const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-info');
 }

 const toggleMode = (cls)=>{
  removeBodyClasses(); 
  document.body.classList.add('bg-'+cls)
   if(mode == 'light'){
     setMode('dark');
     document.body.style.backgroundColor='rgb(10, 37, 69)';
     showAlert("Dark mode has been enabled", "success");
  //  document.title = "TextUtils - DarkMode";
   }
   else{
     setMode('light');
     document.body.style.backgroundColor='white';
     showAlert("Light mode has been enabled", "success");
  //  document.title = "TextUtils - LightMode";
   }
 }
  return (
    <>
    <Router>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
       <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>}></Route>
          </Routes>  
      </div>
    </Router>
    </>   
  );
}

export default App;
