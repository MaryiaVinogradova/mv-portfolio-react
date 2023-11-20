import React from 'react';
import '../styles/Portfolio.css';

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
    
    <div class="container" id="portfolio">
      <div class="row">
        <div class="col-lg-5 col-sm-6 col-md-6" id="top">
            <div class="card h-100">

            <div class="row ">
                <img id="card-img" alt="my portrait" src="https://github.com/MaryiaVinogradova/Portfolio-react/blob/main/src/images/1.png?raw=true" />
            </div>
            
           <div class="card-body">
            <div class="card-header d-flex align-items-center justify-content-center text-center">Note Tracker</div>
            <div>
            This is simple note taker for small business or any person. Easy to use. Just add your note and see it in chart on the left. You can add anything or delete/ change any notes. Simple interface helps.
            </div>
           </div>

            <div class="card-footer text-white text-center">
            <a style={cardStyle.cardIcon} className="link" href="https://note-tracker-app-mv.herokuapp.com/" target="_blank "><i className="bi bi-github" id="cardIcon"></i></a>
            </div>
            </div>

        </div>

        <div class="col-lg-5 col-sm-6 col-md-6" id="top">
        <div class="card h-100">

            <div class="row">
                <img id="card-img" alt="my portrait" src="https://github.com/MaryiaVinogradova/Portfolio/blob/main/src/images/2.png?raw=true" />
                
            </div>

           <div class="card-body">
            <div class="card-header d-flex align-items-center justify-content-center text-center">Weather Dashboard</div>
            <div>
            Develop APP weather-checker. Target was to set list of researhed cities in storage, Set the 5 days of weather for current city and show in header current parameters for this city with icons, color indecator for UV factor. Using API's, grid templates.
            </div>
           </div>

            <div class="card-footer text-white text-center">
            <a style={cardStyle.cardIcon} className="link " href="https://github.com/MaryiaVinogradova/Weather-dashboard.git" target="_blank "><i className="bi bi-github" id="cardIcon"></i></a>
            </div>
            </div>

        </div>

        <div class="col-lg-5 col-sm-6 col-md-6" id="top">
        <div class="card h-100">

            <div class="row">
                <img id="card-img" alt="my portrait" src="https://github.com/MaryiaVinogradova/Portfolio/blob/main/src/images/3.png?raw=true" />  
            </div>

           <div class="card-body">
            <div class="card-header d-flex align-items-center justify-content-center text-center">E-Commerce-Back-End</div>
            <div>
            This is DataBase usage example. How to interract with your database use GET, POST, PUT, DELETE - using routs to whole base or get information by ID. In this example Insomnia was used.
            </div>
           </div>

            <div class="card-footer text-white text-center">
            <a style={cardStyle.cardIcon} className="link " href="https://github.com/MaryiaVinogradova/E-Commerce-Back-End.git" target="_blank "><i className="bi bi-github" id="cardIcon"></i></a>
            </div>
            </div>

        </div>

        <div class="col-lg-5 col-sm-6 col-md-6" id="top">
        <div class="card h-100">

            <div class="row">
                <img id="card-img" alt="my portrait" src="https://github.com/MaryiaVinogradova/Portfolio/blob/main/src/images/4.png?raw=true" />
                
            </div>
 
           <div class="card-body">
            <div class="card-header d-flex align-items-center justify-content-center text-center">Social-Network-API-NoSql</div>
            <div>
            This assigment shows how to use API with MongoBD and Mongoose.
            </div>
           </div>

            <div class="card-footer text-white text-center">
            <a style={cardStyle.cardIcon} className="link " href="https://github.com/MaryiaVinogradova/Social-Network-API-NoSQL.git" target="_blank "><i className="bi bi-github" id="cardIcon"></i></a>
            </div>
        </div>
        </div>

       </div> 

    </div>
    );
}

export default Portfolio;