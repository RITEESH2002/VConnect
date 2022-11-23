import React from 'react'
import { Nav } from './components'
import { Header, About } from './containers'
import './App.css'

const App = () => {
  return (
    <div className="App">
       <div className="grad_bg"> 
          <Nav />
          <Header />
       </div>
       <About />
    </div>
  )
}

export default App
