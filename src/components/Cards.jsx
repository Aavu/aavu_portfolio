import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion"

const CardStyles = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .ul {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin: 8px;
        padding: 8px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card {
        position: relative;
        width: 384px;
        height: 216px;
        box-shadow: 4px 4px 4px 0px var(--gray1);
        border: solid 8px var(--white);
        cursor: pointer;
        margin: 8px;

        transform: scale(1);
        transition-duration: 0.25s;

        transition-property: transform, width, box-shadow;
        &:hover {
            transform: scale(1.02);
            box-shadow: 4px 6px 10px 2px var(--gray1);
            .title {
                display: block;
            }
        }

        @media only screen and (max-width: 864px) {
            width: 256px;
            height: 144px;  
        }

        .title {
            display: none;
            position: absolute;
            top: 50%;
            width: 100%;
            transform: translateY(-50%);
            font-size: 16pt;
            color: var(--white);
            margin:0;
            text-align: center;
            font-weight: bolder;
            &.year {
                font-size: 10pt;
            }
            z-index: 10;
            pointer-events: none;
        }

        .dim-light {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0);
            transition: 0.25s ease-in-out;
            &:hover {
                background-color: rgba(0, 0, 0, 0.6);
                backdrop-filter: blur(8px);
            }
        }
    }
`;

export const Cards = ({ items, heading, category, callbackId }) => {
    const getThumbnail = (id) => {
        return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    }

    return (
        <CardStyles>
            <h1>{heading}</h1>
            <motion.div className='ul'>
                {items.map((item, idx) => (
                    (item.category === category) && <motion.div key={`card-${idx}`}
                        className='card'
                        layoutId={idx} onClick={() => callbackId(idx)}
                    >

                        <motion.h2 key={`title-${idx}`} className='title'>{item.title}</motion.h2>
                        <div key={`dim-${idx}`} className="dim-light" />
                        <motion.img key={`img-${idx}`} src={getThumbnail(item.youtubeID)} />
                    </motion.div>
                ))}
            </motion.div>
        </CardStyles>
    )
};
