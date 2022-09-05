import "./App.css"
import Landing from './pages/Landing/Landing'
import { useState } from 'react';
import { createContext } from 'react'
export const ThemeContext = createContext(null)

const App = () => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className="App" id={theme}>
          <Landing />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
