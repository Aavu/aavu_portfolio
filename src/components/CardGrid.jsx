import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion"
import { Cards } from './Cards';

const CardGridStyle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .open-card {
        position: fixed;
        padding: 1em;
        background-color: white;
        width: 80%;
        top: 8vh;
        z-index: 10;
        overflow: auto;
        max-height: 80%;
    }

    .dim-layer {
        position: absolute;
        height: 120%;
        width: 100%;
        left: 0;
        top: 0;
        backdrop-filter: blur(8px);
        background: rgba(0, 0, 0, 0.5);;
        opacity: 0;
    }

    .divider {
        min-height: 2px;
        width: 95%;
        margin: 2rem;
        background-color: var(--gray0);

    }

    iframe {
        width: 80%;
        height: 40vh;
        display: block;
        margin: auto;
    }

    .desc {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .text {
            text-align: justify;
            text-justify: inter-word;
            line-height: 2;
            padding: 0 48px 48px 48px;
        }
    }
`;

const CardGrid = ({ items, headings, lastLoc, location }) => {
    const [selectedId, setSelectedId] = useState(null);

    const categories = Object.keys(headings);

    // console.log(location, lastLoc);
    // const animateDirection = () => {
    //     if (location === lastLoc) {
    //         return 0;
    //     }
    //     if (location === '/project') {
    //         if (lastLoc === '/blog') {
    //             return -1;
    //         }
    //         return 1;
    //     }

    //     if (location === '/music') {
    //         if (lastLoc === '/blog' || lastLoc === '/project') {
    //             return 1;
    //         }
    //         return -1;
    //     }
    //     return 0;
    // }

    return (
        <motion.div
            key={`${categories[0]}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0 }}
        >
            < CardGridStyle >
                {categories.map((category, idx) => {
                    return (<>
                        <Cards key={`card-${idx}`} items={items} heading={headings[category]} category={category} callbackId={setSelectedId} />
                        <div key={`div-${idx}`} className='divider'></div>
                    </>)
                })}

                <AnimatePresence>
                    {(selectedId != null) && < motion.div className='open-card'
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.p className='desc'>
                            <h1 className="title">
                                {items[selectedId].title}
                            </h1>
                            <div className='text'>
                                {items[selectedId].description}
                            </div>

                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${items[selectedId].youtubeID}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>

                        </motion.p>
                    </motion.div>}
                    {(selectedId != null) && <motion.div className='dim-layer'
                        animate={{ opacity: 1 }}
                        onClick={() => setSelectedId(null)}
                        exit={{ opacity: 0 }}
                    >
                    </motion.div>}
                </AnimatePresence>
            </CardGridStyle >
        </motion.div>
    );
}

export default CardGrid;