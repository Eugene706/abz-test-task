import { FC } from 'react';
import { CustomTooltip } from 'components';
import { IUser } from 'types/form';
import styles from './UserCard.module.scss';

interface IUserCardProps {
  user: IUser;
}

export const UserCard: FC<IUserCardProps> = ({ user }) => {
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
      <img className={styles.user__avatar} src={user.photo} alt="Avatar" />
      {defineTooltip(user.name, 43, styles.user__name)}
      <p className={styles.user__info}>
        {defineTooltip(user.position, 60, styles.user__position)}
        {defineTooltip(user.email, 23, styles.user__email)}
        <span className={styles.user__phone}>{user.phone}</span>
      </p>
    </div>
  );
};
