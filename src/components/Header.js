import React, { Component } from 'react'
import styled from 'styled-components'

import willDetails from '../willWright.js';

const WillHeader = styled.h1`
    background-color: black;
    display: flex;
    justify-content: center;
	letter-spacing: .3rem;
    /* writing-mode: vertical-lr; */
    margin-bottom: 10px;
    padding-bottom: 20px;
    position: sticky;
    top: 0px;
    @media only screen and (max-width: 650px){
        padding-bottom: 25px;
        padding-top: 40px;
        margin-top: 30px;
        top: -40px;
    }
`;

export default class Header extends Component {
    render() {
        return (
            <WillHeader>
                {willDetails.name.toUpperCase()}
            </WillHeader>
        )
    }
}
