import styled from "styled-components";
import birdImage from "../../assets/bird.webp"
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const login = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        navigate("/tweets");
    }
    return (
        <Container>
            <form onSubmit={login}>
                <img className="bird_left" src={birdImage} alt="logo de passaro"/>
                <img className="bird_right" src={birdImage} alt="logo de passaro"/>
                
                <input 
                placeholder="Digite seu username" 
                type="text" 
                name="username"
                minLength={3}
                maxLength={150}
                autoFocus
                required/>

                <input 
                placeholder="Cole aqui a url da sua foto" 
                type="url" 
                name="image"
                minLength={3}
                maxLength={150}
                required/>

                <button type="submit" >Entrar</button>

            </form>
        </Container>
    )
}

export default Home;

const Container = styled.main`
    box-shadow: rgb(47, 138, 241) 0px 25px 150px -25px;
    border: 1px solid blue;
    margin-bottom: 150px;
    width: 100%;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        
        position: relative;
        width: 100%;
        height: 200px;
        border-radius: 15px;
        
        background-color: #dae1fa;
        box-shadow: rgb(3, 0, 0) 0px 25px 50px -12px;


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
            background-color: #0713f8;
            font-size: 1rem;
            width: 100px;
            padding: 5px;
            border-radius: 15px;
            border: none;
        }
    }
`