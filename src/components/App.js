import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/App.css';
import MainPage from "./MainPage";
import AddQuestion from "./AddQuestion";
import AddAnswer from "./AddAnswer";
import Navbar  from "./Navbar";


function App() {
  return (
  <BrowserRouter>
       <div id="main">
         <Navbar />
         <Routes>
           {/* <Route path="/" element={<Home />} /> */}
         <Route path="/" element={<MainPage />} />
          <Route path="/add-question" element={<AddQuestion/>} />
          <Route path="/add-answer" element={<AddAnswer />} />
            {/*<Route path="/login" element={</>} />
           <Route path="/register" element={<SignUp />} />*/}
          </Routes>
          
          </div>

    </BrowserRouter>
    
  )
}

export default App
