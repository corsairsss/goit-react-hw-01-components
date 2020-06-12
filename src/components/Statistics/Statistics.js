import React from 'react';
import PropTypes from 'prop-types';

import s from './Statistics.module.css';

import getRandomColor from '../../helpers/randomColor.js';

const Statistic = ({ title, stats }) => {
  return (
    <div className={s.container}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(stat => {
          const cl = getRandomColor();
          return (
            <li
              style={{ backgroundColor: `${cl}` }}
              className={s.listItem}
              key={stat.id}
            >
              <span className={s.statLabel}>{stat.label}</span>
              <span className={s.statPercentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Statistic.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string,
};

export default Statistic;
