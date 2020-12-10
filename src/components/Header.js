import React, { Component } from 'react'
import styled from 'styled-components'

import willDetails from '../willWright.js';

const WillHeader = styled.h1`
    background-color: #000000;
    display: flex;
    justify-content: center;
	letter-spacing: .3rem;
    /* writing-mode: vertical-lr; */
    margin-top: 10px;
    margin-bottom: 10px;
    position: sticky;
    top: 0;
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
