// Komponent bezstanowy (stateless) otrzymuje tablicę do renderowania oraz metody do filtrowania na select

// Dziecko DiagramTab

import css from './Table.module.css';
import Select, { components } from 'react-select'
import { selectStyles } from './selectStyles';
// import makeAnimated from 'react-select/animated'

import mockMonths from './dateOptions'
import TableItem from '../TableItem/TableItem';
import { colors } from '../DiagramTab/diagramUtils';
import { cashFormatter } from '../../utils/cashFormatter';
import { useEffect, useState } from 'react';
import { getFilteredTransactions } from '../../redux/finance/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedMonth, selectedSelectedYear } from '../../redux/finance/selectors';
import { setSelectedMonth, setSelectedYear } from '../../redux/finance/financeSlice';

const Table = ({ transactions, totalIncome, totalExpenses, years, months }) => {
  const dispatch = useDispatch()
  const selectedMonth = useSelector(selectSelectedMonth)
  const selectedYear = useSelector(selectedSelectedYear)
  
  const [month, setMonth] =  useState(selectedMonth)
  const [year, setYear] = useState(selectedYear)
  
  useEffect(() => {
    const fetchTransactions = async () => {
      if (month && year) {
        dispatch(getFilteredTransactions( { month, year } ))
      }
    }
    fetchTransactions();
  }, [month, year])
  

  const [defaultMonth] = mockMonths.filter(({ name, value }) => value === selectedMonth.toString() ? { name, value } : null)

  // console.log(defaultMonth)

  return (
    <>
    <div className={css.componentContainer}>
      <div className={css.selectContainer}>
        <Select
          options={mockMonths?.map(({ name, value }) => {
            return {
              value: value,
              label: name,
            }
          })}
          placeholder='Month'
          isSearchable={false}
          styles={selectStyles}
          defaultValue={{
            value: defaultMonth.value,
            label: defaultMonth.name
          }}
          components={{
            Menu: (props) => <components.Menu {...props} className={css.menu} />
          }}
          onChange={(choice) => {
            setMonth(choice.value)
            dispatch(setSelectedMonth(choice.value))
          }}
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
          defaultValue={{
            value: selectedYear,
            label: selectedYear
          }}
          components={{
            Menu: (props) => <components.Menu {...props} className={css.menu} />
          }}
          onChange={(choice) => {
            setYear(Number.parseInt(choice.value))
            dispatch(setSelectedYear(choice.value))
          }}
        />
      </div>
      <div className={css.tableContainer}>
        <div className={css.tableHeader}>
          <p>category</p>
          <p>sum</p>
        </div>
        <ul className={css.tableList}>
          {transactions.map(({amount, category}, idx) => {
           if (amount) return (
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
