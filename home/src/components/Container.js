import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

// icons
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaYoutube} from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import { stack as SideBar } from 'react-burger-menu'

const Container = (props) => {

    const [menuOpen, setMenuOpen] = useState(false)

    return ( 
        <div className="card-container">


            <div className="header-container">
                <div className="header">
                    <h1 className="menu-title"><a href="/">Benjamin Skinner</a></h1>
                    <ul className="menu">
                        <li><NavLink 
                            className={({ isActive }) => (isActive ? "menu-text-active" : "menu-text")} 
                            to="/">About Me</NavLink></li>
                        <li><NavLink 
                            className={({ isActive }) => (isActive ? "menu-text-active" : "menu-text")}
                            to="/get-in-touch">Get in Touch</NavLink></li>
                        <li><NavLink 
                            className={({ isActive }) => (isActive ? "menu-text-active" : "menu-text")}  
                            to="/some-thoughts">Some Thoughts</NavLink></li>
                    </ul>
                    {/* <FaBars className="hamburger-menu" size={25} onClick={() => setMenuOpen(true)}/>  */}

                    <SideBar 
                        onOpen={() => setMenuOpen(true)}
                        onClose={() => setMenuOpen(false)}
                        isOpen={menuOpen}
                        right 
                        push
                        //className="sidebar"
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
                    {/* <a href="#"><FaYoutube className="footer-link" color="white" size={50}/></a> */}
                </div>
            </div>
        </div>
     );
}
 
export default Container;