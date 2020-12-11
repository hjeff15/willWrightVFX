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
    grid-template-rows: 10vh 400px 10vh;
    grid-template-areas: 
        "top"
        "middle"
        "bottom";
    text-align: center;
`;

const TextStyle = styled.p`
    font-size: 2.2rem;
    padding: 10px 30px 0px 30px;
    grid-area: middle;
    text-align: center;
    animation-name: ${TextFade};
    animation-duration: 1s;
    animation-iteration-count: 1;
`;

const TopSpan = styled.span`
    grid-area: top;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 20px;
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
`;

const BottomSpan = styled.span`
    grid-area: bottom;
    border: 1px solid rgba(255,255,255,0.2);
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
