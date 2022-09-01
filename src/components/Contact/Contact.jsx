import styles from './Contact.module.css'

const Contact = () => {



  return (
    <>
      <div id={styles.contactSect} className={styles.section}>
        <div>
          <a href="https://github.com/ilsyim" target="_blank" rel="noopener noreferrer"><img src={"../icons8-github-100.png"} className={styles.icon} alt="GitHub icon" /></a>

          <a href="https://www.linkedin.com/in/ilyanasimmons/" target="_blank" rel="noopener noreferrer"><img src="../icons8-linkedin-circled-100.png" alt="LinkedIn icon" className={styles.icon}/></a>

          <a href="mailto:simmonsilyana@gmail.com"><img src="../icons8-email-open-100.png" alt="Email icon" className={styles.icon}/></a>
        </div>
      </div>
    </>
  )
}

export default Contact