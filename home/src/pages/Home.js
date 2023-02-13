import React from 'react';
import "../style/Home.css"
import "../style/index.css"

import { Link } from "react-router-dom"

import jumboventures from "../assets/jumboventures.png"
import tufts from "../assets/tufts.png"
import dhs from "../assets/dhs.png"
import grapevine from "../assets/grapevine.png"

import image from "../assets/profile.jpg"
import phillies from "../assets/phillies.jpg"
import lake from "../assets/lake.jpg"
import cards from "../assets/cards.jpg"
import cat from "../assets/cat.jpg"
import code from "../assets/code.jpg"
import piano from "../assets/piano.jpg"
import cooking from "../assets/cooking.jpg"
import mma from "../assets/mma.jpg"

import js_meme from "../assets/js_meme.jpg"



const Home = () => {
    return ( 
        <div>
            <h2 className="block-quote">
                Hi, I’m Ben Skinner. I love learning, travelling, and getting to know people. I’m always looking for new ideas, new friends, and new experiences.
            </h2>

            <div className="profile-image-container">
                <img className="main-profile-image" src={image} alt="Ben"/>
            </div>

            <h3>What I've done so far</h3>

            <p>Here’s a very brief rundown of my life. If you want to see me brag about my skills and exaggerate 
                my accomplishments, checkout my <a target="_blank" href="https://www.linkedin.com/in/ben-skinner-profile/">LinkedIn profile</a>.</p>

            <p>If you're interested in my coding abilites, please see <Link to="/code">here</Link></p>

           <div className="history-section">

             <div className="history-row">
                <div className="history-image-container">
                    <img className="history-image" src={grapevine} />
                </div>
                <div className="history-text-container">
                    <h4>GrapeVine</h4>
                    <p>Since June of 2021, I've been co-founder of a startup to help people organize events with their friends more easily.
                        We have an active <a href="https://ucsdgrapevine.com/" target="_blank">web app</a> at 3 University of California campuses and a <a href="https://apps.apple.com/us/app/grapevine-find-plan-events/id1598191762" target="_blank">mobile app</a> for iOS.</p>
                </div>
            </div>

                <div className="history-row">
                    <div className="history-image-container">
                        <img className="history-image" src={jumboventures} />
                    </div>
                    <div className="history-text-container">
                        <h4>Jumbo Ventures</h4>
                        <p>I'm the co-founder of Jumbo Ventures, the student-run startup incubator at Tufts University.
                            Every week, we get an alum to come speak to our cohort about various apsects of the
                            entrepreneurial process. <a href="https://www.jumboventures.org/" target="_blank">Interested?</a>
                        </p>
                    </div>
                </div>

                <div className="history-row">
                    <div className="history-image-container">
                        <img className="history-image" src={tufts} />
                    </div>
                    <div className="history-text-container">
                        <h4>Tufts University</h4>
                        <p>I am a current member of the undergraduate class of 2024 at Tufts University majoring in computer 
                            science and minoring in economics. Last fall I studied abroad in Paris!</p>
                    </div>
                </div>

                <div className="history-row">
                    <div className="history-image-container">
                        <img className="history-image" src={dhs} />
                    </div>
                    <div className="history-text-container">
                        <h4>Davis Senior High School</h4>
                        <p>At DHS, I participated in my school’s Student Government, Speech and Debate, Quiz Bowl, and Model United Nations 
                            clubs, which taught me as much as my classes.</p>
                    </div>
                </div>
            </div>

            <h3>My Life Principles</h3>

                    <ol>
                        <li>
                            Live for yourself. Don’t let society or others tell you what to think, do, or feel. You are your primary concern, 
                            so take responsibility for your life. Above all, always be authentic. Never be fake or trade an 
                            ounce of your soul for anything. 
                        </li>
                        <li>
                            Remember that everyone on the planet is suffering in their own way. Be understanding and compassionate.
                        </li>
                        <li>
                            Always do the best you can in all of your roles. Whether as a student, as a friend, or as a business partner, 
                            be clear on what your responsibilities are and make sure to live up to them.
                        </li>
                        <li>
                            Have a good time. Remember to live in the present moment, remembering that every day or moment could be your last. Say yes to life.
                        </li>
                        <li>
                            Have courage. Be willing to suffer and make sacrifices to be the person you want to be.
                        </li>
                    </ol>

            <h3>12 random things</h3>

            <ul>
                <li>
                    Everybody has the same 24 hours in a day: If Michelangelo could paint the Sistine Chapel, Thomas Edison could patent over 
                    1,000 inventions, and Alexander the Great could conquer 2 million square miles, just think what you could accomplish.
                </li>
                <li>
                    A rich person is nothing but a poor person with money 
                </li>
                <li>
                    When you think of something funny today, know that it was me telepathically telling you a joke. You’re welcome.
                </li>
                <li>
                    My top 3 book recommendations: 1) The Power of Now – Eckart Tolle; 2) The Fountainhead – Ayn Rand; 3) Can’t Hurt Me – David Goggins
                </li>
                <li>
                    “You have enemies? Good. That means you’ve stood up for something, sometime in your life.” – Winston Churchill
                </li>
                <li>
                    If you think about it, every time you paint a room it gets a little smaller.
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Here’s the meaning of life.</a>
                </li>
                <li>
                    In a random selection of twenty-three persons there is a 50 percent chance that at least two of them 
                    celebrate the same birthdate. <a href="http://skepdic.com/lawofnumbers.html" target="_blank">Probability is fun.</a>
                </li>
                <li>
                    “What is a weed? A plant whose virtues have never been discovered” – Ralph Waldo Emerson
                </li>
                <li>
                    Et in Arcadia ego
                </li>
                <li>
                    Read <a href="https://czep.net/weblog/52cards.html" target="_blank">this article</a> and you’ll never look at a deck of cards the same way again.
                </li>
                <li>
                    Memes are an under-appreciated cultural force and merit more sophisticated academic discourse.
                </li>
            </ul>

            

            <h3>Some things I like</h3>

            <div className="image-gallery">
                <div className="image-gallery-col">
                    <div className="image-gallery-row">
                        <img src={phillies} className="image-row-image" alt="phillies"/>
                    </div>
                    <div className="image-gallery-row">
                    <img src={cooking} className="image-row-image" alt="cooking"/>
                    </div>
                    <div className="image-gallery-row">
                        <img src={cards} className="image-row-image" alt="card-fan" />
                    </div>
                    <div className="image-gallery-row">
                        <img src={lake} className="image-row-image" alt="lake" />
                    </div>

                </div>
                <div className="image-gallery-col">
                    <div className="image-gallery-row">
                        <img src={cat} className="image-row-image" alt="cat" />
                    </div>
                    <div className="image-gallery-row">
                        <img src={piano} className="image-row-image" alt="piano" />
                    </div>
                    <div className="image-gallery-row">
                        <img src={mma} className="image-row-image" alt="mixed martial arts" />
                    </div>
                    <div className="image-gallery-row">
                        <img src={code} className="image-row-image" alt="cards" />
                    </div>
                 </div>
            </div>

            <h3>A Poem</h3>

            <p className="block-quote">
                The sun in the distant mountain glows;<br />
                The Yellow River seaward flows.<br />
                You will find a grander sight,<br />
                By climbing to a greater height.<br />

            <p> – "On the Stork Tower” by Wang Zhihuan</p>
            </p>

            <h3>A Meme
            </h3>

            <div className="meme-container">
                <img className="meme" src={js_meme} />
            </div>
            


            <h3>One last thing</h3>

            <h2 className="block-quote">“Never regret a day in your life. Good days give happiness, bad days give experience, worst days give lessons, and best days give memories.”</h2>
       </div>
     );
}
 
export default Home;