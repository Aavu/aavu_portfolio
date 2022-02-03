import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { isVisible } from '@testing-library/user-event/dist/utils';

function importAll(r) {
    return r.keys().map(r)
}

const AboutImages = importAll(require.context('../assets/data/about', false, /\.(png|jpe?g|)$/));

const AboutMeStyle = styled.div`
    display: flex;
    justify-content: space-evenly;
    p {
        padding: 8px;
    }

    .slide-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        .slide {
            /* background-color: blue; */
        }   

        .arrow {
            font-size: 32pt;
            margin: 16px;
            cursor: pointer;
            flex: 1 100%;
        }

        .image {
            width: 30vw;
            max-height: 60vh;
            object-fit: cover;
            border-radius: 8px;
        }
    }
`;

export default function About() {
    const [current, setCurrent] = useState(0);
    const [width, setWidth] = useState('40vw');
    const [left, setLeft] = useState('0vw');
    const [top, setTop] = useState('0vh');
    const length = AboutImages.length;

    const nextSlide = () => {
        setCurrent((current + 1) % length);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    console.log(current);

    const imgHidden = (index) => {
        if (index === current) return 'inline';
        return 'none';
    }

    const handleMouseIn = (e) => {
        setWidth('42vw');
        setLeft("-16px");
        setTop("-16px");
    }

    const handleMouseOut = (e) => {
        setWidth('40vw');
        setLeft("0vw");
        setTop("0vh");
    }

    return (
        <AboutMeStyle>
            <div className="slide-container">
                <FaArrowAltCircleLeft className='arrow' onClick={prevSlide} />
                <div className="slide">
                    {AboutImages.map((url, idx, arr) => {
                        return (
                            <div style={{ display: imgHidden(idx) }} key={idx} onMouseEnter={handleMouseIn} onMouseOut={handleMouseOut}>
                                <img src={url} key={idx} className='image' />
                            </div>
                        )
                    })}
                </div>
                <FaArrowAltCircleRight className='arrow' onClick={nextSlide} />
            </div>

            <div>
                <p>I have been undergoing professional and intense violin training in Indian Classical Carnatic music since age of 4. Trained under the guidance of Sangeeta Kalanidhi, Padmashri. Kanyakumari Avasarala, I have performed in 2000+ concerts across the world.</p>
                <p>I have participated in numerous music competitions and has bagged winning prizes since childhood. I am an All India Radio (AIR) "B high" artist. AIR has over 20 million listeners across India.</p>
                <p>I am also a session musician, who has recorded for prominent composers. I have featured in more than 200 feature films and albums. I have been collaborating with various artists, bands and orchestras in India and across the world. I have also composed, arranged, produced, programmed and mixed for various independent and commercial productions.</p>
                <p>Apart from the Carnatic classical genre, I play the Western classical, Jazz, Melo-rock, Country, Blues, Irish, Arabic/Persian, Hindustani. I have the thirst to try and experiment different styles and genres. Being an electronics engineer, I have incorporated techniques; created my own versatility and uniqueness in both playing and the tones. These made my music unique and top the charts.</p>
                <p>I am active self-learner and love collecting instruments. This enables me to learn and play a lot of rare instruments such as the Duduk, Musical Saw, dan K’ni. I have been modifying and creating new instruments as well. I am the first to use a Talk-box in Indian Classical music to make the violin sing with lyrics!</p>
            </div>
        </AboutMeStyle>
    );
}
