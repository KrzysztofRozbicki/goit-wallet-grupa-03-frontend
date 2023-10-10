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
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import TabMobileItem from './TabMobileItem/TabMobileItem';
import ButtonAddTransactions from './../ButtonAddTransactions/ButtonAddTransactions';
import { useSelector } from 'react-redux';
import { selectData } from '../../redux/finance/selectors';

const HomeTab = () => {
  const items = useSelector(selectData);
  const [sortedItems, setSortedItems] = useState([]);
  const [isUpSorted, setIsUpSorted] = useState(true);
  console.log(items);

  useEffect(() => {
    setSortedItems(items);
  }, [items]);

  const getCurrentDimension = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  // const sortChangeHandler = () => {
  //   if (isUpSorted) {
  //     setSortedItems(
  //       sortedItems.sort((item1, item2) =>
  //         item1.date > item2.date ? 1 : item1.date < item2.date ? -1 : 0
  //       )
  //     );
  //     setIsUpSorted(false);
  //   } else {
  //     setSortedItems(
  //       sortedItems.sort((item1, item2) =>
  //         item1.date < item2.date ? 1 : item1.date > item2.date ? -1 : 0
  //       )
  //     );
  //     setIsUpSorted(true);
  //   }
  // };

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
        <>
          <table className={css.table}>
            <thead>
              <tr className={css.tableHeader}>
                <th className={cn(css.item, css.itemFirst)} style={{ width: '110px' }}>
                  {/* <a onClick={sortChangeHandler} href="#" className={css.sortedBy}> */}
                  {isUpSorted ? (
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      style={{ marginRight: '4px', color: 'black' }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      style={{ marginRight: '4px', color: 'black' }}
                    />
                  )}
                  Date
                  {/* </a> */}
                </th>
                <th className={cn(css.item, css.itemType)} style={{ width: '80px' }}>
                  Type
                </th>
                <th className={css.item} style={{ width: '150px' }}>
                  Category
                </th>
                <th className={css.item} style={{ width: '300px' }}>
                  Comment
                </th>
                <th className={css.item} style={{ width: '120px' }}>
                  Sum
                </th>
                <th className={cn(css.item, css.itemLast)} style={{ width: '100px' }}></th>
              </tr>
            </thead>
          </table>

          <tbody className={css.tableBody}>
            {sortedItems.length > 0 && sortedItems.map(item => <TabItem key={item.id} {...item} />)}
          </tbody>
        </>
      )}
      {screenSize.width < 767 &&
        sortedItems.length > 0 &&
        sortedItems.map(item => <TabMobileItem key={item._id} {...item} />)}
      <ButtonAddTransactions />
    </>
  );
};

export default HomeTab;
