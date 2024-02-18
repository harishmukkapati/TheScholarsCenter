// components/NavBar.js

import React from 'react';

const NavBar = () => {
  const navigateToChatbot = () => {
    window.location.href = "http://127.0.0.1:7860/";
  };

  const navigateToSearch = () => {
    window.location.href = "http://localhost:3002/";
    };

  return (
    <nav>
      <button className="nav-button" onClick={navigateToSearch}>Back to search</button>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Ohio_State_Buckeyes_logo.svg" alt="OSU Logo" />
      <div className="nav-text">MATH 2568 - Linear Algebra</div>
      <button onClick={navigateToChatbot} className="nav-button">Linear Algebra Chatbot</button>
    </nav>
  );
};

export default NavBar;