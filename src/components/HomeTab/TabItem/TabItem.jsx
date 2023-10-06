import moment from 'moment';
import css from './TabItem.module.css';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

const TabItem = ({ date, type, category, comment, amount }) => {
  const formatedDate = moment(date).format('DD.MM.YY');
  return (
    <tr className={css.row}>
      <td className={cn(css.item, css.itemFirst)} style={{ width: '80px' }}>
        {formatedDate}
      </td>
      <td className={cn(css.item, css.itemType)} style={{ width: '110px' }}>
        {type}
      </td>
      <td className={cn(css.item, css.category)} style={{ width: '140px' }}>
        {category}
      </td>
      <td className={cn(css.item, css.comment)} style={{ width: '260px' }}>
        {comment}
      </td>
      <td
        className={
          type === '+'
            ? cn(css.item, css.itemAmount, css.amountIncome)
            : cn(css.item, css.itemAmount, css.amountExpension)
        }
        style={{ width: '120px' }}
      >
        {amount}
      </td>
      <td className={cn(css.item, css.itemLast)} style={{ width: '140px' }}>
        <button className={css.editButton}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button className={css.deleteButton}>Delete</button>
      </td>
    </tr>
  );
};

export default TabItem;
