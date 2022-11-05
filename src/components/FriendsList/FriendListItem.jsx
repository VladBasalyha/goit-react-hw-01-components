import css from './FriendList.module.css';
import defaultImage from '../images/default-image.jpg';

export const FriendListItem = ({ isOnline, avatar = defaultImage, name }) => (
  <li className={css.friendInfo}>
    <span className={isOnline ? css.online : css.offline}>{isOnline}</span>
    <img
      className={css.friendImage}
      src={avatar}
      alt="User avatar"
      width="30"
      height="50"
    />
    <p className={css.friendName}>{name}</p>
  </li>
);
