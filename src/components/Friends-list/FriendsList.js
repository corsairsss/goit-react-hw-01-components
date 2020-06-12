import React from 'react';
import PropTypes from 'prop-types';

import s from './Friends.module.css';

const FriendsList = ({ friends }) => {
  return (
    <>
      <ul className={s.list}>
        {friends.map(friend => (
          <li className={s.listItem} key={friend.id}>
            <span
              className={s.status}
              style={
                friend.isOnline
                  ? { backgroundColor: 'green' }
                  : { backgroundColor: 'red' }
              }
            ></span>
            <img
              className={s.ImgAvatar}
              src={friend.avatar}
              alt=""
              width="80"
            />
            <p className={s.nameFriend}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default FriendsList;
