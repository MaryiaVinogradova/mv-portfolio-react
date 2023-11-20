import React from 'react';
import '../styles/Footer.css'

const footerStyle = {
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

function Footer() {
    return (
  <footer >
  <div class="container center">  
  
    <div class=""> 
      <div style={footerStyle.mainDiv}>
        <ul class="navbar navbar flex-row align-items-top" id="p-0">
  
        <li class="b-nav-item ">
        <a style={footerStyle.anchors} className="link " href="https://github.com/MaryiaVinogradova" target="_blank "><i className="bi bi-github" id="icon"></i></a>
        </li>  
  
        <li class="b-nav-item ">
        <a style={footerStyle.anchors} className="link" href="https://www.linkedin.com/in/maryiavinogradova/"
                target="_blank "><i className="bi bi-linkedin" id="icon"></i></a>
        </li>
  
        </ul>
        <div>
        <a style={footerStyle.anchors}>p: +1(612) 423 9278</a>
    
        </div>
        </div>
    </div> 
  </div>    
  </footer>
    );
  }

export default Footer;