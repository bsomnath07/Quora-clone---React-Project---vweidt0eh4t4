import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import "../styles/Navbar.css";
import Logo from "../images/logo.png";
function Navbar() {
 // const history = useHistory();
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
   // history.push(`/search?q=${searchTerm}`);
  };

  return (
    <nav>
      <div className="logo">
        
          <img src={Logo} height="60px" width="150px" alt="Logo" />
        
      </div>
      <div className="search-bar">
        <form onSubmit={handleSearch}>
      
          <input type="text"  className="search-bar"  name="search" placeholder="Search for questions..." />
          <button className="searchbutton" type="submit">Search</button>
         
        </form>
      </div>
      <div className="nav">
      <div className="navbtnContainer">
      <span>
  <Link to="/add-question">
    <button className="button">
      Add <br/>Question
    </button>
  </Link>
</span>
<span>
  <Link to="/add-answer">
    <button className="button">
      Add<br/> Answer
    </button>
  </Link>
</span>
<span>
  <Link to="/login">
    <button className="button">
      Log In
    </button>
  </Link>
</span>
</div>
      </div>
    </nav>
  );
}

export default Navbar;







