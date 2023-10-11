// Komponent bezstanowy (stateless) otrzymuje tablicę do renderowania oraz metody do filtrowania na select

// Dziecko DiagramTab

import css from './Table.module.css';
import Select from 'react-select'
import { selectStyles } from './selectStyles';
// import makeAnimated from 'react-select/animated'
// import { colors } from '../Chart/labels';
// import { categories } from '../../mock/categories';
import { categories, months, years } from './dateOptions'
// import { categories } from '../../mock/categories';
import TableItem from '../TableItem/TableItem';
import { colors } from '../Chart/labels';
import transactions from '../../mock/transactions';
import { cashFormatter } from '../../utils/cashFormatter';

const Table = () => {

  const expensesFiltered = transactions.filter(t => t.category !== 'Income')
  const incomeFiltered = transactions.filter(t => t.category === 'Income')

  let transactionsTotals = []
  expensesFiltered.map(({ category, amount }) => {
    return transactionsTotals.push({ category, amount })
  })

  // let userData = []
  // categories.map(cat => {
  //   expensesFiltered.reduce((acc, curr) => {
  //     const { category, amount } = curr
  //     acc[category] += amount
  //     return userData.push(acc)
  //   }, {})
  // })

  const categorySum = transactions.reduce((acc, transaction) => {
    const { category, amount } = transaction;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += Number.parseFloat(amount);
    return acc;
  }, {});

  const summedArray = categories.map(category => ({
    category,
    amount: categorySum[category] || 0,
  }));
    
  console.log(summedArray)

  // console.log(transactionsTotals)
  // console.log(userData)
  console.log(categorySum)

  const totalExpenses = () => {
    let totalExpenses = []
    
    expensesFiltered
      .map(e => totalExpenses.push(Number.parseFloat(e.amount)))
    
     return totalExpenses.reduce((acc, curr) => acc + curr, 0)
  }

  const totalIncome = () => {
    let totalIncome = []
    
    incomeFiltered
      .map(e => totalIncome.push(Number.parseFloat(e.amount)))
    
    return totalIncome.reduce((acc,curr) => acc + curr, 0)
  }

  return (
    <>
    <div>
      <div className={css.selectContainer}>
        <Select 
          options={months.map(month => {
            return {
              value: month,
              label: month,
            }
          })}
          placeholder='Month'
          isSearchable={false}
          styles={selectStyles}
        />
        <Select
          options={years.map(year => {
            return {
              value: year,
              label: year
            }
          })}
          placeholder='Year'
          isSearchable={false}
          styles={selectStyles}
        />
      </div>
      <div className={css.tableContainer}>
        <div className={css.tableHeader}>
          <p>category</p>
          <p>sum</p>
        </div>
        <ul className={css.tableList}>
          {expensesFiltered.map(({amount, category}, idx) => {
           return (
              <TableItem key={crypto.randomUUID()} colors={colors[idx]} category={category} amount={amount}/>
            )
          })}
        </ul>
        <div className={css.summaryContainer}>
          <p className={css.summary}>Expenses:<span className={css.expenses}>{cashFormatter(totalExpenses())}</span></p>
          <p className={css.summary}>Income:<span className={css.income}>{cashFormatter(totalIncome())}</span></p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Table;
