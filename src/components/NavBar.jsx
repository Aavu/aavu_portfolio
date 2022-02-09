import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { FaGithub, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin, FaDownload } from 'react-icons/fa'
// import cvPdf from '../assets/Aavu_CV.pdf'
import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import { MobileMenu } from "./MobileMenu";

const NavBarStyles = styled.div`
    z-index: 100;
    height: 50px;
    position: relative;
    .short-text {
        display: none;
    }

    .mobile-menu {
        display: none;
        @media only screen and (max-width: 800px) {
            display: block;
        }
    }

    @media (max-width: 1200px) {
        .short-text { display: inline-block;}
        .full-text {display: none;}
    }

    .media {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .media-items {
            cursor: pointer;
            padding: 0 8px;
            color: var(--gray2);
            transition: all 0.2s ease-in-out;
            &:hover {
                color: var(--black);
                transform: scale(1.1);
            }
        }

        button {
            cursor: pointer;
            font-weight: 400;
            border-color: var(--gray2);
            border-width: 1px;
            margin-right: 32px;
            padding: 6px;
            background: var(--white);
            color: var(--black);
            transition: all 0.2s ease-in-out;

            &:hover {
                font-weight: 600;
                transform: scale(1.01);
            }
        }

        @media only screen and (max-width: 800px) {
            display: none;
        }
    }

    .navbar-holder {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 32px;
        height: 50px;
        
        .navBar {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 2;

            @media only screen and (max-width: 800px) {
                display: none;
            }
        }

        .nav-link {
            text-decoration: none;
            font-size: 16pt;
            color: var(--gray1);
            transition: 0.2s ease-in-out;
            &:hover{
                color: var(--gray4);
                transform: scale(1.01);
            }

            &.no-hover {
                pointer-events: none;
            }

            &.active {
                color: var(--black);
                background-color: var(--white);
                font-weight: bold;
            }

            &.pad {
                padding: 12px 2vw;
            }

            @media only screen and (max-width: 800px) {
                display: inline-block;
                margin-left: 50vw;
                transform: translateX(-100%);
            }
        }
    }

    .divider {
        background-color: var(--gray2);
        height:2px;
        margin: 2px 32px;
    }
`;

const pages = [
    {
        title: "About",
        shortTitle: "About",
        route: "about"
    },
    {
        title: "Music",
        shortTitle: "Music",
        route: "music"
    },
    {
        title: "Projects | Research",
        shortTitle: "Research",
        route: "projects"
    },
    // {
    //     title: "Blog",
    //     route: "blog"
    // }
];

export default function NavBar({ lastLoc }) {
    const [page, setPage] = useState("/");

    const addNoHover = (pageId) => {
        if (pageId === page) {
            return "no-hover";
        }
        return null;
    }

    // const savePdf = (e) => {
    //     saveAs(
    //         cvPdf, "Raghavasimhan_Sankaranarayanan_CV.pdf"
    //     );
    // }

    return (
        <NavBarStyles>
            <motion.div className="mobile-menu">
                <MobileMenu pages={pages} addNoHoverFn={addNoHover} setPageCallback={setPage} />
            </motion.div>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div className="navbar-holder">
                    <motion.div className="name"
                        initial={{ x: (lastLoc === '/') ? -500 : 0 }}
                        animate={{ x: (page === '/') ? -500 : 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <NavLink to="/" className="nav-link name" onClick={() => setPage('/')}>
                            <span className="full-text">Raghavasimhan Sankaranarayanan</span>
                            <span className="short-text">Aavu</span>
                        </NavLink>
                    </motion.div>
                    <div className="navBar">
                        {pages.map((p, idx) => (
                            <NavLink key={idx} to={`/${p.route}`} className={`nav-link pad ${addNoHover(p.route)}`} onClick={() => setPage(p.route)}>{p.title}</NavLink>
                        ))}
                    </div >

                    <div className="media">
                        <a target="_blank" href="/Aavu_CV.pdf"><button>
                            <span className="full-text"><FaDownload /> Download CV</span>
                            <span className="short-text"><FaDownload /> CV</span>
                        </button></a>
                        <a target="_blank" href="https://linkedin.com/in/aavu"><FaLinkedin className="media-items" /></a>
                        <a target="_blank" href="mailto:aavu@techitunes.com"><FaEnvelope className="media-items" /></a>
                        <a target="_blank" href="https://github.com/aavu"><FaGithub className="media-items" /></a>
                        <a target="_blank" href="https://www.facebook.com/aavusimma"><FaFacebook className="media-items" /></a>
                        <a target="_blank" href="https://www.instagram.com/violinsimma"><FaInstagram className="media-items" /></a>


                    </div>
                </motion.div>
                <div className="divider"></div>
            </motion.div>
        </NavBarStyles >
    )
}