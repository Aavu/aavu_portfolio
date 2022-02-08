import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { projects } from '../assets/data/projects/projects';
import { motion, AnimatePresence } from "framer-motion"
import CardGrid from '../components/CardGrid';

const headings = {
    'project': "Projects",
    'research': "Research"
};

const Projects = ({ lastLoc }) => {
    console.log("in project", lastLoc);
    return (
        <CardGrid location="/projects" items={projects} headings={headings} lastLoc={lastLoc} />
    );
}

export default Projects;