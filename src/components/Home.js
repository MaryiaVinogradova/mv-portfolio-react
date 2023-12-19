import React from 'react';
import '../styles/bio.css';

import '../styles/Contact.css';
import Contact from './Contact';
import Header from './Header';
import Portfolio from './Portfolio';
import Footer from './Footer'

import { FaJava, FaCss3, FaReact, FaHtml5, FaRegSun } from "react-icons/fa";

import { SiWebpack } from "react-icons/si";
import { BsDot } from "react-icons/bs"


function Bio() {


    return (
    <div class="full-height">

      <div className="sidebar">

        <li class="b-nav-item ">
         <a 
          href="#me" id="style"
          >About Me</a>
        </li>

        <li class="b-nav-item ">
          <a 
           href="#skills" id="style"
           >Skills</a>
        </li>

        <li class="b-nav-item ">
          <a 
           href="#work" id="style"
           >Work</a>
        </li>

        <li class="b-nav-item ">
         <a 
           href="#school" id="style"
           >Education</a>
        </li>

        <li class="b-nav-item ">
         <a 
           href="#contact" id="style"
           >Contact Me</a>
        </li>

      </div>
  
      <div className="container d-flex p-0 justify-content-center">
        <div clasName="col-3 m-0 p-0" id='text-center'>
            <ul className="p-for-about-me text-center"> 
              <li id="hello">Hi, I'm</li>
              <li id="maryia">MARYIA </li>
              <li id="hello-sm">Full-Stack</li>
              <li id="hello-sm">Software Developer</li>
            </ul> 
        </div>
               
        <div className='col-9'>
          <Header></Header>
          <br></br>

             <img id="image" alt="my portrait" src="https://github.com/MaryiaVinogradova/mv-portfolio-react/blob/main/src/images/Vinogradova_Maryia-52.jpg?raw=true"/> 
        </div>
      </div>
      <br></br>

      <div className='row' id="about-pd-10">
         <div className='col-3' id="about">
            <div id="me">
              ABOUT ME
            </div>
          </div>

          <div className='col-2' id="icon-small">
            <img id="icon-side" alt="icon" src="https://github.com/MaryiaVinogradova/mv-portfolio-react/blob/main/src/images/1.1.jpeg?raw=true"></img>
          </div>

          <div className='col-7'>
          Motivated software developer with an extensive background in Building Architecture and Design, recently graduated from the University of Denver Full-Stack Coding Bootcamp. Creative problem solver with strong design, communication, and project management skills, looking for an opportunity to implement, advance, and expand my newly acquired technical skill set, working on challenging and fulfilling projects.
          </div>
      </div>
               

      <div className='row d-flex' id="skills">
        <div className='row gx-0' id="skills-head">

         <div className='col-3'>
         <div id="about">
            SKILLS
          </div>
         </div>
         

          <div className='col-3' id="head-skills">
            LANGUAGES:
          </div>
         <div className='col-3' id="head-skills">
            TECHNOLOGIES:
         </div>
         <div className='col-3' id="head-skills">
          <li id="color">CONCEPTS</li>
          <li id="color">&DATA:</li>
         </div>

        </div>

        <div className='row p-0 g-0'>

         <div className='col-3 p-0' id="skills">
          <div id="about">
            
          </div>
         </div>

         <div className='col-3 p-0' id="lang">
          <li>
            JavaScript <FaJava></FaJava>
          </li> 
          <li>
            CSS <FaCss3></FaCss3>
          </li> 
          <li>
            REACT <FaReact></FaReact>
          </li>
          <li>
            HTML <FaHtml5></FaHtml5>
          </li>
          <li>
            JSX <FaReact></FaReact>
          </li>
          <li>
            MVC <FaRegSun></FaRegSun>
          </li>
          <li>
            Webpack <SiWebpack></SiWebpack>
          </li>
                  
         </div>

         <div className='col-3 p-0' id="tech">
          <li>
            Mongoose <BsDot></BsDot>
          </li > 
          <li>
            Express <BsDot></BsDot>
          </li> 
          <li>
            MySql <BsDot></BsDot>
          </li>
          <li>
            MongoDB <BsDot></BsDot>
          </li>
          <li>
            Compass <BsDot></BsDot>
          </li>
          <li>
            Heroku <BsDot></BsDot>
          </li>
          <li>
            LightHouse <BsDot></BsDot>
          </li>
          <li>
            VS Code <BsDot></BsDot>
          </li>
          <li>
            MERN Stack <BsDot></BsDot>
          </li>
          <li>
            GraphQL <BsDot></BsDot>
          </li>
          <li>
            Apollo <BsDot></BsDot>
          </li>        
         </div>

         <div className='col-3 p-0' id="concepts">
          <li>
            JSON <BsDot></BsDot>
          </li> 
          <li>
            OOP <BsDot></BsDot>
          </li> 
          <li>
            API <BsDot></BsDot>
          </li>
          <li>
            RESTful web services <BsDot></BsDot>
          </li>
          <li>
            CRUD <BsDot></BsDot>
          </li>
          <li>
            Webpack <BsDot></BsDot>
          </li>
          <li>
            PWA <BsDot></BsDot>
          </li>
         </div>
        </div>    
      </div>

      <div className='row pd-10' id="about about-pd-10">
         <div className='col-3' id="about">
            <div id="work">
              WORK <br></br>SAMPLES
            </div>
          </div>

          <div className='col-2' id="icon-small">
            <img id="icon-side" alt="icon" src="https://github.com/MaryiaVinogradova/mv-portfolio-react/blob/main/src/images/3.3.jpeg?raw=true"></img>
          </div>

          <div className='col-7'>
          <Portfolio></Portfolio>
          </div>
      </div>

      <div className='row pd-10' id="education about-pd-10">
         <div className='col-3' id="school">
              EDUCATION
          </div>

          <div className='col-2' id="icon-small">
            <img id="icon-side" alt="icon" src="https://github.com/MaryiaVinogradova/mv-portfolio-react/blob/main/src/images/4.4.jpeg?raw=true"></img>
          </div>

          <div className='col-7 p-0'>
            <li>
              DU Bootcamp 
              - 2021-2022
            </li>
            <li>
              BNTU 
              - Master Degree in Architecture 2008-2014
            </li>
          </div>
          
      </div>

      <div className='row pd-10' id="education about-pd-10">
         <div className='col-3' id="about">
              CONTACT
          </div>

          <div className='col-2' id="icon-small">
          </div>

          <div className='col-7 p-0'>
          <Contact></Contact>
          </div>
      
      </div>
    </div>
    )

}

export default Bio;



