import { useSelector } from 'react-redux';
import { selectData, selectFilteredData } from '../../redux/finance/selectors';
// import { setTotalBalance, setData, resetFinance } from '../../redux/finance/financeSlice';
import { categories } from './diagramUtils';
import Chart from '../Chart/Chart';
import Table from '../Table/Table';
import css from './DiagramTab.module.css';
import { months } from '../Table/dateOptions';
import { useEffect, useState } from 'react';

export const DiagramTab = () => {

  const data = useSelector(selectData);
  const filteredData = useSelector(selectFilteredData);

  // const [response, setResponse] = useState(() => data);

  // useEffect(() => {
  //   if (filteredData[0]) {
  //     setResponse(filteredData)
  //   }   
  // }, [filteredData]);

  const response = filteredData || data

  // reducing expenses values to single categories (totals by category)
  const categorySum = response.reduce((acc, transaction) => {

    const { category, amount } = transaction;
    
    if (!acc[category]) {
      acc[category] = 0;
    }
    
    acc[category] += amount;
    
    return acc;
  }, {});
  
  // populating transactions object based on array of categories in correct order
  const transactions = categories.map(category => ({
    category,
    amount: categorySum[category] || 0,
  }));

  // checking for present months and years in the data to render as a select option
  const filteredYears = data
    .map(e => e.date.slice(6))
    .filter((e, idx, array) => array.indexOf(e) === idx )
    .sort((a,b) => +a - +b)
  
  const checkedMonths = data
    .map(e => e.date.slice(3, 5))
    .filter((e, idx, array) => array.indexOf(e) === idx )
  
  const filteredMonths = months
    .map(e => checkedMonths.includes(e.value) ? e : null)
    .filter(e => e !== null)

  /////Calculating income, expenses and total balance
  const totalIncome = response
    .map(e => e.isIncome ? e.amount : 0)
    .reduce((acc, curr) => acc + curr, 0)
  
    const totalExpenses = response
    .map(e => e.isIncome ? 0 : e.amount)
    .reduce((acc, curr) => acc + curr, 0)
  
  const totalBalance = totalIncome - totalExpenses

  return (
    <>
    <div className={css.wrapper}>
      
      <div className={css.diagramContainer}>
      
        <Chart 
          transactions={transactions} 
          totalBalance={totalBalance} 
        />
        <Table 
          transactions={transactions} 
          totalBalance={totalBalance} 
          totalExpenses={totalExpenses}
          totalIncome={totalIncome} 
          years={filteredYears} 
          months={filteredMonths}
        />
      </div>
    </div>
    </>
  );
};

export default DiagramTab;
