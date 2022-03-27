import { IHeaderNavigation } from 'types/form';
import styles from './Header.module.scss';

export const HeaderLink = ({ name, link }: IHeaderNavigation) => {
  return (
    <a className={styles.header__link} href={link}>
      {name}
    </a>
  );
};
