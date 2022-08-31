import { useState } from 'react';
import styles from './Portfolio.module.css'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Resume from '../../components/Resume/Resume'
import Work from '../../components/Work/Work'


const Portfolio = () => {
  const [component, setComponent] = useState('About')

  // const className = "dark"

  // const toggleLightDark = () => {
  //   className = className === "dark" ? "" : "dark"
  // }

  // const checkDarkPref = () => {
  //   if(
  //     window.matchMedia("(prefers-color-scheme:dark)").matches && 
  //     className !== "dark"
  //   ) {
  //     toggleLightDark()
  //   }
  // }

  return (
    <>
      <div className={styles.mainBody}>
        <nav className={styles.portfolioNav}>
          <button className={styles.about} onClick={() => setComponent('About')}><p>About</p></button>
          <button className={styles.contact} onClick={() => setComponent('Contact')}>Contact</button>
          <button className={styles.resume} onClick={() => setComponent('Resume')}><a href="../resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></button>
          <button className={styles.work} onClick={() => setComponent('Work')}>Work</button>
          {/* <button id="lDBtn" onClick={() => checkDarkPref()}></button> */}
        </nav>
        <div className={styles.display}>
          {component === 'About' ? <About/> : ""}
          {component === 'Contact' ? <Contact/> : ""}
          {component === 'Resume' ? <Resume/> : ""}
          {component === 'Work' ? <Work/> : ""}
        </div>
      </div>
    </>
  )
}

export default Portfolio