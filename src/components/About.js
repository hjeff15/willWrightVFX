import React, { Component } from 'react';
import styled from 'styled-components';
import willDetails from '../willWright.js';

const AboutStyle = styled.div`
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    text-align: center;
    
`;

const TextStyle = styled.p`
    font-size: 2rem;
    /* padding: 5vw; */
    padding: 30px;

`;

export default class About extends Component {
    render() {
        return (
            <AboutStyle>
                <TextStyle>{willDetails.about}</TextStyle>
            </AboutStyle>
        )
    }
}
