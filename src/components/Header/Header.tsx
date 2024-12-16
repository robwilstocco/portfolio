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
          <ul className={styles.menuList}>
            <li><a className={styles.link} href="#inicio" >Inicio</a></li>
            <li><a className={styles.link} href="#sobre">Sobre mim</a></li>
            <li><a className={styles.link} href="#experiencia">Experiências</a></li>
            <li><a className={styles.link} href="#projetos">Projetos</a></li>
            <li><a className={styles.link} href="#certificacoes">Certificações</a></li>
            <li><a className={styles.link} href="#skills">Skills</a></li>
          </ul>
        </nav>
      </header>
      <div className={`${styles.progress} animation-progress`} />
    </>
  )
}

export default Header;