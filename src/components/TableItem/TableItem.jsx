// import { categories } from '../../mock/categories'
import { cashFormatter } from '../../utils/cashFormatter'
import css from './TableItem.module.css'


// eslint-disable-next-line react/prop-types
const TableItem = ({ colors, category, amount }) => {
    return (
        <li key={crypto.randomUUID()} className={css.tableItem}>
            <div style={{backgroundColor: colors}} className={css.colorBlock}></div>
            {category}
            <span className={css.amount}>{cashFormatter(amount)}</span>
        </li>
    )
}

export default TableItem