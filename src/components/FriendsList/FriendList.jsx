import css from './FriendList.module.css';

import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friendsList }) => (
  <ul className={css.friends}>
    {friendsList.map(({ avatar, name, isOnline, id }) => {
      return (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      );
    })}{' '}
  </ul>
);
