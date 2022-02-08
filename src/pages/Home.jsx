import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { type } from '@testing-library/user-event/dist/type';
import { NavLink } from 'react-router-dom';

const HomeStyle = styled.div`
    .container {
        background-color: var(--white);
        margin-top: 10vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .bg {
            width: 500px;
            height:500px;
            background-color: var(--black);
            border-radius: 50%;
            overflow: clip;
        }

        img {
            width: 100%;
            height: 100%;
            /* left: 50px;
            top: -40px; */
            filter: contrast(1.2) brightness(1.2);
        }

        h1 {
            font-weight: 1000;
            font-size: 36pt;
            margin:0;
        }

        h2 {
            font-weight: 100;
            font-size: 36pt;
            margin:0;
        }

        .name {
            text-decoration: none;
            color: var(--black);
        }
    }

`;

export default function Home() {
    return (
        <motion.div
            key="/"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.5 }}
        >
            <HomeStyle>
                <motion.div className='container'>
                    <motion.div className="bg"
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1.0, type: "spring" }}
                    >
                        <NavLink to="/about" className="nav-link">
                            <div className="image">
                                <img src='/images/home/dp.png' alt="" />
                            </div>
                        </NavLink>
                    </motion.div>
                    <motion.div className="text"
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1.0, type: "spring" }}
                    >
                        <h2>Hello! I'm</h2>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1.0 }}
                            transition={{ delay: 1.0, duration: 1.5 }}
                        >
                            <NavLink to="/about" className="nav-link name">Raghavasimhan</NavLink>
                        </motion.h1>
                    </motion.div>
                </motion.div>
            </HomeStyle>
        </motion.div>
    );
}
