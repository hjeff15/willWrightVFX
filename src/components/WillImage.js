import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import willWrightImage from '../images/willWrightImage.jpg'

// Keyframes
const SqaureFade = keyframes`
	0% {background-color: black; transform: scaleX(1)}
    100%{background-color: transparent; transform: scaleX(0)}
`;
const GridGapSpacer = keyframes`
	0% {grid-gap: 0vw;}
    100%{grid-gap: 0.4vw;}
`;
const ImageFade = keyframes`
	0% {opacity: 0}
	100% {opacity: 1}
`;
// Styles
const MainDiv = styled.div`
	overflow: hidden;
	@media only screen and (max-width: 850px){
        margin-top: 5vh;
    }
	@media only screen and (max-width: 650px){
        display: flex;
		justify-content: center;
		margin-top: 0vh;
    }
`;

const WillsImage = styled.img`
	border-radius: 10px;
	border-spacing: border-box;
	z-index: -10;
	filter: sepia(40%);
	position: absolute;
	margin-left: 5.5vw;
	max-height: 45vw;
	animation-name: ${ImageFade};
	animation-duration: 5s;
	animation-fill-mode: forwards;
	@media only screen and (max-width: 650px){
        justify-self: center;
		max-height: 75vw;
		margin-left: 0px;
    }
`;

const GridView = styled.ul`
	position: relative;
	display: grid;
	opacity: 1;
	grid-gap: 0.4vw;
	margin-top: 2px;
	grid-auto-rows: 5vw;
	grid-template-columns: repeat(5, 10.3vw);
	transform-origin: 0 0;
	padding-left: 9px;
	transform: skewY(-11deg);
	animation-name: ${GridGapSpacer};
	animation-duration: 5s;
	animation-iteration-count: 1;
	z-index: -1;
	overflow-y: scroll;
	@media only screen and (max-width: 650px){
        justify-content: center;
		margin-left: 15vw;
		grid-gap: 0.4vw;
		grid-auto-rows: 10vw;
		grid-template-columns: repeat(5, 16vw);
    }
`;

const Squares = styled.li`
	background-color: black;
	border-radius: 10px;
	list-style: none;
`;

const SquaresTransparent = styled.li`
	background-color: black;
	list-style: none;
	border-radius: 10px;
	animation-name: ${SqaureFade};
	animation-duration: 5s;
	animation-iteration-count: 1;
	/* animation-delay: 0.5s; */
	animation-fill-mode: forwards;
`;

export default class WillImage extends Component {
	render() {
		return (
			<MainDiv>
				<WillsImage src={willWrightImage} alt='Will Wright'/>
				<GridView>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<SquaresTransparent></SquaresTransparent>
					<Squares></Squares>
					<SquaresTransparent></SquaresTransparent>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<SquaresTransparent></SquaresTransparent>
					<SquaresTransparent></SquaresTransparent>
					<SquaresTransparent></SquaresTransparent>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<SquaresTransparent></SquaresTransparent>
					<SquaresTransparent></SquaresTransparent>
					<SquaresTransparent></SquaresTransparent>
					<Squares></Squares>
					<SquaresTransparent></SquaresTransparent>
					<SquaresTransparent></SquaresTransparent>
					<SquaresTransparent></SquaresTransparent>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<SquaresTransparent></SquaresTransparent>
					<SquaresTransparent></SquaresTransparent>
					<SquaresTransparent></SquaresTransparent>
					<Squares></Squares>
					<SquaresTransparent></SquaresTransparent>
					<SquaresTransparent></SquaresTransparent>
					<SquaresTransparent></SquaresTransparent>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<SquaresTransparent></SquaresTransparent>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<SquaresTransparent></SquaresTransparent>
					<Squares></Squares>
					<SquaresTransparent></SquaresTransparent>
					<Squares></Squares>
					<SquaresTransparent></SquaresTransparent>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
				</GridView>
			</MainDiv>
		)
	}
}
