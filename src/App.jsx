import "./App.css"
import Landing from './pages/Landing/Landing'
import { useState } from 'react';
import { createContext } from 'react'
import ReactSwitch from "react-switch";
export const ThemeContext = createContext(null)

const App = () => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <Landing ReactSwitch={ReactSwitch} ThemeContext={ThemeContext} createContext={createContext} useState={useState}/>
    </>
  )
}

export default App
