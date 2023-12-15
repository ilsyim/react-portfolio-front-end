import { useState } from 'react';
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Resume from '../../components/Resume/Resume'
import Work from '../../components/Work/Work'


const Portfolio = () => {
  const [component, setComponent] = useState('About')

  return (
    <>
      <div className="portfolio">
        <div className="mainBody">
          <nav className="portfolioNav">
            <button className="about" onClick={() => setComponent('About')}>About</button>
            <button className="contact" onClick={() => setComponent('Contact')}>Contact</button>
            <button className="resume" onClick={() => setComponent('Resume')}>Resume</button>
            <button className="work" onClick={() => setComponent('Work')}>Work</button>
          </nav>
          <div className="display">
            {component === 'About' ? <About/> : ""}
            {component === 'Contact' ? <Contact/> : ""}
            {component === 'Resume' ? <Resume/> : ""}
            {component === 'Work' ? <Work/> : ""}
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio