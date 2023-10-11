import css from './TabItem.module.css';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { cashFormatter } from '../../../utils/cashFormatter';
import { openModalEditTransaction } from '../../../redux/global/globalSlice';
import { deleteTransaction } from '../../../redux/finance/operations';

const TabItem = ({ _id, date, isIncome, category, comment, amount }) => {
  const formatedDate = date.replace(/\-/g, '.').substr(0, 6) + date.slice(8);

  const dispatch = useDispatch();
  return (
    <tr className={css.row}>
      <td className={cn(css.item, css.itemFirst)} style={{ width: '80px' }}>
        {formatedDate}
      </td>
      <td className={cn(css.item, css.itemType)} style={{ width: '110px' }}>
        {isIncome ? '+' : '-'}
      </td>
      <td className={cn(css.item, css.category)} style={{ width: '140px' }}>
        {category}
      </td>
      <td className={cn(css.item, css.comment)} style={{ width: '260px' }}>
        {comment}
      </td>
      <td
        className={
          isIncome
            ? cn(css.item, css.itemAmount, css.amountIncome)
            : cn(css.item, css.itemAmount, css.amountExpension)
        }
        style={{ width: '120px' }}
      >
        {cashFormatter(amount)}
      </td>
      <td className={cn(css.item, css.itemLast)} style={{ width: '140px' }}>
        <button
          className={css.editButton}
          onClick={() => {
            dispatch(openModalEditTransaction(_id));
          }}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button
          className={css.deleteButton}
          onClick={() => {
            dispatch(deleteTransaction(_id));
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TabItem;
