import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

// icons
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";

import { stack as SideBar } from 'react-burger-menu'
import Resume from '../assets/resume.pdf'


const Container = (props) => {

    const [menuOpen, setMenuOpen] = useState(false)

    return ( 
        <div className="card-container">


            <div className="header-container">
                <div className="header">
                    <h1 className="menu-title"><a href="/">Benjamin Skinner</a></h1>
                    <ul className="menu">
                        <li>
                            <NavLink 
                                className={({ isActive }) => (isActive ? "menu-text-active" : "menu-text")} 
                                to="/">
                                    About Me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={({ isActive }) => (isActive ? "menu-text-active" : "menu-text")}
                                to="/get-in-touch">
                                    Get in Touch
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={({ isActive }) => (isActive ? "menu-text-active" : "menu-text")}  
                                to="/some-thoughts">
                                    Some Thoughts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={({ isActive }) => (isActive ? "menu-text-active" : "menu-text")}  
                                to="/code">
                                    Code
                            </NavLink>
                        </li>
                        <li>
                            <a 
                                className="menu-text"  
                                href={Resume} target="_blank" rel='noreferrer'>
                                    Resum{String.fromCharCode(233)}
                            </a>
                        </li>
                    </ul>

                    <SideBar 
                        onOpen={() => setMenuOpen(true)}
                        onClose={() => setMenuOpen(false)}
                        isOpen={menuOpen}
                        right 
                        push
                    >                        
                        <NavLink 
                            className={({ isActive }) => (isActive ? "menu-text" : "menu-text")} 
                            to="/"
                            onClick={() => setMenuOpen(false)}>About Me</NavLink>
                        <NavLink 
                            className={({ isActive }) => (isActive ? "menu-text" : "menu-text")}
                            to="/get-in-touch"
                            onClick={() => setMenuOpen(false)}>Get in Touch</NavLink>
                        <NavLink 
                            className={({ isActive }) => (isActive ? "menu-text" : "menu-text")}  
                            to="/some-thoughts"
                            onClick={() => setMenuOpen(false)}>Some Thoughts</NavLink>
                       <NavLink 
                            className={({ isActive }) => (isActive ? "menu-text-active" : "menu-text")}  
                            to="/code">Code</NavLink>
                    </SideBar>
                </div>
            </div>


            <div className="image-container">
            </div>

               <div className="content-container">
                <div className="content">
                    {props.children}
                </div>
               </div>

            <div className="footer">
                <div className="icon-container">
                    <a href="https://www.instagram.com/benjamin.k.skinner/" target="_blank"><FaInstagram className="footer-link" color="white" size={50}/></a>
                    <a href="https://twitter.com/benjmin_skinner" target="_blank"><FaTwitter className="footer-link" color="white" size={50}/></a>
                    <a href="https://www.facebook.com/benjamin.k.skinner" target="_blank"><FaFacebook className="footer-link" color="white" size={50}/></a>
                    <a href="https://www.linkedin.com/in/ben-skinner-profile/" target="_blank"><FaLinkedin className="footer-link" color="white" size={50}/></a>
                </div>
            </div>
        </div>
     );
}
 
export default Container;