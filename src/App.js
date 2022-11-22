import React from 'react'
import { Nav } from './components'
import { Header } from './containers'
import './App.css'

const App = () => {
  return (
    <div className="App">
       <div className="grad_bg"> 
          <Nav />
          <Header />
       </div>
    </div>
  )
}

export default App
