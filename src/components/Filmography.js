import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components';
import willDetails from '../willWright'

// Keyframes
const ImageFade = keyframes`
    0% {opacity: 0}
    100%{opacity: 1}
`;
// Styles
const FilmList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(35vw, 1fr));
    @media only screen and (max-width: 650px){
        grid-row-start: 1;
        grid-row-end: 3;
        margin-left: 0vw;
        grid-template-columns: repeat(2, minmax(35vw, 1fr));
    }
    @media only screen and (max-width: 400px){
        grid-template-columns: repeat(1, minmax(35vw, 1fr));
    }
`;

const FilmCard = styled.div`
    text-align: center;
    animation-name: ${ImageFade};
    animation-duration: 1s;
    animation-iteration-count: 1;
    z-index: -1;
`;

const Image = styled.img`
    animation-name: ${ImageFade};
    animation-duration: 1s;
    animation-iteration-count: 1;
`;

export default class Filmography extends Component {
    render() {
        const {filmography} = willDetails;
        return (
            <FilmList>
                {filmography.map((film, index)=> (
                <FilmCard key={index}>
                    <a href={film.imdb} target="_blank" rel="noopener noreferrer">
                    <Image src={film.img} alt={film.name} width='150'/>
                    </a>
                    <h3>{film.name}</h3>
                    <h4>{film.role}</h4>
                    <h6>{film.company}, {film.year}</h6>
                </FilmCard> 
                ))}
            </FilmList>
        )
    }
}
