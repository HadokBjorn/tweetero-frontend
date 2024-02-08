import styled from "styled-components";
import { ITweet } from "../../interfaces";
import { useNavigate } from "react-router-dom";
function Card({tweet}:{tweet: ITweet}) {
    const navigate = useNavigate()
    return (
        <Container onClick={()=>navigate(`/account/${tweet.user.id}`)}>
            <ImageContainer>
                <img src={tweet.user.avatar} />
            </ImageContainer>
            <Content>
                <p>@{tweet.user.username}</p>
                <h3>{tweet.tweet}</h3>
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
    *{box-sizing: border-box;}


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
    height: 80px;
    margin: 0;
    padding: 0;


    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background-color:#fff;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;

    }
`
const Content = styled.div`
    width: 80%;

    p{
        padding: 0;
        margin: 0;
        text-align: left;
        font-size: small;
    }
    h3{
        padding: 0;
        margin: 0;
        font-size: medium;
        text-align: justify;
    }
`