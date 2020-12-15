import React, { Component } from 'react';
import { FiSend } from 'react-icons/fi';
import styled, {keyframes} from "styled-components";

// Keyframes
const EnvelopeFade = keyframes`
    0% {opacity: 0; transform: rotate(0deg);  }
    100% {opacity: 1; transform: rotate(1440deg); }
`;
//Styles
const ThanksGrid = styled.div`
    display: grid;
    grid-template-columns: 20vw 60vw 20vw;
    grid-template-rows: repeat(2, 20vh);
    grid-template-areas:
        ". text."
        ". icon.";
`;
const ThanksText = styled.h2`
    grid-area: text;
    justify-self: center;
    color: rgba(255,255,255,0.5);
`;
const ThanksIcon = styled.div`
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;   
    grid-area: icon;
    justify-self: center;
    transform-origin: right;
    animation-name: ${EnvelopeFade};
    animation-duration: 2s;
    animation-fill-mode: forwards;
`;

export default class SentMessage extends Component {
    render() {
        return (
            <ThanksGrid>
                <ThanksIcon>
                    <FiSend size={100}/>
                </ThanksIcon>    
                <ThanksText>Thanks, I'll get back to you shortly...</ThanksText>
            </ThanksGrid>
        )
    }
}

