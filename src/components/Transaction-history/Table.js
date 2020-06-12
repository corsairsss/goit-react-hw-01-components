import React from 'react';
import PropTypes from 'prop-types';

import s from './Transaction-history.module.css';

const TransactonHistory = ({ operations }) => {
  return (
    <>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={s.trThead}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {operations.map(operation => (
            <tr className={s.trTbody} key={operation.id}>
              <td>
                {operation.type.charAt(0).toUpperCase() +
                  operation.type.slice(1)}
              </td>
              <td>{operation.amount}</td>
              <td>{operation.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

TransactonHistory.propTypes = {
  operations: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactonHistory;
