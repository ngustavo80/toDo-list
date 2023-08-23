import styles from './Header.module.css'

import logoImg from '../assets/Logo.svg'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={logoImg} alt="Logo" />
    </header>
  )
}