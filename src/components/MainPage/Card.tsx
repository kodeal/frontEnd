import styled from "styled-components";


const CardBox = styled.div`
font-size: 80px;
color: white;
border-radius: 10px;
text-align: center;
background-color: #222;
height: 400px;
width: 800px;
`;

const CardTitle = styled.p`
    font-size: 23px;
    font-weight: 600;
    color: white;
`

const CardText = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: white;
`

interface cardProps {
    card: number
}

const Card = (props: cardProps): JSX.Element => {
    console.log("card");
    
    return (
        <CardBox>
            <CardTitle>Codex</CardTitle>
            <br/>
            <br/>
            <CardText>Codex입니다.</CardText>

        </CardBox>
    );
}

export default Card;