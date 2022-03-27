import { Button } from 'components';
import useMediaQuery from 'hooks/useMediaQuery';
import { IMediaMapImgs } from 'types/form';
import styles from './About.module.scss';

import DeveloperL from 'assets/svg/developer/Image-387x340.svg';
import DeveloperM from 'assets/svg/developer/Image-328x287.svg';
import DeveloperS from 'assets/svg/developer/Image-296x260.svg';

const sizePawsMap: IMediaMapImgs = {
  large: DeveloperL,
  medium: DeveloperS,
  small: DeveloperM,
};

export const Acquaintance = () => {
  const mediaType = useMediaQuery(767, 900);

  return (
    <section className={styles.acquaintance} id="about">
      <img src={sizePawsMap[mediaType]} alt="Developer" />

      <div className={styles.acquaintance__container}>
        <h2 className={styles.acquaintance__title}>Let's get acquainted</h2>
        <h3 className={styles.acquaintance__subtitle}>I'm a good front-end developer</h3>
        <p className={styles.acquaintance__description}>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of
          User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to
          learn, as the world of Front-End Development keeps evolving.
        </p>
        <a href="#registration">
          <Button text="Sign up" />
        </a>
      </div>
    </section>
  );
};
