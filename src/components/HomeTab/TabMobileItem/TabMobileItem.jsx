import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

import { openModalEditTransaction } from '../../../redux/global/globalSlice';
import { deleteTransaction } from '../../../redux/finance/operations';

import cn from 'classnames';
import css from './TabMobileItem.module.css';

const TabMobileItem = ({ _id, date, isIncome, category, comment, amount }) => {
  const formatedDate = date.replace(/-/g, '.').substr(0, 6) + date.slice(8);

  const dispatch = useDispatch();
  return (
    <>
      <table className={css.table}>
        <tbody>
          <tr className={css.row}>
            <td
              className={cn(isIncome ? css.itemIncome : css.itemExpense, css.item, css.firstItem)}
            >
              Date
            </td>
            <td className={cn(css.data, css.firstData)}>{formatedDate}</td>
          </tr>
          <tr className={css.row}>
            <td className={cn(isIncome ? css.itemIncome : css.itemExpense, css.item)}>Type</td>
            <td className={css.data}> {isIncome ? '+' : '-'}</td>
          </tr>
          <tr className={css.row}>
            <td className={cn(isIncome ? css.itemIncome : css.itemExpense, css.item)}>Category</td>
            <td className={css.data}>{category}</td>
          </tr>
          <tr className={css.row}>
            <td className={cn(isIncome ? css.itemIncome : css.itemExpense, css.item)}>Comment</td>
            <td className={css.data}>{comment}</td>
          </tr>
          <tr className={css.row}>
            <td className={cn(isIncome ? css.itemIncome : css.itemExpense, css.item, css.Item)}>
              Sum
            </td>
            <td className={cn(isIncome ? css.dataIncome : css.dataExpense, css.data)}>{amount}</td>
          </tr>
          <tr className={css.row}>
            <td className={cn(isIncome ? css.itemIncome : css.itemExpense, css.item, css.lastItem)}>
              <button
                className={css.deleteButton}
                onClick={() => {
                  dispatch(deleteTransaction(_id));
                }}
              >
                Delete
              </button>
            </td>
            <td className={cn(isIncome ? css.dataIncome : css.dataExpense, css.data, css.lastData)}>
              <button
                className={css.editButton}
                onClick={() => {
                  dispatch(openModalEditTransaction(_id));
                }}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

TabMobileItem.propTypes = {
  _id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isIncome: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default TabMobileItem;
