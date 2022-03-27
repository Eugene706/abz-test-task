import { useState } from 'react';
import { Container, HeaderLink } from 'components';
import { List } from 'utils/List';
import { headerNavigation } from 'content/header';
import styles from './Header.module.scss';

import Logo from 'assets/svg/Logo.svg';
import Menu from 'assets/svg/Menu.svg';
import { MobileMenu } from './MobileMenu';
import { IHeaderNavigation } from 'types/form';

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
          <List<IHeaderNavigation> values={headerNavigation} component={HeaderLink} extractKey={(value) => value.name} />
        </nav>
        <button className={styles.header__menu} onClick={() => setOpenMobile(true)}>
          <img src={Menu} alt="Menu" />
        </button>
      </Container>
      {openMobile && <MobileMenu closeModal={closeModal} />}
    </header>
  );
};
