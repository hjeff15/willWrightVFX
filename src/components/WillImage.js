import React, { Component } from 'react';
import styled from 'styled-components';
import tempImage from '../images/tempImage.jpeg';

const WillsImage = styled.img`
	border-radius: 10px;
	border-spacing: border-box;
	z-index: -10;
	filter: sepia(40%);
	position: absolute;
	/* object-fit: cover; */
	max-height: 80vw;
  	/* object-position: top; */
`;

const GridView = styled.ul`
	position: relative;
	display: grid;
	opacity: 1;
	grid-gap: 1.4vw;
	margin-top: 12px;
    margin-left: -10px;
	grid-auto-rows: 10vw;
	grid-template-columns: repeat(4, 10.3vw);
	transform-origin: 0 0;
	padding-left: 9px;
	transform: skewY(-11deg);
`;

const Squares = styled.li`
	background-color: black;
	border-radius: 10px;
	list-style: none;
`;

const SquaresTransparent = styled.li`
	background-color: transparent;
	list-style: none;
`;

export default class WillImage extends Component {
	render() {
		return (
			<div>
				<WillsImage src={tempImage} alt='Will Wright'/>
				<GridView>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<SquaresTransparent></SquaresTransparent>
					<SquaresTransparent></SquaresTransparent>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<SquaresTransparent></SquaresTransparent>
					<SquaresTransparent></SquaresTransparent>
					<SquaresTransparent></SquaresTransparent>
					<SquaresTransparent></SquaresTransparent>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
					<Squares></Squares>
				</GridView>
			</div>
		)
	}
}
