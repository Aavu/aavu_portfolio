import React, { useState } from 'react';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin, FaDownload } from 'react-icons/fa'
// import cvPdf from '../assets/Aavu_CV.pdf'
import { saveAs } from "file-saver";

const MenuStyles = styled.div`
    .close-icon {
        margin-bottom: 32px;
        font-size: 24pt;
        cursor: pointer;
    }

    .nav-items {
        position: absolute;
        right: 16px;
        top: 0;
        padding: 16px;
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(4px);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 16px;
        transition: top 0.5s ease-in-out;
        &.closed {
            top: -240px;
        }
    }

    .nav-link {
        text-decoration: none;
        color: var(--black);
        font-size: 16pt;
        font-weight: 1000;
    }

    .menu-icon {
        position: absolute;
        right: 16px;
        top: 0;
        font-size: 24pt;
        padding: 16px;
        display: none;
        cursor: pointer;
        &.closed {
            display: block;
        }
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 64px;
        padding: 0;
        margin: 0;
        background-color: rgba(200, 200, 200, 0.25);
        backdrop-filter: blur(16px);
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            margin: 32px;
            font-size: 12pt;
            cursor: pointer;
            font-weight: 400;
            border-color: var(--gray2);
            border-width: 1px;
            padding: 6px;
            background: var(--white);
            color: var(--black);
            transition: all 0.2s ease-in-out;

            &:hover {
                font-weight: 600;
                transform: scale(1.01);
            }
        }

        .media {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin: 16px;
            font-size: 16pt;
        }

        .short-text {
            display: none;
        }

        .full-text {
            display: inline-block;
        }

        @media (max-width: 512px) {
            .short-text { display: inline-block;}
            .full-text {display: none;}
        }
    }

`;

export const MobileMenu = ({ pages, addNoHoverFn, setPageCallback }) => {
    const [closeState, setCloseState] = useState(true);

    const handleNavClick = (p) => {
        setCloseState(true);
        setPageCallback(p.route);
    };

    // const savePdf = (e) => {
    //     saveAs(
    //         cvPdf, "Raghavasimhan_Sankaranarayanan_CV.pdf"
    //     );
    // }

    return (
        <MenuStyles>
            <motion.div>
                <MdMenu className={`menu-icon ${closeState ? "closed" : ""}`} onClick={() => setCloseState(false)} />
                <motion.div className={`nav-items ${closeState ? "closed" : ""}`}>
                    <MdClose className='close-icon' onClick={() => setCloseState(true)} />
                    {pages.map((p, idx) => (
                        <NavLink key={idx} to={`/${p.route}`} className={`nav-link pad ${addNoHoverFn(p.route)}`} onClick={() => handleNavClick(p)}>{p.title}</NavLink>
                    ))}
                </motion.div>
                {/* Footer */}
                <motion.div className='footer'>
                    <div className="media">
                        <a target="_blank" href="https://linkedin.com/in/aavu"><FaLinkedin className="media-items" /></a>
                        <a target="_blank" href="mailto:aavu@techitunes.com"><FaEnvelope className="media-items" /></a>
                        <a target="_blank" href="https://github.com/aavu"><FaGithub className="media-items" /></a>
                        <a target="_blank" href="https://www.facebook.com/aavusimma"><FaFacebook className="media-items" /></a>
                        <a target="_blank" href="https://www.instagram.com/violinsimma"><FaInstagram className="media-items" /></a>
                    </div>
                    <a target="_blank" href="/Aavu_CV.pdf"><button>
                        <span className="full-text"><FaDownload /> Download CV</span>
                        <span className="short-text"><FaDownload /> CV</span>
                    </button></a>
                    {/* <button onClick={savePdf}>
                        <FaDownload /> Download CV
                    </button> */}
                </motion.div>
            </motion.div>
        </MenuStyles>
    );
};
