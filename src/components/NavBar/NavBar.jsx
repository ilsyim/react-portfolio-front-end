import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {

  const className = ""

  const toggleLightDark = () => {
    className = className === "dark" ? "" : "dark"
  }

  const checkDarkPref = () => {
    if(
      window.matchMedia("(prefers-color-scheme:dark)").matches && 
      className !== "dark"
    ) {
      toggleLightDark()
    }
  }

  

  return (
    <>
      {user ?
        <nav className={styles.dark}>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>

          </ul>
        </nav>
      :
        <nav className={styles.nav}>
          <Link id={styles.nav} className={styles.about} to="/about">About</Link>
          <Link id={styles.nav} className={styles.work} to="/work">Work</Link>
          <Link id={styles.nav} className={styles.contact} to="/contact">Contact</Link>
          <Link id={styles.nav} className={styles.resume} to="/resume">Resume</Link>
          <button id="lDBtn" onClick={() => checkDarkPref()}></button>
        </nav>
      }
    </>
  )
}

export default NavBar
