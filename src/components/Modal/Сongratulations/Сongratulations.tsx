import { FC, useEffect, useRef } from 'react';
import Portal from '../Portal';
import { Button } from 'components';
import { IRegistrationResponse } from 'types/form';

import styles from './Сongratulations.module.scss';

interface IСongratulationsProps {
  closeModal: () => void;
  error: IRegistrationResponse | undefined;
}

export const Сongratulations: FC<IСongratulationsProps> = ({ closeModal, error }) => {
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
          {error?.success ? (
            <>
              <h3 className={styles.congratulations__title}>Congratulations</h3>
              <p className={styles.congratulations__text}>You have successfully passed the registration </p>
            </>
          ) : (
            <p className={styles.congratulations__text}>{error?.message}</p>
          )}
          <Button text={error?.success ? 'Great' : 'Ok'} onClick={closeModal} />
        </div>
      </div>
    </Portal>
  );
};
