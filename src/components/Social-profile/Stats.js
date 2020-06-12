import React from 'react';
import PropTypes from 'prop-types';

import s from './Social-profile.module.css';

const Stats = ({ stats }) => {
  return (
    <>
      <ul className={s.list}>
        <li className={s.listItem}>
          <span>Followers</span>
          <span className={s.statsQuantity}>{stats.followers}</span>
        </li>
        <li className={s.listItem}>
          <span>Views</span>
          <span className={s.statsQuantity}>{stats.views}</span>
        </li>
        <li className={s.listItem}>
          <span>Likes</span>
          <span className={s.statsQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </>
  );
};

Stats.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Stats;
