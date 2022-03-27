import { useEffect, useRef, useState } from 'react';
import Portal from 'components/Modal/Portal';
import { HeaderLink } from './HeaderLink';
import { List } from 'utils/List';
import { IHeaderNavigation } from 'types/form';
import { headerMobileNavigation } from 'content/header';

import styles from './Header.module.scss';

import Logo from 'assets/svg/Logo.svg';

interface IMobileMenuProps {
  closeModal: () => void;
}

export const MobileMenu = ({ closeModal }: IMobileMenuProps) => {
  const ModalBgRef = useRef<HTMLDivElement>(null);
  const [closingModal, setClosingModal] = useState(false);

  const outsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === ModalBgRef.current) {
      setClosingModal(true);
      setTimeout(() => {
        closeModal();
      }, 400);
    }
  };

  useEffect(() => {
    document.body.classList.add(styles.menuOpen);

    return () => {
      document.body.classList.remove(styles.menuOpen);
    };
  }, []);

  return (
    <Portal>
      <div className={styles.mobileMenu__bg} ref={ModalBgRef} onClick={outsideClick}>
        <div className={`${styles.mobileMenu} ${closingModal && styles.closeModal}`}>
          <a href="#top" className={styles.mobileMenu__logo}>
            <img src={Logo} alt="logo" />
          </a>
          {headerMobileNavigation.map((item) => (
            <div className={styles.mobileMenu__listSection}>
              <hr />
              <List<IHeaderNavigation> values={item} component={HeaderLink} extractKey={(value) => value.name} />
            </div>
          ))}
        </div>
      </div>
    </Portal>
  );
};
