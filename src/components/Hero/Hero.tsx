import { Container, Button } from 'components';
import styles from './Hero.module.scss';
import Banner from 'assets/jpg/banner_photo.jpg';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.hero__content}>
        <img className={styles.hero__banner} src={Banner} alt="banner" />
        <div className={styles.hero__text}>
          <h1 className={styles.hero__title}>Test assignment for front-end developers</h1>
          <p className={styles.hero__description}>
            Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion.
            <span className={styles.hero__description_invisible}>
              {' '}
              Therefore, responsive design, programming languages and specific frameworks are the must-have skillsets to look for
              when assessing your front-end developers.
            </span>
          </p>
          <a href="#registration">
            <Button text="Sign up" />
          </a>
        </div>
      </Container>
    </section>
  );
};
