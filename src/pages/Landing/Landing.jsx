import styles from './Landing.module.css'
import Portfolio from '../Portfolio/Portfolio'


const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Ilyana Simmons</h1>
      <Portfolio/>
    </main>
  )
}

export default Landing
