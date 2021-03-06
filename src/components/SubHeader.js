import React, { Component } from 'react'
import styled from 'styled-components'

import willDetails from '../willWright.js';

const WillSubHeader = styled.h3`
    background-color: #000000;
    display: flex;
    justify-content: center;
    color: rgba(255,255,255,0.5);
    margin-bottom: 10px;
    padding-bottom: 30px;
    /* padding-bottom: 13px; */
    position:sticky;
    top: 52px;
`;

export default class SubHeader extends Component {
    render() {
        return (
            <WillSubHeader>
                {willDetails.occupation}
            </WillSubHeader>
        )
    }
}
