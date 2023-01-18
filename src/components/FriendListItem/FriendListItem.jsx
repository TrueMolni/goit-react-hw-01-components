import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span
        className={clsx(css.status, {
          [css.isOnline]: isOnline,
          [css.isOffline]: !isOnline,
        })}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
// {isOnline ? className={css.isOnline} : className={css.isOffline}}

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
