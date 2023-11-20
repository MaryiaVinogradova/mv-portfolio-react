import React from 'react';
import '../styles/Resume.css';

function Resume() {
    return (
    <div id="resume" className="container">

        <div>
            <h2>Resume</h2>
            <div>
            I am newly graduated <b>Full-Stack Developer</b> seeking an <b>entry-level position</b> where I can use my skills in coding, troubleshooting complex problems, improve my knowledge and grow. 

            Wiling to relocate to California state.
            </div>

            <br></br>

        <div class="row">
        <h2>My Knowleges</h2>

          <div class="col-6"> 
            <h3 class="font">Front-end Proficencies</h3>
            <ul className="list-group">
                <li className="list-item">HTML</li>
                <li className="list-item">CSS</li>
                <li className="list-item">JavaScript</li>
                <li className="list-item">JQuery</li>
                <li className="list-item">Responsive Designs</li>
                <li className="list-item">React</li>
                <li className="list-item">Bootstrap and other frameforks</li>
            </ul>
          </div>

          <div class="col-6">
            <h3 class="font">Back-end Proficencies</h3>
            <ul className="list-group">
                <li className="list-item">APIs</li>
                <li className="list-item">Node</li>
                <li className="list-item">Express</li>
                <li className="list-item">MySQL, Sequelize</li>
                <li className="list-item">MongoDB, Mongoose</li>
                <li className="list-item">REST</li>
            </ul>
            </div>
        </div>
        </div>

        <br></br>

        <div>
            <h2 class="background">My Background</h2>
        <div class="row">
          <div class="col-6">
            <h3 class="font">Architecture</h3>
            <ul className="list-group">
                <li className="list-item">Revit</li>
                <li className="list-item">AutoCad</li>
                <li className="list-item">3ds MAX | Corona Render | VR</li>
                <li className="list-item">Enscape</li>
                <li className="list-item">Office 360</li>
                <li className="list-item">BlueBeam</li>
            
            </ul>
          </div>

          <div class="col-6">
            <h3 class="font">Design</h3>
            <ul className="list-group">
                <li className="list-item">Photoshop</li>
                <li className="list-item">Illustrator</li>
                <li className="list-item">CorelDraw</li>
                <li className="list-item">SkethUp</li>
                
            </ul>
            </div>
        </div>
        </div>

        <br></br>

           <div class="container">   
           <div id="center">
    
            <div className="btn btn-primary" id="download">
                <p> 
                    <a id="resume-link" href="https://github.com/Maryia Vinogradova_Full-stack_Jr_2022.pdf" download="Maryia Vinogradova">
                    Download Resume
                </a>
                </p>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Resume;