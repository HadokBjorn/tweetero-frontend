import styled from "styled-components";
import birdImage from "../../assets/bird.webp";
import Card from "../../components/card";
import GetApi from "../../hooks/getApi";
import { useParams } from "react-router-dom";
import { ITweet } from "../../interfaces";

function TweetsByUser() {
    const { userId } = useParams();
    const {data, error: err,isLoading} = GetApi<ITweet[]>(`/tweets/user/${userId}`);
    return (
        <Container>
            <header>
                <img className="bird_left" src={birdImage} alt="logo de passaro"/>
                <img className="bird_right" src={birdImage} alt="logo de passaro"/>

                <ImageContainer>
                    <img src={data?data[0].user.avatar:birdImage} />
                    <p>@{data?data[0].user.username:"username"}</p>
                </ImageContainer>

            </header>
            <TweetList>
            {(isLoading && !data) && <h2>Carregando</h2>}
                {err && <h2>Desculpe algo deu errado</h2>}
                {
                    (!isLoading && !err && data != null) && data.map((element: ITweet)=>{
                        return (
                        <Card 
                            key={element.id} 
                            tweet={element}
                        />
                        )
                    })
                }
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
        object-fit: cover;
        object-position: center;
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
    width: 100%;
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
