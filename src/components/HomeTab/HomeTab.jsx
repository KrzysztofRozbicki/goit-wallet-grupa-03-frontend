// Komponent zasubskrybowano na redux store, a mianowicie finance.data i renderuje całą jego zawartość

// Logika filtrowania transakcji jest zaimplementowana w tym komponencie,
//na górze powinny być najnowsze transakcje według daty

// Przemyślany max-height: 60vh; (na przykład, a następnie włącza się przewijanie wewnątrz komponentu,
// ile vh - porozmawiać o tym z autorem DashboardPage)

// Nie do końca rozumiem powiązanie z innymi komponentami - szczegolnie z DiagramTab oraz DashboardPage

import css from './HomeTab.module.css';
import TabItem from './TabItem/TabItem';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import TabMobileItem from './TabMobileItem/TabMobileItem';
import ButtonAddTransactions from './../ButtonAddTransactions/ButtonAddTransactions';
import { useSelector } from 'react-redux';
import { selectData } from '../../redux/finance/selectors';
import moment from 'moment';

const HomeTab = () => {
  const items = useSelector(selectData);
  const [sortedItems, setSortedItems] = useState([]);
  const [isSortedByType, setIsSortedByType] = useState(false);
  const [isSortedBySum, setIsSortedBySum] = useState(false);
  const [isSortedByDate, setIsSortedByDate] = useState(false);

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
    setIsSortedBySum(false);
    setIsSortedByType(false);

    if (isSortedByDate === 'up' || isSortedByDate === false) {
      setSortedItems(sortedItems.sort((a, b) => Number(a.sortDate) - Number(b.sortDate)));
      setIsSortedByDate('down');
    } else if (isSortedByDate === 'down') {
      setSortedItems(sortedItems.sort((a, b) => Number(b.sortDate) - Number(a.sortDate)));

      setIsSortedByDate('up');
    }
  };

  const sortType = () => {
    setIsSortedBySum(false);
    setIsSortedByDate(false);
    if (isSortedByType === 'up' || isSortedByType === false) {
      setSortedItems(sortedItems.sort((a, b) => a.isIncome - b.isIncome));
      setIsSortedByType('down');
    } else if (isSortedByType === 'down') {
      setSortedItems(sortedItems.sort((a, b) => b.isIncome - a.isIncome));

      setIsSortedByType('up');
    }
  };

  const sortBySum = () => {
    console.log('sum');
    if (isSortedBySum === 'up' || isSortedBySum === false) {
      setSortedItems(sortedItems.sort((a, b) => a.amount - b.amount));
      setIsSortedBySum('down');
    } else if (isSortedBySum === 'down') {
      setSortedItems(sortedItems.sort((a, b) => b.amount - a.amount));

      setIsSortedBySum('up');
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
                  {isSortedByDate === 'up' && (
                    <FontAwesomeIcon
                      icon={faSortUp}
                      style={{ marginRight: '4px', color: 'black' }}
                    />
                  )}
                  {isSortedByDate === 'down' && (
                    <FontAwesomeIcon
                      icon={faSortDown}
                      style={{ marginRight: '4px', color: 'black' }}
                    />
                  )}
                  Date
                </a>
              </th>
              <th className={cn(css.item, css.itemType)} style={{ width: '80px' }}>
                <a onClick={sortType} href="#" className={css.sortedBy}>
                  {isSortedByType === 'up' && (
                    <FontAwesomeIcon
                      icon={faSortUp}
                      style={{ marginRight: '4px', color: 'black' }}
                    />
                  )}
                  {isSortedByType === 'down' && (
                    <FontAwesomeIcon
                      icon={faSortDown}
                      style={{ marginRight: '4px', color: 'black' }}
                    />
                  )}
                  Type
                </a>
              </th>
              <th className={css.item} style={{ width: '150px' }}>
                Category
              </th>
              <th className={css.item} style={{ width: '300px' }}>
                Comment
              </th>
              <th className={css.item} style={{ width: '120px' }}>
                <a onClick={sortBySum} href="#" className={css.sortedBy}>
                  {isSortedBySum === 'up' && (
                    <FontAwesomeIcon
                      icon={faSortUp}
                      style={{ marginRight: '4px', color: 'black' }}
                    />
                  )}
                  {isSortedBySum === 'down' && (
                    <FontAwesomeIcon
                      icon={faSortDown}
                      style={{ marginRight: '4px', color: 'black' }}
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
