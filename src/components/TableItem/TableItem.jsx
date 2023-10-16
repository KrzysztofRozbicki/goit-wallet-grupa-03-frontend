import PropTypes from 'prop-types';

import { cashFormatter } from '../../utils/cashFormatter';

import css from './TableItem.module.css';

const TableItem = ({ colors, category, amount }) => {
  return (
    <li key={crypto.randomUUID()} className={css.tableItem}>
      <div style={{ backgroundColor: colors }} className={css.colorBlock}></div>
      <span className={css.category}>{category}</span>
      <span className={css.amount}>{cashFormatter(amount)}</span>
    </li>
  );
};

TableItem.propTypes = {
  colors: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default TableItem;
