import React from 'react';
import '../styles/Footer.css'

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const footerStyle = {
    mainDiv: {
      justifyContent: 'space-around',
      textAlign: 'top',

  },
    anchors: {
      color: '#8e979b',
      padding: 0,
      margin: 0
  }
}

function Footer() {
    return (
  <footer >
  <div class="container center">  
  
    <div> 
      <div style={footerStyle.mainDiv}>
        <ul class="navbar navbar flex-row align-items-top">
  
        <li class="b-nav-item">
        <a style={footerStyle.anchors} className="link " href="https://github.com/MaryiaVinogradova" target="_blank "><i className="bi m-0" id="icon">
          <FaGithub></FaGithub></i></a>
        </li>  
  
        <li class="b-nav-item">
        <a style={footerStyle.anchors} className="link" href="https://www.linkedin.com/in/maryiavinogradova/" target="_blank "><i className="bi m-0" id="icon">
            <FaLinkedinIn></FaLinkedinIn></i></a>
        </li>
        </ul>

        <div style={footerStyle.anchors}>
         p: +1(612) 423 9278
        </div>

        </div>
    </div> 
  </div>    
  </footer>
    );
  }

export default Footer;
