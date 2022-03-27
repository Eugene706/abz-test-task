import { useState } from 'react';
import { Container, HeaderLink } from 'components';
import { headerNavigation } from 'content/header';
import styles from './Header.module.scss';

import Logo from 'assets/svg/Logo.svg';
import Menu from 'assets/svg/Menu.svg';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const [openMobile, setOpenMobile] = useState(false);

  const closeModal = () => {
    setOpenMobile(false);
  };

  return (
    <header className={styles.header}>
      <Container className={styles.header__content}>
        <a href="#top">
          <img src={Logo} alt="logo" />
        </a>
        <nav className={styles.header__navigation}>
          {headerNavigation.map((item, index) => (
            <HeaderLink name={item.name} link={item.link} key={`${index}_${item.name}`} />
          ))}
        </nav>
        <button className={styles.header__menu} onClick={() => setOpenMobile(true)}>
          <img src={Menu} alt="Menu" />
        </button>
      </Container>
      {openMobile && <MobileMenu closeModal={closeModal} />}
    </header>
  );
};
