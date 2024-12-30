import { FaBars } from 'react-icons/fa';
import { RiCloseLargeLine } from "react-icons/ri";
import { useState } from 'react';
import styles from './Header.module.css';
import classNames from 'classnames';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const menuItems = [
    { href: '#start', label: 'Inicio' },
    { href: '#about', label: 'Sobre mim' },
    { href: '#experiences', label: 'Experiências' },
    { href: '#projects', label: 'Projetos' },
    { href: '#certificates', label: 'Certificações' },
    { href: '#skills', label: 'Skills' },
  ];

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
          <ul className={classNames(styles.menuList, { [styles.hide]: !isMenuOpen, [styles.show]: isMenuOpen })}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a className={styles.link} href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className={styles.hamburguer}>
            <button
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? <RiCloseLargeLine /> : <FaBars />}
            </button>
          </div>
        </nav>
      </header>
      <div className={`${styles.progress} animation-progress`} />
    </>
  );
};

export default Header;