import styled from "styled-components";
import birdImage from "../../assets/bird.webp";
import Card from "../../components/card";

function TweetsByUser() {
    return (
        <Container>
            <header>
                <img className="bird_left" src={birdImage} alt="logo de passaro"/>
                <img className="bird_right" src={birdImage} alt="logo de passaro"/>

                <ImageContainer>
                    <img src={birdImage} />
                    <p>@username</p>
                </ImageContainer>

            </header>
            <TweetList>
                <Card />
                <Card />
                <Card />
                <Card />
            </TweetList>
        </Container>
    )
}

export default TweetsByUser;

const Container = styled.main`
    box-sizing: border-box;
    width: 100%;
    padding: 15px;
    border-radius: 15px;

    color: #383636;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 3rem;
        font-weight: 800;
    }

    .bird_left{
        width: 90px;
        height: 90px;
        position: absolute;
        top: -45px;
        left: 0;
    }
    .bird_right{
        -moz-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        width: 90px;
        height: 90px;
        position: absolute;
        top: -45px;
        right: 0;
    }
    header{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        position: relative;
        width: 100%;
        height: 120px;
        border-radius: 15px;
        
        background-color: #dae1fa;

        box-shadow: rgb(47, 138, 241) 0px -10px 40px -20px;
        border: 1px solid blue;
    }
    `
const ImageContainer = styled.div`
    width: 100px;
    height: 100px;
    
    position: absolute;
    top: -40px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: aliceblue;
        box-shadow: #111 0px 15px 40px -15px;
    }
    p{
        margin: 0;
        padding: 0;
    }
    `
const TweetList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li:hover{
        background-color: #85affd;
    }
    
`
