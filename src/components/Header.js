import React from 'react';
import '../styles/Header.css';

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const headerStyle = {
    anchors: {
      color: '#8e979b',
      textAlign: 'center',
      padding: 0,
      margin: 0,
  
  },
  
}


function Header() {
  return (
<div className="mainDiv container d-flex p-0 " id="top-heather">
  <div className="header col-9 p-0" style={headerStyle.mainDiv}>
    <div className='p-0 navbar navbar-expand-sm flex-row align-items-top flex-nowrap'>
      <li class="b-nav-item" id="margin">
        <div className="btn btn-primary" id="download">
          <p id="margin"> 
          <a target="_blank" id="resume-color" href="/resume/MARYIA VINOGRADOVA_SOFTWARE DEVELOPER RESUME.pdf" download="MaryiaVinogradova">
                    DOWNLOAD RESUME
          </a>
          </p>
        </div>
      </li>

  
      <li class="b-nav-item">
        <a style={headerStyle.anchors} className="link" href="https://www.linkedin.com/in/maryiavinogradova/" target="_blank "><i className="bi" id="icon">
            <FaLinkedinIn></FaLinkedinIn></i></a>
      </li>

      <li class="b-nav-item ">
        <a style={headerStyle.anchors} className="link " href="https://github.com/MaryiaVinogradova" target="_blank "><i className="bi" id="icon">
          <FaGithub></FaGithub></i></a>
      </li>
      </div>
    </div>
</div>
  );
}

export default Header;
