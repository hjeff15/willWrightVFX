import React from 'react';
import styled, { createGlobalStyle } from "styled-components";

import Header from './components/Header';
import SubHeader from './components/SubHeader';

import Nav from './components/Nav';
import About from './components/About';
import WillImage from './components/WillImage';
import Showreel from './components/Showreel';
import Filmography from './components/Filmography';
import Contact from './components/Contact';

const GlobalStyles = createGlobalStyle`
  body{
    background-color: #000000;
    color: white;
    min-height: 100vh;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    font-size: calc(5px + 2vmin);
	-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  }
`;

const DisplayGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(200px, 50vw));
	grid-template-rows: auto;
	position: relative;
	@media only screen and (max-width: 650px){
		grid-template-columns: 100vw;
		grid-template-rows: 25vh auto;
		grid-template-areas: 
			"top"
			"bottom";
	}
	@media only screen and (max-width: 400px){
		grid-template-rows: 33vh auto;
	}
`;



class App extends React.Component {
	state = {
		about: true,
		showreel: false,
		filmography: false,
		contact: false,
		contactView: true
	}

	componentDidMount(){
		console.log("Want a website? You can contact me HERE ☟");
		console.log("https://www.hugojeffreys.me/ ");
	}

	changeView = (e) => {
		this.setState({
			about: false,
			showreel: false,
			filmography: false,
			contact: false
		})
		if(e.target.id === 'showreel'){
			this.setState({
				showreel: true
			})
		}
		if(e.target.id === 'filmography'){
			this.setState({
				filmography: true
			})
		}
		if(e.target.id === 'contact'){
			this.setState({
				contact: true
			})
		}
		if(e.target.id === 'about'){
			this.setState({
				about: true
			})
		}
	}
	render(){
		
		return (
			<div>
				<GlobalStyles/>
				<Header />
				<SubHeader/>
				<Nav changeView={this.changeView}/>
				<DisplayGrid>
					{this.state.about && <About /> }   
					{this.state.about && <WillImage /> }   
					{this.state.showreel && <Showreel /> }   
					{this.state.filmography && <Filmography /> }   
					{this.state.contact && <Contact /> }   
				</DisplayGrid>
			</div>
		)
	};
}

export default App;
