import React from 'react';
import PropTypes from 'prop-types';

import s from './Social-profile.module.css';

const Profile = ({ user }) => {
  const { avatar, name, tag, location } = user;
  return (
    <>
      <div className={s.container}>
        <img className={s.imgAvatar} src={avatar} alt={name} width="320" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
    </>
  );
};

Profile.defaultProps = {
  avatar: `http://placehold.it/320x320`,
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
};

export default Profile;
