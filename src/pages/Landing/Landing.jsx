import Portfolio from '../Portfolio/Portfolio'


const Landing = ({ user, ReactSwitch, ThemeContext, createContext, useState }) => {

  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }
  
  return (

    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <main className="container">
          <h1>Ilyana Simmons</h1>
          <div className="switch">
            <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
              <ReactSwitch onChange={toggleTheme} checked={theme === "light"} onColor="#fff" onHandleColor="#000" offHandleColor="#fff" offColor="#000" width={60} height={26} handleDiameter={29} uncheckedIcon={false} checkedIcon={false}/>
          </div>
          <Portfolio/>
        </main>

      </div>
    </ThemeContext.Provider>


  )
}

export default Landing
