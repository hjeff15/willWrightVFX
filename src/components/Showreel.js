import React, { Component } from 'react'
import ReactPlayer from "react-player"
import styled from 'styled-components'

const ShowreelVid = styled.div`
    display: grid;
    justify-content: center;
    margin-left: 50vw;
    @media only screen and (max-width: 650px){
        grid-row-start: 1;
        grid-row-end: 3;
        margin-left: 0vw;
    }
`;

export default class Showreel extends Component {
    render() {
        return (
            <ShowreelVid>
                 <ReactPlayer url="https://vimeo.com/476581882" />
            </ShowreelVid>
            )
    }
}
