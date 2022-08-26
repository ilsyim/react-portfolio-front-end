import { useState } from 'react';
import styles from './Portfolio.module.css'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Resume from '../../components/Resume/Resume'
import Work from '../../components/Work/Work'


const Portfolio = () => {
  const [ component, setComponent] = useState('About')


  return (
    <>
      <div className={styles.mainBody}>
        <div className={styles.portfolioNav}>
          <button className={styles.about} onClick={() => setComponent('About')}>About</button>
          <button className={styles.contact} onClick={() => setComponent('Contact')}>Contact</button>
          <button className={styles.resume} onClick={() => setComponent('Resume')}>Resume</button>
          <button className={styles.work} onClick={() => setComponent('Work')}>Work</button>
        </div>
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