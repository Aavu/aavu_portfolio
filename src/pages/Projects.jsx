import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { projects } from '../assets/data/projects/projects';
import { motion } from "framer-motion"

const ProjectsStyle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .ul {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin: 8px;
        padding: 8px;
    }

    .container {
        width: 160px;
        height: 240px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 6px 10px 16px -2px #777;
        border: solid 8px #F2E2CE;
        cursor: pointer;
        margin: 8px;

        transform: scale(1);
        transition-duration: 0.25s;

        transition-property: transform, width;
        &:hover {
            transform: scale(1.04);
        }

        .title {
            color: #F2E2CE;
            background-image: linear-gradient(to right, #731702 50%, #BF4904);
            padding: 8px;
            margin:0;
            border-radius: 8px 8px 0 0;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0 0 8px 8px;
    }

    .description {
        position: absolute;
        top: 16vh;
        width: 80%;
        background-color: rgba(0, 0, 0, 0.6);
        box-shadow: 6px 10px 16px -2px #777;
        border-radius: 16px;
        backdrop-filter: blur(16px);
        color: white;
        padding: 32px;
        visibility: hidden;
        opacity: 0;
        transition-duration: 0.5s;
        /* transition-property: opacity; */
        &.active {
            visibility: visible;
            opacity: 100%;
        }
    }
`;

export default function Projects() {
    const wrapperRef = useRef(null);
    const [descStat, setDescStat] = useState("")
    const [activeCard, setActiveCard] = useState(null)

    const onClick = (proj) => {
        setActiveCard(proj);
        setDescStat("active");
    }

    const useClickAwayListener = () => {
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                    setDescStat("");
                }
            }

            document.addEventListener("mouseup", handleClickOutside);

            return () => {
                document.removeEventListener("mouseup", handleClickOutside);
            };
        }, [wrapperRef]);

    }

    useClickAwayListener();

    return (
        <ProjectsStyle>
            <h1>Projects</h1>
            <div className='ul'>
                {projects.map((project, idx) => (
                    <div key={idx} className="container" onClick={() => { onClick(project) }}>
                        <h4 className='title'>{project.title} ({project.year})</h4>
                        <img src={project.image} alt="" />
                    </div>
                ))}
            </div>
            <div className={`description ${descStat}`} ref={wrapperRef}>
                {(activeCard == null) ? "" : activeCard.description}
            </div>
        </ProjectsStyle>
    );
}
