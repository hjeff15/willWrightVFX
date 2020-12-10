import React, { Component } from 'react'
import { FaImdb, FaTwitter, FaLinkedin } from 'react-icons/fa';
import styled from "styled-components";

const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(35vw, 1fr));
    grid-template-rows: 10vh 50vh 10vh;
    grid-template-areas:
        ". top ." 
        ". middle ."
        ". bottom ."
`;

const ContactTitle = styled.h2`
    grid-area: top;
    justify-self: center;
`;

const FormArea = styled.form`
    grid-area: middle;
    display: grid;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
`;

const NameArea = styled.label`
    justify-self: center;
`;
const EmailArea = styled.label`
    justify-self: center;
`;
const SubjectArea = styled.label`
    justify-self: center;
`;

const TextBox = styled.textarea`
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
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

export default class Contact extends Component {
    render() {
        return (
            <ContactGrid>
                <ContactTitle>Get in touch with me...</ContactTitle>
                <FormArea>
                    <NameArea htmlFor="name">
                        Name:
                        <input
                            name='name'
                            type='text'
                            id='name'
                            required
                            placeholder='Your name ...'
                        ></input>
                    </NameArea>
                    <EmailArea htmlFor='email'>
                        Email:
                        <input
                            name='email'
                            type='email'
                            id='email'
                            required
                            placeholder='Your email ...'
                        ></input>
                    </EmailArea>
                    <SubjectArea htmlFor='subject'>
                        Subject:
                        <input
                            name='subject'
                            type='subject'
                            id='subject'
                            required
                            placeholder='Subject...'
                        ></input>
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
}
