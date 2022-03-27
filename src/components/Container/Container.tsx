import { FC } from 'react';
import styles from './Container.module.scss';

interface IContainerProps {
  className?: string;
}

export const Container: FC<IContainerProps> = ({ children, className }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};
