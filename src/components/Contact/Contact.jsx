import styles from './Contact.module.css'

const Contact = () => {



  return (
    <>
      <h1>This is the contact section</h1>
      <div id="contactSect" className={styles.section}>
        <a href="https://github.com/ilsyim" target="_blank"><img src={"../icons8-github-100.png"} className={styles.icon}/></a>

        <a href="https://www.linkedin.com/in/ilyanasimmons/" target="_blank"><img src="../icons8-linkedin-circled-100.png"  className={styles.icon}/></a>

        <a href="mailto:simmonsilyana@gmail.com"><img src="../icons8-email-open-100.png" className={styles.icon}/></a>
      </div>
    </>
  )
}

export default Contact