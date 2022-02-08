import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md'
import { FaGithub, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin, FaGlobeAsia, FaDownload } from 'react-icons/fa'
import cvPdf from '../assets/Aavu_CV.pdf'
import { saveAs } from "file-saver";
import { motion } from "framer-motion";

const NavBarStyles = styled.div`
    z-index: 100;
    height: 50px;

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
        route: "about"
    },
    {
        title: "Music",
        route: "music"
    },
    {
        title: "Projects | Research",
        route: "projects"
    },
    {
        title: "Blog",
        route: "blog"
    }
];

export default function NavBar({ lastLoc }) {
    const [page, setPage] = useState("/");

    const addNoHover = (pageId) => {
        if (pageId === page) {
            return "no-hover";
        }
        return null;
    }

    const savePdf = (e) => {
        saveAs(
            cvPdf, "Raghavasimhan_Sankaranarayanan_CV.pdf"
        );
    }

    return (
        <NavBarStyles>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div className="navbar-holder">
                    <motion.div className="name"
                        initial={{ x: (lastLoc === '/') ? -400 : 0 }}
                        animate={{ x: (page === '/') ? -400 : 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <NavLink to="/" className="nav-link name" onClick={() => setPage('/')}>Raghavasimhan Sankaranarayanan</NavLink>
                    </motion.div>
                    <div className="navBar">
                        {pages.map((p, idx) => (
                            <NavLink key={idx} to={`/${p.route}`} className={`nav-link pad ${addNoHover(p.route)}`} onClick={() => setPage(p.route)}>{p.title}</NavLink>
                        ))}
                    </div >

                    <div className="media">
                        <button onClick={savePdf}><FaDownload /> Download CV</button>
                        <FaLinkedin className="media-items" />
                        <FaEnvelope className="media-items" />
                        <FaGlobeAsia className="media-items" />
                        <FaGithub className="media-items" />
                    </div>
                </motion.div>
                <div className="divider"></div>
            </motion.div>
        </NavBarStyles >
    )
}