import css from './User.module.css';
import PropTypes from 'prop-types';
import defaultImage from '../images/default-image.jpg';

export const UserProfile = ({
  username,
  tag,
  location,
  avatar = defaultImage,
  stats,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.userInfo}>
        <img
          src={avatar}
          alt={username}
          className={css.avatarImage}
          width="270px"
          height="200px"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsList}>
          <span className="label">Followers: </span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.statsList}>
          <span className="label">Views: </span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.statsList}>
          <span className="label">Likes: </span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
