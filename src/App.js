import React from 'react'
import { Nav } from './components'
import { Header, About, Use, Contact, Find } from './containers'
import './App.css';
import styled from "styled-components";
import { AccountBox } from "./pages/Login";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const App = () => {
  return (
    <div className="App">
       <div className="grad_bg"> 
          {/* <Nav />
          <Header />
       </div>
       <About />
       <Use />
       <Contact />
       <Find /> */}
       
           <AppContainer>
             <AccountBox />
           </AppContainer>
       </div>
    </div>
  )
}

export default App
