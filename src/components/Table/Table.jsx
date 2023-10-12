// Komponent bezstanowy (stateless) otrzymuje tablicę do renderowania oraz metody do filtrowania na select

// Dziecko DiagramTab

import css from './Table.module.css';
import Select from 'react-select'
import { selectStyles } from './selectStyles';
// import makeAnimated from 'react-select/animated'

import { months, years } from './dateOptions'
import TableItem from '../TableItem/TableItem';
import { colors } from '../Chart/labels';
import { cashFormatter } from '../../utils/cashFormatter';

const Table = ({ transactions, totalIncome, totalExpenses }) => {

  return (
    <>
    <div>
      <div className={css.selectContainer}>
        <Select 
          options={months.map((month, idx) => {
            return {
              value: idx+1,
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
          {transactions.map(({amount, category}, idx) => {
           return (
              <TableItem key={crypto.randomUUID()} colors={colors[idx]} category={category} amount={amount}/>
            )
          })}
        </ul>
        <div className={css.summaryContainer}>
          <p className={css.summary}>Expenses:<span className={css.expenses}>{cashFormatter(totalExpenses)}</span></p>
          <p className={css.summary}>Income:<span className={css.income}>{cashFormatter(totalIncome)}</span></p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Table;
