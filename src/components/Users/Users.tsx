import { FC, useEffect, useState } from 'react';
import { Button, UserCard } from 'components';
import CircularProgress from '@mui/material/CircularProgress';
import useMediaQuery from 'hooks/useMediaQuery';
import { getUsers } from 'utils/api';
import { IUserObj, IUser } from 'types/form';
import styles from './Users.module.scss';
import { List } from 'utils/List';

interface IMediaMapNum {
  [key: string]: number;
}

interface IUsersProps {
  openModal: boolean;
}

const userAmountMap: IMediaMapNum = {
  large: 9,
  medium: 6,
  small: 3,
};

export const Users: FC<IUsersProps> = ({ openModal }) => {
  const [usersObj, setUsersObj] = useState<IUserObj>();

  const mediaType = useMediaQuery(541, 900);

  useEffect(() => {
    getUsers(userAmountMap[mediaType]).then((res) => setUsersObj(res));
  }, [mediaType, openModal]);

  const showMore = () => {
    usersObj?.page &&
      getUsers(userAmountMap[mediaType], usersObj.page + 1).then((res) => {
        if (res) {
          const newUsers = {
            ...res,
            users: [...usersObj.users, ...res.users],
          };
          setUsersObj(newUsers);
        }
      });
  };

  return (
    <section className={styles.users} id="users">
      <h2 className={styles.users__title}>Our cheerful users</h2>
      <h3 className={styles.users__subtitle}>The best specialists are shown below</h3>
      {!usersObj ? (
        <CircularProgress />
      ) : (
        <>
          <div className={styles.users__container}>
            <List<IUser> values={usersObj.users} component={UserCard} extractKey={(value) => value.email} />
          </div>
          <Button disabled={usersObj?.page === usersObj?.total_pages} onClick={showMore} text="Show more" />
        </>
      )}
    </section>
  );
};
