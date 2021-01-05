import React from 'react'
import { FaImdb, FaLinkedin } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import styled, {keyframes} from "styled-components";
import emailjs from 'emailjs-com';
import SentMessage from './SentMessage';

// Keyframes
const ContactGridFade = keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`;
// Styles
const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: 20vw 60vw 20vw;
    grid-template-rows: 10vh 50vh 10vh;
    grid-template-areas:
        ". top ." 
        ". middle ."
        ". bottom .";
    animation-name: ${ContactGridFade};
    animation-duration: 1s;
    animation-iteration-count: 1;
    z-index: 1;
    scroll-behavior: smooth;
    @media only screen and (max-width: 650px){
        grid-row-start: 1;
        grid-row-end: 3;
        margin-left: 0vw;
    }
    @media only screen and (max-width: 400px){
        position: sticky;
        top: 310px;
    }
    @media only screen and (max-height: 500px){
        grid-template-rows: 50px 250px 60px;
    }
`;

const ContactTitle = styled.h2`
    grid-area: top;
    justify-self: center;
    color: rgba(255,245,245,0.6);
    @media only screen and (max-width: 650px){
        z-index: -1;
    }
`;

const FormArea = styled.form`
    grid-area: middle;
    display: grid;
    /* border: 1px solid rgba(255,255,0,0.2); */
    border-radius: 5px;
`;

const NameArea = styled.label`
    color: rgba(255,245,245,0.6);
    place-self: center;
    margin: 5px;
    padding: 2px;
`;
const EmailArea = styled.label`
    color: rgba(255,245,245,0.6);
    place-self: center;
    margin: 5px;
    padding: 2px;
`;
const SubjectArea = styled.label`
    color: rgba(255,245,245,0.6);
    place-self: center;
    margin: 5px;
    padding: 2px;
`;

const TextBox = styled.textarea`
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
    min-height: 2.8rem;
`;

const Input = styled.input`
    border-radius: 5px;
    margin-left: 20px;
`;

const ButtonBox = styled.button`
    font-family: 'Roboto_Slab', sans-serif;
    border-radius: 5px;
    padding: 4px 10px 2px 5px;
    place-self: center;
    background-color: black;
    :hover{
        cursor: pointer;
    }
`;

const Social = styled.div`
    grid-area: bottom;
    display: flex;
    align-items: start;
    justify-content: flex-end;
    border-radius: 5px;
`;
const SocialIconEl = styled.h2`
    margin-top: 0px;
`;

class Contact extends React.Component{
    constructor(){
        super();
        this.sendEmail = this.sendEmail.bind(this);
    }
    state = {
        formVisible: true
    }

    sendEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                this.setState({
                    formVisible: false
                });
                window.scrollTo(0, 0);
            }, (error) => {
                console.log(error.text);
            });
    }
    render(){
        return (
            <ContactGrid>
                {!this.state.formVisible && <SentMessage />}
                {this.state.formVisible && <ContactTitle>Get in touch with me...</ContactTitle>}
                {this.state.formVisible && <FormArea onSubmit={this.sendEmail} >
                    <NameArea htmlFor="name">
                        Name:
                        <Input
                            name='user_name'
                            type='text'
                            id='name'
                            required
                            placeholder='Your name ...'
                        ></Input>
                    </NameArea>
                    <EmailArea htmlFor='email'>
                        Email:
                        <Input
                            name='user_email'
                            type='email'
                            id='email'
                            required
                            placeholder='Your email ...'
                        ></Input>
                    </EmailArea>
                    <SubjectArea htmlFor='subject'>
                        Subject:
                        <Input
                            name='user_subject'
                            type='subject'
                            id='subject'
                            required
                            placeholder='Subject...'
                        ></Input>
                    </SubjectArea>
                    <TextBox
                        name='user_message'
                        id='message'
                        cols='30'
                        rows='10'
                        placeholder='Type your message here...'
                        >
                    </TextBox>
                    <ButtonBox id="submit" type='submit'>
                        <FiSend size={32} color="white" />
                    </ButtonBox>
                </FormArea>}
                <Social>
                    <a href="https://www.imdb.com/name/nm3962597/?ref_=fn_al_nm_1" target="_blank" rel="noopener noreferrer">
                        <SocialIconEl><FaImdb color="rgba(187, 187, 22, 0.68)" /></SocialIconEl>
                    </a>
                    <a href="https://www.linkedin.com/in/willwrightvfx/" target="_blank" rel="noopener noreferrer">
                        <SocialIconEl><FaLinkedin color="rgba(22, 129, 187, 0.68)"/></SocialIconEl>
                    </a>
                </Social>
            </ContactGrid>
        )
    }
}
export default Contact;

