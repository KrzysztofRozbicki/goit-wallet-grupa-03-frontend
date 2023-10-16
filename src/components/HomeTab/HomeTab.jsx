import cn from 'classnames';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown, faSort } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import TabMobileItem from './TabMobileItem/TabMobileItem';
import ButtonAddTransactions from './../ButtonAddTransactions/ButtonAddTransactions';
import TabItem from './TabItem/TabItem';
import { selectData } from '../../redux/finance/selectors';

import css from './HomeTab.module.css';

const HomeTab = () => {
  const items = useSelector(selectData);
  const [sortedItems, setSortedItems] = useState([]);
  const [isSortedByType, setIsSortedByType] = useState(false);
  const [isSortedBySum, setIsSortedBySum] = useState(false);
  const [isSortedByDate, setIsSortedByDate] = useState(false);
  const [isSortedByCategory, setIsSortedByCategory] = useState(false);

  const resetSort = () => {
    setIsSortedByType(false);
    setIsSortedBySum(false);
    setIsSortedByDate(false);
    setIsSortedByCategory(false);
  };

  useEffect(() => {
    setSortedItems(
      items.map(obj => {
        return { ...obj, sortDate: moment(obj.date, 'DD-MM-YYYY') };
      })
    );
  }, [items]);

  const getCurrentDimension = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  const sortByDate = () => {
    resetSort();
    if (isSortedByDate === 'up' || isSortedByDate === false) {
      setSortedItems(sortedItems.sort((a, b) => Number(a.sortDate) - Number(b.sortDate)));
      setIsSortedByDate('down');
    } else if (isSortedByDate === 'down') {
      setSortedItems(sortedItems.sort((a, b) => Number(b.sortDate) - Number(a.sortDate)));

      setIsSortedByDate('up');
    }
  };

  const sortType = () => {
    resetSort();
    if (isSortedByType === 'up' || isSortedByType === false) {
      setSortedItems(sortedItems.sort((a, b) => a.isIncome - b.isIncome));
      setIsSortedByType('down');
    } else if (isSortedByType === 'down') {
      setSortedItems(sortedItems.sort((a, b) => b.isIncome - a.isIncome));

      setIsSortedByType('up');
    }
  };

  const sortBySum = () => {
    resetSort();
    if (isSortedBySum === 'up' || isSortedBySum === false) {
      setSortedItems(sortedItems.sort((a, b) => a.amount - b.amount));
      setIsSortedBySum('down');
    } else if (isSortedBySum === 'down') {
      setSortedItems(sortedItems.sort((a, b) => b.amount - a.amount));

      setIsSortedBySum('up');
    }
  };

  const sortByCategory = () => {
    resetSort();
    if (isSortedByCategory === 'up' || isSortedByCategory === false) {
      setSortedItems(sortedItems.sort((a, b) => a.category.localeCompare(b.category)));
      setIsSortedByCategory('down');
    } else if (isSortedByCategory === 'down') {
      setSortedItems(sortedItems.sort((a, b) => b.category.localeCompare(a.category)));
      setIsSortedByCategory('up');
    }
  };

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, [screenSize]);

  return (
    <>
      {screenSize.width > 767 && (
        <table className={css.table}>
          <thead>
            <tr className={css.tableHeader}>
              <th className={cn(css.item, css.itemFirst)} style={{ width: '110px' }}>
                <a onClick={sortByDate} href="#" className={css.sortedBy}>
                  Date
                  {!isSortedByDate ? (
                    <FontAwesomeIcon
                      icon={faSort}
                      style={{ marginLeft: '6px', color: '#e7eaf2' }}
                    />
                  ) : null}
                  {isSortedByDate === 'up' && (
                    <FontAwesomeIcon
                      icon={faSortUp}
                      style={{ marginLeft: '6px', color: 'black' }}
                    />
                  )}
                  {isSortedByDate === 'down' && (
                    <FontAwesomeIcon
                      icon={faSortDown}
                      style={{ marginLeft: '6px', color: 'black' }}
                    />
                  )}
                </a>
              </th>
              <th className={cn(css.item, css.itemType)} style={{ width: '80px' }}>
                <a onClick={sortType} href="#" className={css.sortedBy}>
                  Type
                  {!isSortedByType ? (
                    <FontAwesomeIcon
                      icon={faSort}
                      style={{ marginLeft: '6px', color: '#e7eaf2' }}
                    />
                  ) : null}
                  {isSortedByType === 'up' && (
                    <FontAwesomeIcon
                      icon={faSortUp}
                      style={{ marginLeft: '6px', color: 'black' }}
                    />
                  )}
                  {isSortedByType === 'down' && (
                    <FontAwesomeIcon
                      icon={faSortDown}
                      style={{ marginLeft: '6px', color: 'black' }}
                    />
                  )}
                </a>
              </th>
              <th className={css.item} style={{ width: '150px' }}>
                <a onClick={sortByCategory} href="#" className={css.sortedBy}>
                  Category
                  {!isSortedByCategory ? (
                    <FontAwesomeIcon
                      icon={faSort}
                      style={{ marginLeft: '6px', color: '#e7eaf2' }}
                    />
                  ) : null}
                  {isSortedByCategory === 'up' && (
                    <FontAwesomeIcon
                      icon={faSortUp}
                      style={{ marginLeft: '6px', color: 'black' }}
                    />
                  )}
                  {isSortedByCategory === 'down' && (
                    <FontAwesomeIcon
                      icon={faSortDown}
                      style={{ marginLeft: '6px', color: 'black' }}
                    />
                  )}
                </a>
              </th>
              <th className={css.item} style={{ width: '300px' }}>
                Comment
              </th>
              <th className={css.item} style={{ width: '120px' }}>
                <a onClick={sortBySum} href="#" className={css.sortedBy}>
                  {!isSortedBySum ? (
                    <FontAwesomeIcon
                      icon={faSort}
                      style={{ marginRight: '6px', color: '#e7eaf2' }}
                    />
                  ) : null}
                  {isSortedBySum === 'up' && (
                    <FontAwesomeIcon
                      icon={faSortUp}
                      style={{ marginRight: '6px', color: 'black' }}
                    />
                  )}
                  {isSortedBySum === 'down' && (
                    <FontAwesomeIcon
                      icon={faSortDown}
                      style={{ marginRight: '6px', color: 'black' }}
                    />
                  )}
                  Sum
                </a>
              </th>
              <th className={cn(css.item, css.itemLast)} style={{ width: '100px' }}></th>
            </tr>
          </thead>

          <tbody className={css.tableBody}>
            {sortedItems.length > 0 &&
              sortedItems.map(item => <TabItem key={item._id} {...item} />)}
          </tbody>
        </table>
      )}
      {screenSize.width < 767 && sortedItems.length > 0 && (
        <div className={css.mobileContainer}>
          {sortedItems.map(item => (
            <TabMobileItem key={item._id} {...item} />
          ))}
        </div>
      )}
      <ButtonAddTransactions />
    </>
  );
};

export default HomeTab;
