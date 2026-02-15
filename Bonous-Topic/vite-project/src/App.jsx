import React, { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
const [theme,SetTheme] =useState ('light')

  return (
    <div>
      <h1> Theme is {theme}</h1>
      <Navbar theme={theme} SetTheme={SetTheme} />
    </div>
  )
}

export default App
