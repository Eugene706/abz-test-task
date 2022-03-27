import useMediaQuery from 'hooks/useMediaQuery';
import { IMediaMapImgs } from 'types/form';
import styles from './Footer.module.scss';

import PawsS from 'assets/svg/paws/Footprint-328x124.svg';
import PawsM from 'assets/svg/paws/Footprint-467x177.svg';
import PawsL from 'assets/svg/paws/Footprint-972x177.svg';

const sizePawsMap: IMediaMapImgs = {
  large: PawsL,
  medium: PawsM,
  small: PawsS,
};

export const Footer = () => {
  const mediaType = useMediaQuery(500, 1350);

  return (
    <div className={styles.footer}>
      <img className={styles.footer__img} src={sizePawsMap[mediaType]} alt="Paws" />
      <h4> &#169; abz.agency specially for the test task</h4>
    </div>
  );
};
