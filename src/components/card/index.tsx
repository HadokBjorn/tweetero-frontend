import styled from "styled-components";
import birdImage from "../../assets/bird.webp";
function Card() {
    return (
        <Container>
            <ImageContainer>
                <img src={birdImage} />
            </ImageContainer>
            <Content>
                <p>@username</p>
                <h3>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                </h3>
            </Content>
        </Container>
    )
}

export default Card;

const Container = styled.li`
    
    font-family: 'Protest Strike', sans-serif;
    color: #383636;

    width: 100%;
    min-height: 100px;
    box-sizing: border-box;


    padding: 10px;
    border-radius: 15px;
    margin-top: 30px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    background-color: #dae1fa;
`
const ImageContainer = styled.aside`
    width: 80px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: aliceblue;

    img{
        width: 100%;
        height: 100%;
        //object-fit: contain;
        border-radius: 50%;

    }
`
const Content = styled.div`
    width: 100%;

    p{
        padding: 0;
        margin: 0;
        text-align: left;
        font-size: small;
    }
    h3{
        padding: 0;
        margin: 0;
        font-size: small;
        text-align: justify;
    }
`