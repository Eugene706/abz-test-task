import { CustomTooltip } from 'components';
import { IUser } from 'types/form';
import styles from './UserCard.module.scss';

export const UserCard = ({ photo, name, position, email, phone }: IUser) => {
  const defineTooltip = (value: string, maxLength: number, className: string) => {
    if (value.length > maxLength) {
      return (
        <CustomTooltip title={value}>
          <span className={`pointer ${className}`}>{value}</span>
        </CustomTooltip>
      );
    }
    return <span className={className}>{value}</span>;
  };

  return (
    <div className={styles.user}>
      <img className={styles.user__avatar} src={photo} alt="Avatar" />
      {defineTooltip(name, 43, styles.user__name)}
      <p className={styles.user__info}>
        {defineTooltip(position, 60, styles.user__position)}
        {defineTooltip(email, 23, styles.user__email)}
        <span className={styles.user__phone}>{phone}</span>
      </p>
    </div>
  );
};
