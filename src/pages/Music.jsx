import React from 'react';
import styled from 'styled-components';
import { Cards } from '../components/Cards';
import CardGrid from '../components/CardGrid';
import { music } from '../assets/data/music/music';

const MusicStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const headings = {
    'live': "Live Performances",
    'arrangement': "Arrangements",
    'session': "Sessions"
};

export default function Music({ lastLoc }) {
    console.log("in music", lastLoc);
    return (
        <CardGrid location="/music" items={music} headings={headings} lastLoc={lastLoc} />
    );
}
