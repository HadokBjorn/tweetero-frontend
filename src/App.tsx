import styled from 'styled-components'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Title>tweetero</Title>
      <Outlet/>
    </>
  )
}

export default App

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
`