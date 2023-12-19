import React from 'react';
import '../styles/Portfolio.css';
import { GrHeroku } from "react-icons/gr"
import { FaGithub } from "react-icons/fa";

const cardStyle = {
    cardIcon: {
        color: '#8e979b',
        textAlign: 'center',
        padding: 0,
        margin: 10,
        alignItems: 'top',
    }

}

function Portfolio() {

 return (
    
    <div  classNmae = "container" id="portfolio">

        <div class="row">

         <div class="card-header d-flex align-items-center justify-content-center text-center">Connect 2 Call
         </div>

         <div className='col-4' id="padding">
          <img id="card-img" alt="icon" src="https://github.com/MaryiaVinogradova/mv-portfolio-react/blob/main/src/images/1.png?raw=true" />
         </div>
 
         <div className='col-8'>
         <div className='text'>
            <p class="p-0 m-0">USER STORY:</p>
            <p class="p-0 m-0">- AS a user, when i need help making a phone call as somebody who has telephobia</p>
            <p class="p-0 m-0">- THEN they'll navigate to the Connect-2-Caller Application.</p>
            <p class="p-0 m-0">- THEN the user can create an account or login</p>
            <p class="p-0 m-0">- THEN the user can make a post about the prospective phone call they need help making.</p>
            <p class="p-0 m-0">- THEN a fellow user can find the post and respond if they can help.</p>
            <p class="p-0 m-0">- THEN the users can commuicate to plan the call.</p>
            <p class="p-0 m-0">- THEN the users can leave a review or a positive comment about the experience.</p>
         </div>
         </div>

         <div class="card-footer text-white text-center" id="color-cr-ft">
            <a style={cardStyle.cardIcon} className="link " href="https://github.com/NilesHachmeister/connect-2-call" target="_blank "><i className="bi" id="icon">
            <FaGithub></FaGithub></i></a>
         </div>

        </div>

        <div class="row">

         <div class="card-header d-flex align-items-center justify-content-center text-center">Day Planner
         </div>
 
         <div className='col-8'>
          <div className='text'>
           This is one of the Day Planners that will help you coordinate your schedule during a day. Application shows your business hours and events per hour. Also, you can schedule the event, delete or modefy it. Each row is shaded in defferent color: past - grey; present - red; future - green. The present time and date of your time zone is located on the header.
          </div>
         </div>

         <div className='col-4' id="padding">
          <img id="card-img" alt="icon" src="https://github.com/MaryiaVinogradova/mv-portfolio-react/blob/main/src/images/2.png?raw=true" />
         </div>

         <div class="card-footer text-white text-center" id="color-cr-ft">
          <a style={cardStyle.cardIcon} className="link " href="https://maryiavinogradova.github.io/week5/" target="_blank "><i className="bi" id="icon">
          <FaGithub></FaGithub></i></a>
         </div>

        </div>

        <div class="row">

           <div class="card-header d-flex align-items-center justify-content-center text-center">Note Tracker
           </div>
   
            <div className='col-4' id="padding">
                <img id="card-img" alt="icon" src="https://github.com/MaryiaVinogradova/mv-portfolio-react/blob/main/src/images/3.png?raw=true" />
            </div>
            
           <div className='col-8'>
            <div className='text'>
            This is simple note taker for small business or any person. Easy to use. Just add your note and see it in chart on the left. You can add anything or delete/ change any notes. Simple interface helps.
            </div>
           </div>

            <div class="card-footer text-white text-center" id="color-cr-ft">
            <a style={cardStyle.cardIcon} className="link " href="https://github.com/MaryiaVinogradova/Note-tracker" target="_blank "><i className="bi" id="icon">
            <FaGithub></FaGithub></i></a>
            </div>

        </div>


        <div class="row">

         <div class="card-header d-flex align-items-center justify-content-center text-center">Weather Dashboard
         </div>
 
        <div className='col-8'>
         <div className='text'>
         Develop APP weather-checker. Target was to set list of researhed cities in storage, Set the 5 days of weather for current city and show in header current parameters for this city with icons, color indecator for UV factor. Using API's, grid templates.
         </div>
        </div>

        <div className='col-4' id="padding">
         <img id="card-img" alt="icon" src="https://github.com/MaryiaVinogradova/mv-portfolio-react/blob/main/src/images/4.png?raw=true" />
        </div>

        <div class="card-footer text-white text-center" id="color-cr-ft">
         <a style={cardStyle.cardIcon} className="link " href="https://maryiavinogradova.github.io/Weather-dashboard/" target="_blank "><i className="bi" id="icon">
            <FaGithub></FaGithub></i></a>
        </div>
        </div>


        <div class="row">

        <div class="card-header d-flex align-items-center justify-content-center text-center">E-Commerce-Back-End
        </div>

        <div className='col-4' id="padding">
         <img id="card-img" alt="icon" src="https://github.com/MaryiaVinogradova/mv-portfolio-react/blob/main/src/images/6.png?raw=true" />
        </div>
 
        <div className='col-8'>
         <div className='text'>
         This is DataBase usage example. How to interract with your database use GET, POST, PUT, DELETE - using routs to whole base or get information by ID. In this example Insomnia was used.
         </div>
        </div>

        <div class="card-footer text-white text-center" id="color-cr-ft">
         <a style={cardStyle.cardIcon} className="link " href="https://github.com/MaryiaVinogradova/E-Commerce-Back-End.git/" target="_blank "><i className="bi" id="icon">
            <FaGithub></FaGithub></i></a>
        </div>
        </div>


        <div class="row">

        <div class="card-header d-flex align-items-center justify-content-center text-center">Social-Network-API-NoSql
        </div>

        <div className='col-8'>
         <div className='text'>
         This assigment shows how to use API with MongoBD and Mongoose.
        </div>
       </div>

        <div className='col-4' id="padding">
         <img id="card-img" alt="icon" src="https://github.com/MaryiaVinogradova/mv-portfolio-react/blob/main/src/images/5.png?raw=true" />
        </div>

        <div class="card-footer text-white text-center" id="color-cr-ft">
         <a style={cardStyle.cardIcon} className="link " href="https://github.com/MaryiaVinogradova/Social-Network-API-NoSQL.git" target="_blank "><i className="bi" id="icon">
            <FaGithub></FaGithub></i></a>
         
        </div>
       </div>

       <div class="row">

        <div class="card-header d-flex align-items-center justify-content-center text-center">Manager MySql
        </div>

        <div className='col-4' id="padding">
         <img id="card-img" alt="icon" src="https://github.com/MaryiaVinogradova/mv-portfolio-react/blob/main/src/images/7.png?raw=true" />
        </div>

        <div className='col-8'>
         <div className='text'>
         As a manager I want to see all my departments, employees, roles and salaries. I want to manege all of this and simly modify as needed.
        </div>
       </div>

        <div class="card-footer text-white text-center" id="color-cr-ft">
         <a style={cardStyle.cardIcon} className="link " href="https://github.com/MaryiaVinogradova/Manager-Mysql.git" target="_blank "><i className="bi" id="icon">
            <FaGithub></FaGithub></i></a>
         
        </div>
       </div>

    </div>
    );
}

export default Portfolio;
