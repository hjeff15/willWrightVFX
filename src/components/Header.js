import React, { Component } from 'react'
import styled from 'styled-components'

import willDetails from '../willWright.js';

const WillHeader = styled.h1`
    background-color: black;
    display: flex;
    justify-content: center;
	letter-spacing: .3rem;
    /* writing-mode: vertical-lr; */
    /* margin-top: 10px; */
    margin-bottom: 10px;
    padding-bottom: 20px;
    position: sticky;
    top: 0px;
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
