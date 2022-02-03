import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md'
import { FaGithub, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin, FaGlobeAsia } from 'react-icons/fa'

const NavBarStyles = styled.div`
    z-index: 100;
    background-color: gray;
    ul {
        list-style-type: none;
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        text-align: center;
        li {
            display: inline-block;
            border-radius: 8px;
            transition: .2s ease background-color;
            margin: 0 8px;
            &:hover{
                background-color: black;
            }
        }
    }

    .mobile-menu-icon {
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 5rem;
        cursor: pointer;
        display: none;
        outline: none;
        font-size: 5rem;
    }

    .close-navbar-icon {
        display: none;
    }

    @media only screen and (max-width:768px){
        .mobile-menu-icon {
            display: block;
        }
        .close-navbar-icon {
            display: block;
        }
    }

    .navBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-link {
        text-decoration: none;
        padding: 8px 12px;
        margin: 0 8px;
        border-radius: 8px;
        font-size: 16pt;
        color: white;
        &:hover{
            background-color: black;
        }

        .active {
            color: black;
            font-weight: bolder;
        }
    }

    .media {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .media-items {
        padding: 0 8px;
    }

    .navbar-holder {
        display: flex;
        justify-content: space-between;
        margin: 0 32px;
    }
`;


export default function NavBar() {
    return (
        <NavBarStyles>
            <div className="navbar-holder">
                <div className="navBar">
                    {/* <div className="close-navbar-icon">
                    <MdClose />
                </div> */}
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/projects" className="nav-link">Projects</NavLink>
                </div>

                <div className="media">
                    <FaLinkedin className="media-items" />
                    <FaEnvelope className="media-items" />
                    <FaGlobeAsia className="media-items" />
                    <FaGithub className="media-items" />
                </div>
            </div>
            {/* <div className="mobile-menu-icon">
                <MdMenu />
            </div> */}
        </NavBarStyles>
    )
}