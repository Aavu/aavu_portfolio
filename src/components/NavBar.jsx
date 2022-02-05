import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md'
import { FaGithub, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin, FaGlobeAsia, FaDownload } from 'react-icons/fa'

import cvPdf from '../assets/Aavu_CV.pdf'
import { saveAs } from "file-saver";

const NavBarStyles = styled.div`
    z-index: 100;
    background-color: #F27649;
    height: 50px;

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

    .media {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .media-items {
            padding: 0 8px;
        }

        button {
            cursor: pointer;
            border-radius: 10px;
            margin-right: 32px;
            padding: 6px;
            background-color: #731E16;
            color: white;
        }

        button:hover {
            background-color: #F29C6B;
        }
    }

    .navbar-holder {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 32px;
        
        .navBar {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 2;
        }

        .nav-link {
            text-decoration: none;
            font-size: 16pt;
            color: white;
            &:hover{
                background-color: #D96704;
                border-radius: 8px 8px 0px 0px;
            }

            &.active {
                color: black;
                background-color: #F2E2CE;
                border-radius: 8px 8px 0px 0px; 
                font-weight: bold;
            }

            /* Color Theme Swatches in Hex */
/* .Vintage-violin-on-the--sheet-music.-1-hex { color: #F2E2CE; }
.Vintage-violin-on-the--sheet-music.-2-hex { color: #D96704; }
.Vintage-violin-on-the--sheet-music.-3-hex { color: #BF4904; }
.Vintage-violin-on-the--sheet-music.-4-hex { color: #731702; }
.Vintage-violin-on-the--sheet-music.-5-hex { color: #260101; } */

            &.pad {
                padding: 12px 2vw;
            }

            &.name {
                font-weight: bolder;
                padding: 12px 8px;
            }
        }
    }
`;


export default function NavBar() {
    const savePdf = (e) => {
        saveAs(
            cvPdf, "Raghavasimhan_Sankaranarayanan_CV.pdf"
        );
    }

    return (
        <NavBarStyles>
            <div className="navbar-holder">
                <NavLink to="/" className="nav-link name">Raghavasimhan Sankaranarayanan</NavLink>
                <div className="navBar">
                    {/* <div className="close-navbar-icon">
                    <MdClose />
                </div> */}
                    <NavLink to="/about" className="nav-link pad">About</NavLink>
                    <NavLink to="/music" className="nav-link pad">Music</NavLink>
                    <NavLink to="/projects" className="nav-link pad">Research | Projects</NavLink>
                    <NavLink to="/blog" className="nav-link pad">Blog</NavLink>
                </div>

                <div className="media">
                    {/* <a href={cvPdf} target="_blank">
                    </a> */}
                    <button onClick={savePdf}><FaDownload /> Download CV</button>
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