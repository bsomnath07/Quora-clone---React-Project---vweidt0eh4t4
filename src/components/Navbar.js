import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../images/logo.png";
import Login from "../Login";
import AddQuestion from "./AddQuestion";

function Navbar() {
  const [questionbox, setQuestionbox] = useState(true);
  // const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
  };
  const handleAddQuestions = () => {
    console.log("clicked");
    setQuestionbox(true);
  };

  return (
    <nav>
      <div className="logo">
        <img src={Logo} height="60px" width="150px" alt="Logo" />
      </div>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="search-bar"
            name="search"
            placeholder="Search for questions..."
          />
          <button className="searchbutton" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="nav">
        <div className="navbtnContainer">
          <span>
            <Link to="/add-question">
              <button className="button" onClick={handleAddQuestions}>
                Add <br />
                Questions
              </button>
            </Link>
          </span>
          <span>
            <Link to="/add-answer">
              <button className="button">
                Add
                <br /> Answer
              </button>
            </Link>
          </span>

          {/* <Link to="/login">
              <button className="button">Log In</button>
            </Link> */}
          {/* <span className="button">{user.name}</span> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
