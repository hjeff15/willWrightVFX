import React, { Component } from 'react'
import styled from 'styled-components';

const Navigation = styled.nav`
    background-color: black;
	display: flex;
	justify-content: space-around;
	border-bottom: 1px solid rgba(255,255,255,0.1);
    margin-bottom: 10px;
    position: -webkit-sticky;
    position:sticky;
    top: 90px;
    z-index: 1;
    @media only screen and (max-width: 400px){
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        text-align: center;
        z-index:2;
    }
`;

const NavEl = styled.h3`
	border-top: 1px solid rgba(255,225,255,0.2);
    background-color: black;
	margin-bottom: 2px;
    cursor: pointer;
    background-color: black;
    @media only screen and (max-width: 400px){
        background-color: black;
        /* margin: 0vh auto 0vh auto; */
        /* padding: 1vh ; */
    }
`;

const NavElBottom = styled.h3`
	border-top: 1px solid rgba(255,225,255,0.2);
	margin-bottom: 2px;
    padding-bottom: 10px;
    cursor: pointer;
    @media only screen and (max-width: 400px){
        /* margin: 0vh auto 0vh auto; */
        background-color: black;
        z-index:1;
        /* padding: 1vh ; */
        /* border-bottom: 1px solid rgba(255,225,255,0.2); */
    }
`;

export default class Nav extends Component {
    render() {
        return (
            <Navigation>
                <NavEl id="about" onClick={this.props.changeView}>About</NavEl>
                <NavEl id="showreel" onClick={this.props.changeView} >Showreel</NavEl>
                <NavEl id="filmography" onClick={this.props.changeView} >Filmography</NavEl>
                <NavElBottom id="contact" onClick={this.props.changeView} >Contact</NavElBottom>
            </Navigation>
        )
    }
}
