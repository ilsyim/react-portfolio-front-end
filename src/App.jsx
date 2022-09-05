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
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className="App" id={theme}>
          <Landing />
          <div className="switch">
            <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "light"} onColor="#fff" onHandleColor="#000" offHandleColor="#fff" offColor="#000" width={60} height={26} handleDiameter={29} uncheckedIcon={false} checkedIcon={false}/>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
