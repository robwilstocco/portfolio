import { FaBars } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.menu}>
          <div className={styles.menuLogo}>
            <span className={styles.left}>{'<'}</span>
            <img className={styles.name} src="./RobertWilson.png" alt="Robert Wilson" />
            <span className={styles.right}>{'/>'}</span>
          </div>
          <img className={styles.miniLogo} src="miniLogo.png" alt="RW" />
          <ul className={styles.menuList}>
            <li><a className={styles.link} href="#start" >Inicio</a></li>
            <li><a className={styles.link} href="#about">Sobre mim</a></li>
            <li><a className={styles.link} href="#experiences">Experiências</a></li>
            <li><a className={styles.link} href="#projects">Projetos</a></li>
            <li><a className={styles.link} href="#certificates">Certificações</a></li>
            <li><a className={styles.link} href="#skills">Skills</a></li>
          </ul>
          <div className={styles.hamburguer}>
            <FaBars />
          </div>
        </nav>
      </header>
      <div className={`${styles.progress} animation-progress`} />
    </>
  )
}

export default Header;