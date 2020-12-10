import React, { Component } from 'react'
import styled from 'styled-components';

const Navigation = styled.nav`
    background-color: #000000;
	display: flex;
	justify-content: space-around;
	border-bottom: 1px solid rgba(255,255,255,0.1);
    margin-bottom: 10px;
    position:sticky;
    top: 65px;
`;

const NavEl = styled.p`
	border-top: 1px solid rgba(255,225,255,0.2);
	margin-bottom: 6px;
    cursor: pointer;
`;

export default class Nav extends Component {
    render() {
        return (
            <Navigation>
                <NavEl id="about" onClick={this.props.changeView}>About</NavEl>
                <NavEl id="showreel" onClick={this.props.changeView} >Showreel</NavEl>
                <NavEl id="filmography" onClick={this.props.changeView} >Filmography</NavEl>
                <NavEl id="contact" onClick={this.props.changeView} >Contact</NavEl>
            </Navigation>
        )
    }
}
