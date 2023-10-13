// react-chartjs-2 i chart.js: opanować i zastosować biblioteki
// Komponent bezstanowy (stateless) otrzymuje informacje do renderowania
//jest dzieckiem DiagramTab z którego otrzymuje dane do renderowania


import css from './Chart.module.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { colors } from '../DiagramTab/diagramUtils'
import { categories } from '../DiagramTab/diagramUtils';
import { cashFormatter } from '../../utils/cashFormatter';
 
ChartJS.register(ArcElement, Tooltip, Legend)
ChartJS.defaults.plugins.legends = [{ display: false}]

const Chart = ({ transactions, totalBalance }) => {

  const series = transactions.map(t => t.amount)

  const data = {
    labels: categories,
    datasets: [{
      label: ' #',
      data: series,
      backgroundColor: colors,
      borderWidth: 0,
      weight: 10,
      hoverOffset: 5,
      clip: 10,
      hoverDashOffset: 20
    }],
  }

  const options = {
    responsive: true,
    maintainAspectRation: true,
    cutout: '70%',
    layout: {
      padding: 20
    },
    plugins: {
      legend: {
        display: false
      }
    },
  }

  return (
    <>
      <div className={css.componentContainer}>
      <div className={css.headerContainer}><h3 className={css.diagramHeader}>Statistics</h3></div>
        <div className={css.chartContainer}>
          <Doughnut data={data} options={options}/>
          <p className={css.balance}>{undefined ?? '€ ' + cashFormatter(totalBalance)}</p>
        </div>
      </div>
    </>
  );
};

export default Chart;
  