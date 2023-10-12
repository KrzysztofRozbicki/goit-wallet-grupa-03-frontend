//Ten komponent zawiera logikę subskrybowania na redux store, otrzymania wszystkich niezbędnych danych.
//Implementacja metod filtrowania danych.
//I te elementy stanu i metod przekazać przez props do podrzędnych elementów Table i Chart

//Jest prawdopodobnie dzieckiem DashboardPage z którego pobiera dane i zapisuje je na redux w finance

import { useSelector } from 'react-redux';
import { selectTotalBalance, selectData } from '../../redux/finance/selectors';
// import { setTotalBalance, setData, resetFinance } from '../../redux/finance/financeSlice';
import { categories } from './diagramUtils';
import Chart from '../Chart/Chart';
import Table from '../Table/Table';
import css from './DiagramTab.module.css';

export const DiagramTab = () => {
  
  const totalBalance = useSelector(selectTotalBalance);
  const data = useSelector(selectData);

  console.log(data)

  // reducing expenses values to single categories (totals by category)
  const categorySum = data.reduce((acc, transaction) => {

    const { category, amount } = transaction;
    
    if (!acc[category]) {
      acc[category] = 0;
    }
    
    acc[category] += amount;
    
    return acc;
  }, {});

  console.log(categorySum)

  // populating transactions object based on array of categories in correct order
  const transactions = categories.map(category => ({
    category,
    amount: categorySum[category] || 0,
  }));


  const totalIncome = data.map(e => e.isIncome ? e.amount : 0).reduce((acc, curr) => acc + curr, 0)
  const totalExpenses = data.map(e => e.isIncome ? 0 : e.amount).reduce((acc, curr) => acc + curr, 0)
  
  console.log(transactions)

  return (
    <>
    <div>
      <h3 className={css.diagramHeader}>Statistics</h3>
      <div className={css.diagramContainer}>
        <Chart transactions={transactions} totalBalance={totalBalance} />
        <Table 
          transactions={transactions} 
          totalBalance={totalBalance} 
          totalExpenses={totalExpenses}
          totalIncome={totalIncome} />
      </div>
    </div>
    </>
  );
};

export default DiagramTab;
