
const Work = () => {



  return (
    <>
      <div className="workSection">
        {/* <p>Some sites are currently under construction. Thank you for your understanding!</p> */}
        <div className="cardContainer">
        <div className="card" style={{width: "18rem"}}>
            <img src="/Portfolio.png" className="cardImgTop" alt="Screenshot of first portfolio."/>
              <div className="cardBody">
                <h5 className="cardTitle">My first portfolio</h5>
                <p className="cardText">My unit 1 assignment with GA, a simple portfolio. Made with HTML, CSS, and JavaScript.</p>
                <div className="buttons">
                  <a href="https://ilysim-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" id="deployed" className="btn btn-primary">Deployed</a>
                  <a href="https://github.com/ilsyim/portfolio" target="_blank" rel="noopener noreferrer" id="git" className="btn btn-secondary">GitHub</a>
                </div>
              </div>
          </div>
          <div className="card" style={{width: "18rem"}}>
            <img src="/ttt.png" className="cardImgTop" alt="Screenshot of Tic-Tac-Toe app."/>
              <div className="cardBody">
                <h5 className="cardTitle">Tic-Tac-Toe</h5>
                <p className="cardText">My first project with GA, tic-tac-toe.</p>
                <div className="buttons">
                  <a href="https://ttt-ilysim.netlify.app/" target="_blank" rel="noopener noreferrer" id="deployed" className="btn btn-primary">Deployed</a>
                  <a href="https://github.com/ilsyim/ttt-weekend" target="_blank" rel="noopener noreferrer" id="git" className="btn btn-secondary">GitHub</a>
                </div>
              </div>
          </div>
          <div className="card" style={{width: "18rem"}}>
            <img src="/bookCase.png" className="cardImgTop" alt="Screenshot of bookCase app."/>
              <div className="cardBody">
                <h5 className="cardTitle">bookCase</h5>
                <p className="cardText">A MEN app designed for book lovers to share their reccomendations.</p>
                <div className="buttons">
                  <a href="https://bookcase.fly.dev" target="_blank" rel="noopener noreferrer" id="deployed" className="btn btn-primary">Deployed</a>
                  <a href="https://github.com/ilsyim/bookcase" target="_blank" rel="noopener noreferrer" id="git" className="btn btn-secondary">GitHub</a>
                </div>
              </div>
          </div>
          <div className="card" style={{width: "18rem"}}>
            <img src="/social.png" className="cardImgTop" alt="Screenshot of Social(fx) app."/>
              <div className="cardBody">
                <h5 className="cardTitle">Social(fx)</h5>
                <p className="cardText">MERN stack app aimed at easing the event planning process. Working on redeploy.</p>
                <div className="buttons">
                  <a href="https://social-fx.netlify.app/" target="_blank" rel="noopener noreferrer" id="deployed" className="btn btn-primary">Deployed</a>
                  <a href="https://github.com/ilsyim/socialfx-front-end" target="_blank" rel="noopener noreferrer" id="git" className="btn btn-secondary">GitHub</a>
                </div>
              </div>
          </div>
          <div className="card" style={{width: "18rem"}}>
            <img src="/snippy.png" className="cardImgTop" alt="Screenshot of Snippy app."/>
              <div className="cardBody">
                <h5 className="cardTitle">Snippy</h5>
                <p className="cardText">MERN stack lecture notes app built in 2.5 days for a hackathon.</p>
                <div className="buttons">
                  <a href="https://sei-snippy.netlify.app/" target="_blank" rel="noopener noreferrer" id="deployed" className="btn btn-primary">Deployed</a>
                  <a href="https://github.com/ilsyim/snippy-front-end" target="_blank" rel="noopener noreferrer" id="git" className="btn btn-secondary">GitHub</a>
                </div>
              </div>
          </div>
          <div className="card" style={{width: "18rem"}}>
            <img src="/lumpia.png" className="cardImgTop" alt="Screenshot of Lumpia Maker app."/>
              <div className="cardBody">
                <h5 className="cardTitle">Lumpia Maker</h5>
                <p className="cardText">A Filipino cuisine centered full-stack app that uses the Python-based Django Web Framework. Working on redeploy.</p>
                <div className="buttons">
                  <a href="https://lumpia-maker.herokuapp.com/" target="_blank" rel="noopener noreferrer" id="deployed" className="btn btn-primary">Deployed</a>
                  <a href="https://github.com/ilsyim/lumpia" target="_blank" rel="noopener noreferrer" id="git" className="btn btn-secondary">GitHub</a>
                </div>
              </div>
          </div>
          <div className="card" style={{width: "18rem"}}>
            <img src="/rachel.png" className="cardImgTop" alt="Screenshot of Rachel's Photography app."/>
              <div className="cardBody">
                <h5 className="cardTitle">Rachel's Photography</h5>
                <p className="cardText">A full-stack app created to showcase my friend's photography. Functional but working on improvements.</p>
                <div className="buttons">
                  <a href="https://rachel-photo-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" id="deployed" className="btn btn-primary">Deployed</a>
                  <a href="https://github.com/ilsyim/rachel-front" target="_blank" rel="noopener noreferrer" id="git" className="btn btn-secondary">GitHub</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work