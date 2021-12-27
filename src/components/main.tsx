import React from 'react';
import styled from 'styled-components';

const TopBar = styled.div`
    width: 100%;
    height: 10vh;
`;

const Main = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    font-size: 50px;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    text-align: center;
    position: absolute;
`;

const Title = styled.h2`
    position: absolute;
    top: 40%;
    left: 50%;
    text-align: center;
    color: white;
    transform: translate(-50%, -50%);
`;

const StartButton = styled.div`
    position: absolute;
    background-color: slateblue;
    width: 200px;
    height:50px;
    border-radius: 20px;
    top: 55%;
    left: 45%;
    font-size: 30px;
    color: white;
    font-weight: bold;
`;

export default function MainPage() {
    return(
        <Main>
            <TopBar></TopBar>
            <Title>Kodeal</Title>
            <StartButton>START</StartButton>
        </Main>
    );
}