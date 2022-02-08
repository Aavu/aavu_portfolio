import React from 'react';
import { Link } from "react-router-dom";
import { projects } from '../assets/data/projects/projects';
import { motion } from "framer-motion";
import styled from 'styled-components';

const DescStyles = styled.div`
`;

export const ProjectDesc = ({ id }) => {
    const { title, year, image, description } = projects[id];
    return (
        <DescStyles>
            <motion.div>
                <Link to="/projects" />
            </motion.div>
            <motion.div className="container" layoutId={`container-${id}`}>
                <h2>{title}</h2>
                <motion.div className='description-container'>
                    <span>{description}</span>
                </motion.div>
            </motion.div>

        </DescStyles>
    );
};
