import cn from 'classnames';
import css from './TabMobileItem.module.css';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

const TabMobileItem = ({ date, type, category, comment, amount }) => {
  const formatedDate = moment(date).format('DD.MM.YY');
  const [isIncome, setIsIncome] = useState(false);

  useEffect(() => {
    setIsIncome(type === '+' ? true : false);
  }, [type, setIsIncome]);
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
            <td className={css.data}>{type}</td>
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
              <button className={css.deleteButton}>Delete</button>
            </td>
            <td className={cn(isIncome ? css.dataIncome : css.dataExpense, css.data, css.lastData)}>
              <button className={css.editButton}>
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

export default TabMobileItem;
