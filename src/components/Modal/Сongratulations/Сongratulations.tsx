import { FC, useEffect, useRef } from 'react';
import Portal from '../Portal';
import { Button } from 'components';

import styles from './Сongratulations.module.scss';

interface IСongratulationsProps {
  closeModal: () => void;
}

export const Сongratulations: FC<IСongratulationsProps> = ({ closeModal }) => {
  const ModalBgRef = useRef<HTMLDivElement>(null);

  const outsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === ModalBgRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    document.body.classList.add(styles.modalOpen);

    return () => {
      document.body.classList.remove(styles.modalOpen);
    };
  }, []);

  return (
    <Portal>
      <div className={styles.congratulations__bg} ref={ModalBgRef} onClick={outsideClick}>
        <div className={styles.congratulations}>
          <h3 className={styles.congratulations__title}>Congratulations</h3>
          <p className={styles.congratulations__text}>You have successfully passed the registration </p>
          <Button text="Great" onClick={closeModal} />
        </div>
      </div>
    </Portal>
  );
};
