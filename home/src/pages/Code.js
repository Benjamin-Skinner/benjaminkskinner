import React from 'react';

import portfolio from "../assets/portfolio-site.png"
import grapevineSite from "../assets/grapevine-site-pic.png"
import mobileApp from "../assets/mobile-app.png"
import diceRoller from '../assets/diceroller.png'

const Code = () => {
    return ( 
        <>
        <h4 className="page-title">Code Porfolio</h4>

        <p style={{ marginBottom: "50px"}}>I love full-stack web and app development, mostly using JavaScript. I'm also good with Pyton, C++, and C. Here's a few things I've built:</p>

    <div className="portfolio-section">

        <div className="portfolio-row">
            <div className="portfolio-image-container">
                <a href="https://benjaminkskinner.com" target="_blank"><img className="portfolio-image" src={portfolio} /></a>
            </div>
            <div className="portfolio-text-container">
                <a href="https://benjaminkskinner.com" target="_blank"><h4 className="portfolio-section-title">This Site</h4></a>
                <p className="portfolio-section-text">This site is built from scratch using React.js with SASS, deployed using an express server.</p>
            </div>
        </div>

        <div className="portfolio-row">
            <div className="portfolio-image-container">
                <a href="https://apps.apple.com/us/app/grapevine-find-plan-events/id1598191762" target="_blank"><img className="portfolio-image" src={mobileApp} /></a>
            </div>
            <div className="portfolio-text-container">
                <a href="https://apps.apple.com/us/app/grapevine-find-plan-events/id1598191762" target="_blank"><h4 className="portfolio-section-title">GrapeVine Mobile App</h4></a>
                <p className="portfolio-section-text">I built the app for my startup using React Native and Node.js with GraphQL. GrapeVine is a platform to
                    facilitate social events between friends.
                </p>
            </div>
        </div>

        <div className="portfolio-row">
            <div className="portfolio-image-container">
                <a href="https://ucsdgrapevine.com/" target="_blank"><img className="portfolio-image" src={grapevineSite} /></a>
            </div>
            <div className="portfolio-text-container">
                <a href="https://ucsdgrapevine.com/" target="_blank"><h4 className="portfolio-section-title">UC San Diego GrapeVine</h4></a>
                <p className="portfolio-section-text">The web app serves as an MVP and test ground for GrapeVine. It has seen over 20,000 users.
                Uses MERN stack. (give it a mimute to load -- thanks Heroku)
                </p>
            </div>
        </div>

        <div className="portfolio-row">
            <div className="portfolio-image-container">
                <a href="https://hardcore-einstein-f7ff47.netlify.app/" target="_blank"><img className="portfolio-image" src={diceRoller} /></a>
            </div>
            <div className="portfolio-text-container">
                <a href="https://hardcore-einstein-f7ff47.netlify.app/" target="_blank"><h4 className="portfolio-section-title">JavaScript Die Roller</h4></a>
                <p className="portfolio-section-text">You know when you're a new programmer just starting to move beyond 'Hello world' and
                    into real projects? This is one of my first. It's vanilla JavaScript, simply here for old time's sake. </p>
            </div>
        </div>

        {/* <div className="portfolio-row">
            <div className="portfolio-image-container">
                <a href="#"><img className="portfolio-image" src={grapevineSite} /></a>
            </div>
            <div className="portfolio-text-container">
                <a href="#"><h4 className="portfolio-section-title">Baseball Analytics Dashboard</h4></a>
                <p className="portfolio-section-text">This site is built from scratch using React.js with SASS, deployed using an express server.</p>
            </div>
        </div> */}

        {/* <div className="portfolio-row">
            <div className="portfolio-image-container">
                <a href="#"><img className="portfolio-image" src={grapevineSite} /></a>
            </div>
            <div className="portfolio-text-container">
                <a href="#"><h4 className="portfolio-section-title">Baseball Analytics Dashboard</h4></a>
                <p className="portfolio-section-text">This site is built from scratch using React.js with SASS, deployed using an express server.</p>
            </div>
        </div> */}


    </div>

        </>
     );
}
 
export default Code;