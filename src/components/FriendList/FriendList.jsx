import PropTypes from 'prop-types';
import FriendsListItem from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendsListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        ></FriendsListItem>
      ))}
    </ul>
  );
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};
