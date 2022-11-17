import css from './TransactionHistory.module.css';
import PropTypes, { object } from 'prop-types';

export const TransactionHistory = ({ transactions }) => (
  <table className={css.transactionTable}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => (
        <tr key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};
