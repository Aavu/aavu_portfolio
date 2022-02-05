import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

function importAll(r) {
    return r.keys().map(r)
}

const AboutImages = importAll(require.context('../assets/data/about', false, /\.(png|jpe?g|)$/));

const AboutMeStyle = styled.div`
    height: calc(max(100vh, 100%) - 50px);
    h1 {
        width: 100%;
        text-align: center;
        padding-top: 2rem;
        margin: 0;
    }

    .content {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;

        .text-container {
            margin: 2rem 6rem 5rem 4rem;
            p {
                text-align: justify;
                padding: 8px;
                line-height: 2;
            }
        }

        .slide-container {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            width: 100%;
            margin-left: 6rem;
            margin-top: 4rem;
            .slide {
                /* background-color: blue; */
            }   

            .arrow {
                font-size: 32pt;
                margin: 16px;
                cursor: pointer;
                flex: 1 100%;
                user-select: none;
            }

            .image {
                width: 30vw;
                max-height: 80vh;
                object-fit: cover;
                border-radius: 8px;
                user-select: none;
                box-shadow: 6px 10px 16px -2px #777;
                cursor: pointer;
            }

            .image-container {
                /* display: none; */
                opacity: 0;
                transform: scale(.95);
                transition-duration: 1s ease;
            }

            .image-container.active {
                /* display: inline-block; */
                opacity: 1;
                transition-duration: 0.25s;
                transform: scale(1);
            }

            .image-container:hover {
                transform: scale(1.02);
            }

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

    const hiddenStat = (index) => {
        if (index === current) return 'image-container active';
        return 'image-container';
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
            <h1>About Me</h1>
            <div className="content">

                <div className="slide-container">
                    <FaArrowAltCircleLeft className='arrow' onClick={prevSlide} />
                    <div className="slide">
                        {AboutImages.map((url, idx, arr) => {
                            return (
                                <div key={idx} className={hiddenStat(idx)}>
                                    {(idx === current) && <img src={url} key={idx} className='image' />}
                                </div>
                            )
                        })}
                    </div>
                    <FaArrowAltCircleRight className='arrow' onClick={nextSlide} />
                </div>

                <div className='text-container'>
                    <p>I have been undergoing professional and intense violin training in Indian Classical Carnatic music since age of 4. Trained under the guidance of Sangeeta Kalanidhi, Padmashri. Kanyakumari Avasarala, I have performed in 2000+ concerts across the world.</p>
                    <p>I have participated in numerous music competitions and has bagged winning prizes since childhood. I am an All India Radio (AIR) "B high" artist. AIR has over 20 million listeners across India.</p>
                    <p>I am also a session musician, who has recorded for prominent composers. I have featured in more than 200 feature films and albums. I have been collaborating with various artists, bands and orchestras in India and across the world. I have also composed, arranged, produced, programmed and mixed for various independent and commercial productions.</p>
                    <p>Apart from the Carnatic classical genre, I play the Western classical, Jazz, Melo-rock, Country, Blues, Irish, Arabic/Persian, Hindustani. I have the thirst to try and experiment different styles and genres. Being an electronics engineer, I have incorporated techniques; created my own versatility and uniqueness in both playing and the tones. These made my music unique and top the charts.</p>
                    <p>I am active self-learner and love collecting instruments. This enables me to learn and play a lot of rare instruments such as the Duduk, Musical Saw, dan K’ni. I have been modifying and creating new instruments as well. I am the first to use a Talk-box in Indian Classical music to make the violin sing with lyrics!</p>
                </div>
            </div>
        </AboutMeStyle>
    );
}
