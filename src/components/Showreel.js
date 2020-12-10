import React, { Component } from 'react'
import ReactPlayer from "react-player"
import styled from 'styled-components'

const ShowreelVid = styled.div`
    display: grid;
    justify-content: center;
    margin-left: 50vw;
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
