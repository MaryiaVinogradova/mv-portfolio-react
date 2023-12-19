import React from 'react';
import '../styles/bio.css';

import { useState, useEffect } from 'react';
import '../styles/Contact.css';
import { validateEmail } from '../utils/validateEmail'

const cardStyle = {
    cardIcon: {
        color: '#8e979b',
        textAlign: 'center',
        padding: 0,
        margin: 10,
        alignItems: 'top',
    }

}

function Bio() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    const [validEmail, setValidEmail] = useState(false);

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
            if (validateEmail(inputValue)) {
                setValidEmail(true)
            } else {
                setValidEmail(false)
            }


        } else {
            setMessage(inputValue)
        }
    };



    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log("submited.....");

        setName("")
        setEmail("")
        setMessage("")

    };


    const renderMessage = () => {

        if (name !== "" && !validEmail && message) {
            return <div id="alert-message">Please enter a valid email</div>
        } else if (name !== "" && validEmail && message === "") {
            return <div id="alert-message">Please enter a valid message</div>
        } else {
            <div id="alert-message"></div>
        }


    };

    return (
        <div class="full-height">
         <div id="bio" className="container">

            <img id="image" alt="my portrait" src="https://github.com/MaryiaVinogradova/Portfolio-react/blob/main/src/images/Vinogradova_Maryia-52.jpg?raw=true" />

            <div className="main-content-div">
                <p className="p-for-about-me">I am an architect with more than 8 years of experience. Looking for a new opportunity in IT as full-stack developper. 
             
                </p>
            </div>
         </div>

         <div class="container" id="portfolio">
      <div class="row">
        <div class="col-lg-5 col-sm-6 col-md-6" id="top">
            <div class="card h-100">

            <div class="row ">
                <img id="card-img" alt="my portrait" src="https://github.com/MaryiaVinogradova/Portfolio/blob/main/src/images/1.png?raw=true" />
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

    <div id="contact" className="container">


            <form>
                <h2>Contact</h2>
                
             <div class="form-container">

                <div className="form-holder">
                    <label htmlFor="name">Name:</label>
                    <br></br>
                    <input
                        className="form-values"
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="name"
                        id="name"
                    />
                </div>

                <div className="form-holder">
                    <label htmlFor="email">Email address:</label>
                    <br></br>
                    <input
                        className="form-values"
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email address"
                        id="email"
                    />

                </div>

                <div className="form-holder">
                    <label htmlFor="message">Message:</label>
                    <br></br>
                    <textarea
                        className="form-values"
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        rows="6"
                        id="message"
                    />
                </div>
             </div>
             
                {renderMessage()}
                <button
                    onClick={handleFormSubmit}
                    className="btn btn-primary"
                    type="submit"
                    id="submit"
                >
                    Submit
                </button>



            </form>


        </div>

        </div>
    )

}

export default Bio;


