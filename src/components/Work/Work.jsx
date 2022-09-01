import styles from './Work.module.css'

const Work = () => {



  return (
    <>
      
      <div className={styles.cardContainer}>
        <div className={styles.card} style={{width: "18rem"}}>
          <img src="/ttt.png" className={styles.cardImgTop} alt="Screenshot of Tic-Tac-Toe app."/>
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>Tic-Tac-Toe</h5>
              <p className={styles.cardText}>My first project with GA, tic-tac-toe.</p>
              <a href="https://ttt-ilysim.netlify.app/" target="_blank" rel="noopener noreferrer" id={styles.deployed} className="btn btn-primary">Deployed</a>
              <a href="https://github.com/ilsyim/ttt-weekend" target="_blank" rel="noopener noreferrer" id={styles.git} className="btn btn-secondary">GitHub</a>
            </div>
        </div>
        <div className={styles.card} style={{width: "18rem"}}>
          <img src="/bookCase.png" className={styles.cardImgTop} alt="Screenshot of bookCase app."/>
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>bookCase</h5>
              <p className={styles.cardText}>A MEN app designed for book lovers to share their reccomendations.</p>
              <a href="https://bookcase-ilysim.herokuapp.com/books" target="_blank" rel="noopener noreferrer" id={styles.deployed} className="btn btn-primary">Deployed</a>
              <a href="https://github.com/ilsyim/bookcase" target="_blank" rel="noopener noreferrer" id={styles.git} className="btn btn-secondary">GitHub</a>
            </div>
        </div>
        <div className={styles.card} style={{width: "18rem"}}>
          <img src="/social.png" className={styles.cardImgTop} alt="Screenshot of Social(fx) app."/>
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>Social(fx)</h5>
              <p className={styles.cardText}>A MERN stack app aimed at easing the event planning process.</p>
              <a href="https://social-fx.netlify.app/" target="_blank" rel="noopener noreferrer" id={styles.deployed} className="btn btn-primary">Deployed</a>
              <a href="https://github.com/ilsyim/socialfx-front-end" target="_blank" rel="noopener noreferrer" id={styles.git} className="btn btn-secondary">GitHub</a>
            </div>
        </div>
        <div className={styles.card} style={{width: "18rem"}}>
          <img src="/snippy.png" className={styles.cardImgTop} alt="Screenshot of Snippy app."/>
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>Snippy</h5>
              <p className={styles.cardText}>Keep all your notes along with the lecture video using this MERN stack app built in 2.5 days for a hackathon.</p>
              <a href="https://sei-snippy.netlify.app/" target="_blank" rel="noopener noreferrer" id={styles.deployed} className="btn btn-primary">Deployed</a>
              <a href="https://github.com/ilsyim/snippy-front-end" target="_blank" rel="noopener noreferrer" id={styles.git} className="btn btn-secondary">GitHub</a>
            </div>
        </div>
        <div className={styles.card} style={{width: "18rem"}}>
          <img src="/lumpia.png" className={styles.cardImgTop} alt="Screenshot of Lumpia Maker app."/>
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>Lumpia Maker</h5>
              <p className={styles.cardText}>A Filipino cuisine centered full-stack app that uses the Python-based Django Web Framework.</p>
              <a href="https://lumpia-maker.herokuapp.com/" target="_blank" rel="noopener noreferrer" id={styles.deployed} className="btn btn-primary">Deployed</a>
              <a href="https://github.com/ilsyim/lumpia" target="_blank" rel="noopener noreferrer" id={styles.git} className="btn btn-secondary">GitHub</a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Work