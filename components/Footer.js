import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo.svg" alt="Rathi Foods" className={styles.logo} />
      </footer>
    </>
  )
}
