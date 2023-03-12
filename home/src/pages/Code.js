import React from 'react';

import portfolio from "../assets/portfolio-site.png"
import grapevineSite from "../assets/grapevine-site-pic.png"
import mobileApp from "../assets/mobile-app.png"
import diceRoller from '../assets/diceroller.png'

const Code = () => {
    return ( 
        <>
        <h4 className="page-title">Code Porfolio</h4>

        <p style={{ marginBottom: "50px"}}>I love full-stack web and app development, mostly using JavaScript. I also feel confident with Pyton, C++, and C.</p>
        <p>Here's a few things I've built. I've also got about 3 years of CS course projects that I can't post publicly. I have code samples in my 
            private GitHub repo if you want to see it.
        </p>

    <div className="portfolio-section">

        <div className="portfolio-row">
            <div className="portfolio-image-container">
                <a href="https://benjaminkskinner.com" target="_blank" rel="noreferrer"><img alt="Screenshot of this site" className="portfolio-image" src={portfolio} /></a>
            </div>
            <div className="portfolio-text-container">
                <h4 className="portfolio-section-title">This Site</h4>
                <p className="portfolio-section-text">This site is built from scratch using React.js with SASS.</p>
            </div>
        </div>

        <div className="portfolio-row">
            <div className="portfolio-image-container">
                <img className="portfolio-image" src={mobileApp} alt="mobile app"/>
            </div>
            <div className="portfolio-text-container">
                <h4 className="portfolio-section-title">GrapeVine Mobile App</h4>
                <p className="portfolio-section-text">I built the app for my startup using React Native and Node.js with GraphQL. GrapeVine is a platform to
                    facilitate social events between friends.
                </p>
            </div>
        </div>

        <div className="portfolio-row">
            <div className="portfolio-image-container">
                <img className="portfolio-image" src={grapevineSite} alt="Screenshot of web app"/>
            </div>
            <div className="portfolio-text-container">
                <h4 className="portfolio-section-title">UC San Diego GrapeVine</h4>
                <p className="portfolio-section-text">The web app served as an MVP and test ground for GrapeVine. It has seen over 20,000 users.
                Uses MERN stack. We took down the app in March 2023 when GrapeVine was dissolved.
                </p>
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