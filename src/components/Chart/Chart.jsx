// react-chartjs-2 i chart.js: opanować i zastosować biblioteki
// Komponent bezstanowy (stateless) otrzymuje informacje do renderowania
//jest dzieckiem DiagramTab z którego otrzymuje dane do renderowania


import { categories } from '../../mock/categories';
import css from './Chart.module.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { colors, series } from './labels'
import { cashFormatter } from '../../utils/cashFormatter';
 
ChartJS.register(ArcElement, Tooltip, Legend)
ChartJS.defaults.plugins.legends = [{ display: false}]

const Chart = () => {

  const data = {
    labels: categories,
    datasets: [{
      label: '# expenses',
      data: series,
      backgroundColor: colors,
      borderWidth: 0,
      weight: 10
    }],
    // hoverOffset: 4
  }

  const options = {
    responsive: true,
    maintainAspectRation: true,
    cutout: '70%',

    plugins: {
      legend: {
        display: false
      }
    }
  }

  const balance = series.reduce((acc, curr) => acc + curr, 0)



  return (
    <>
        <div className={css.chartContainer}>
          <Doughnut data={data} options={options}/>
          <p className={css.balance}>{undefined ?? '€ ' + cashFormatter(balance)}</p>
        </div>
    </>
  );
};

export default Chart;
  