import React, { Component } from 'react'
import styled from 'styled-components';
import willDetails from '../willWright'

const FilmList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(450px, 1fr));
`;

const FilmCard = styled.div`
    text-align: center;
`;

export default class Filmography extends Component {
    render() {
        const {filmography} = willDetails;
        return (
            <FilmList>
                {filmography.map((film, index)=> (
                    <FilmCard key={index}>
                        <h3>{film.name}</h3>
                        <a href={film.imdb} target="_blank" rel="noreferrer">
                            <img src={film.img} alt={film.name} width='150'/>
                        </a>
                        <h4>{film.role}</h4>
                        <h6>{film.company}, {film.year}</h6>
                    </FilmCard> 
                ))}
            </FilmList>
        )
    }
}
