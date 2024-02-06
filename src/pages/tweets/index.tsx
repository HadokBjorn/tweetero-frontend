import styled from "styled-components";
import birdImage from "../../assets/bird.webp";
import { BiSend } from "react-icons/bi";
import Card from "../../components/card";

function Tweets() {
    return (
        <Container>
            <form onSubmit={()=>{}}>
                <img className="bird_left" src={birdImage} alt="logo de passaro"/>
                <img className="bird_right" src={birdImage} alt="logo de passaro"/>
                
                <input 
                placeholder="O que você está pensando?" 
                type="text" 
                name="username"
                maxLength={250}
                autoFocus
                required/>

                <button type="submit" >
                    <BiSend size={30} color="#0713f8" />
                </button>
            </form>
            <TweetList>
                <Card />
                <Card />
                <Card />
                <Card />
            </TweetList>
        </Container>
    )
}

export default Tweets;

const Container = styled.main`
    box-sizing: border-box;
    width: 100%;
    padding: 15px;
    border-radius: 15px;


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
    form{
        display: flex;
        align-items: center;
        justify-content: center;
        
        position: relative;
        width: 100%;
        height: 120px;
        border-radius: 15px;
        
        background-color: #dae1fa;

        box-shadow: rgb(47, 138, 241) 0px -10px 40px -20px;
        border: 1px solid blue;

        input{
            font-family: 'Protest Strike', sans-serif;
            font-size: 1.2rem;
            color: #383636;

            background-color: transparent;
            width: 80%;
            padding: 5px;
            border: none;
            outline: none;
            border-bottom: 1px solid black;
        }

        button{
            font-family: 'Protest Strike', sans-serif;
            background-color: transparent;
            font-size: 1rem;
            padding: 5px;
            border-radius: 15px;
            border: none;
        }
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