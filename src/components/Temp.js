import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Login";
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import AddQuestion from "./AddQuestion";
import AddAnswer from "./AddAnswer";
import Logo from "../images/logo.png";

function Temp({ onLogin, isLoggedIn}) {
  return (
    <div>
      {isLoggedIn() ? (
        <Navbar />
      ) : (
        <>
          <div className="logo">
            <img
              src={Logo}
              height="120px"
              width="300px"
              alt="Logo"
              style={{ position: "absolute", left: "500px" }}
            />
          </div>
          <Login onLogin={onLogin} />
        </>
      )}
      <Routes>
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/add-question" element={<AddQuestion />} />
        <Route path="/add-answer" element={<AddAnswer />} />
      </Routes>
    </div>
  );
}

export default Temp;
