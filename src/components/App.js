import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "../styles/App.css";
// import MainPage from "./MainPage";
// import AddQuestion from "./AddQuestion";
// import AddAnswer from "./AddAnswer";
// import Navbar from "./Navbar";
// import Login from "../Login";
import Temp from "./Temp";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  const isLoggedIn = () => {
    return isAuthenticated;
  };


  return (
    <div>
      <BrowserRouter>
        <div>
        <Temp onLogin={handleLogin} isLoggedIn={isLoggedIn} />
          {/* <Navbar />
          <Routes>
          <Route path="/" element={<Temp />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/add-question" element={<AddQuestion />} />
            <Route path="/add-answer" element={<AddAnswer />} />  */}
          
           
{/* 
            {isAuthenticated ? (
              <>
                 <Route path="/navbar" element={<Navbar />} />
                <Route path="/add-question" element={<AddQuestion />} />
                <Route path="/add-answer" element={<AddAnswer />} />
              </>
            ) : (
              <Route path="/" element={<Login onLogin={handleLogin} />} />
            )}  */}
          {/* </Routes> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
