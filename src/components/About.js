import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import willDetails from '../willWright.js';

// Keyframes
const TextFade = keyframes`
    0% {opacity: 0}
    100%{opacity: 1}
`;
// Styles
const AboutStyle = styled.div`
    display: grid;
    grid-template-rows: 5vh 400px 10vh;
    grid-template-areas: 
        "top"
        "middle"
        "bottom";
    text-align: center;
    z-index: -1;
    @media only screen and (max-width: 850px){
        grid-template-rows: 5vh 400px 0vh;
    }
    @media only screen and (max-width: 650px){
        grid-template-rows: 0vh 1fr 0vh;
        margin-top: 4vh;
    }
`;

const TextStyle = styled.p`
    font-size: 2.6vw;
    padding: 0px 90px 0px 90px;
    grid-area: middle;
    text-align: center;
    animation-name: ${TextFade};
    animation-duration: 2s;
    animation-iteration-count: 1;
    @media only screen and (max-width: 850px){
        font-size: 2.9vw;
        padding: 0px 70px 0px 70px;
    }
    @media only screen and (max-width: 400px){
        font-size: 3.5vw;
        padding: 0px 70px 0px 70px;
        margin-top: 0px;
    }
`;

const TopSpan = styled.span`
    grid-area: top;
    /* border: 1px solid rgba(255,255,255,0.2); */
    border-radius: 20px;
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
    @media only screen and (max-width: 400px){
        display:none;
    }
`;

const BottomSpan = styled.span`
    grid-area: bottom;
    /* border: 1px solid rgba(255,255,255,0.2); */
    border-radius: 20px;
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
`;

export default class About extends Component {
    render() {
        return (
            <AboutStyle>
                <TopSpan></TopSpan>
                <TextStyle>{willDetails.about}</TextStyle>
                <BottomSpan></BottomSpan>
            </AboutStyle>
        )
    }
}
