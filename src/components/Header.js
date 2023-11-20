import React from 'react';
import '../styles/Header.css';


const headerStyle = {
    mainDiv: {
      justifyContent: 'space-around',
      textAlign: 'top',
      
  },
    anchors: {
      color: '#8e979b',
      textAlign: 'center',
      padding: 0,
      margin: 10,
      alignItems: 'top',
  }
}


function Header({ currentPage, changeFunction }) {
  return (
<div class="container mainDiv" id="gradient">

  <div class="mainDiv"> 
    <div className="header" style={headerStyle.mainDiv}>
      <ul class="navbar navbar-expand-sm  flex-row align-items-top" id="p-0">

      <li class="b-nav-item">
      <a style={headerStyle.anchors}
        onClick={() => changeFunction("Home")}
        className={currentPage === "Home" ? "nav-link col-2 active" : "nav-link col-2"}
        href="#bio"
      >Home</a>
      </li>  

      <li class="b-nav-item ">
      <a style={headerStyle.anchors}
       onClick={() => changeFunction("Home")}
        className={currentPage === "Portfolio" ? "nav-link col-2 active" : "nav-link col-2"}
        href="#portfolio"
      >Portfolio</a>
      </li>

      <li class="b-nav-item ">
      <a style={headerStyle.anchors}
        onClick={() => changeFunction("Home")}
        className={currentPage === "Contact" ? "nav-link col-2 active" : "nav-link col-2"}
        href="#contact"
      >Contact</a>
      </li>
      
      <li class="b-nav-item ">
      <a style={headerStyle.anchors}
        onClick={() => changeFunction("Resume")}
        className={currentPage === "Resume" ? "nav-link col-2 active" : "nav-link col-2"}
      >Resume</a>
      </li>

      </ul>
      </div>
  </div> 
</div>
  );
}

export default Header;