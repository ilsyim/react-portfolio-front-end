import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
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
        </nav>
      }
    </>
  )
}

export default NavBar
