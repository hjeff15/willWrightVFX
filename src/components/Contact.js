import React from 'react'
import { FaImdb, FaTwitter, FaLinkedin } from 'react-icons/fa';
import styled from "styled-components";
import emailjs from 'emailjs-com';

const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: 20vw 60vw 20vw;
    grid-template-rows: 10vh 50vh 10vh;
    grid-template-areas:
        ". top ." 
        ". middle ."
        ". bottom ."
`;

const ContactTitle = styled.h2`
    grid-area: top;
    justify-self: center;
    color: rgba(255,245,245,0.6);
`;

const FormArea = styled.form`
    grid-area: middle;
    display: grid;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
`;

const NameArea = styled.label`
    justify-self: center;
    margin: 5px;
    padding: 2px;
`;
const EmailArea = styled.label`
    justify-self: center;
    margin: 5px;
    padding: 2px;
`;
const SubjectArea = styled.label`
    justify-self: center;
    margin: 5px;
    padding: 2px;
`;

const TextBox = styled.textarea`
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
`;

const Input = styled.input`
    padding-left: 10px;
    border-radius: 5px;
`;

const ButtonBox = styled.button`
    font-family: 'Roboto_Slab', sans-serif;
    font-size: 1.2rem;
    border-radius: 20px;
    margin: 10px;
    color: white;
    background-color: black;
`;

const Social = styled.div`
    grid-area: bottom;
    display: flex;
    justify-content: space-around;
`;

export default function Contact(){
    console.log(process.env.REACT_APP_SERVICE_ID);
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <ContactGrid>
            <ContactTitle>Get in touch with me...</ContactTitle>
            <FormArea onSubmit={sendEmail}>
                <NameArea htmlFor="name">
                    Name:
                    <Input
                        name='name'
                        type='text'
                        id='name'
                        required
                        placeholder='Your name ...'
                    ></Input>
                </NameArea>
                <EmailArea htmlFor='email'>
                    Email:
                    <Input
                        name='email'
                        type='email'
                        id='email'
                        required
                        placeholder='Your email ...'
                    ></Input>
                </EmailArea>
                <SubjectArea htmlFor='subject'>
                    Subject:
                    <Input
                        name='subject'
                        type='subject'
                        id='subject'
                        required
                        placeholder='Subject...'
                    ></Input>
                </SubjectArea>
                <TextBox
                    className='message'
                    name='message'
                    id='message'
                    cols='30'
                    rows='10'
                    placeholder='Type your message here...'
                    >
                </TextBox>
                <ButtonBox id="submit" type='submit'>
                    SEND
                </ButtonBox>
            </FormArea>
            <Social>
                <h3><FaImdb /></h3>
                <h3><FaTwitter /></h3>
                <h3><FaLinkedin /></h3>
            </Social>
        </ContactGrid>
    )
}

