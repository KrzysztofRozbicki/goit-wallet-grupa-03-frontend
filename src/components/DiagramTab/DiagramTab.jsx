//Ten komponent zawiera logikę subskrybowania na redux store, otrzymania wszystkich niezbędnych danych.
//Implementacja metod filtrowania danych.
//I te elementy stanu i metod przekazać przez props do podrzędnych elementów Table i Chart

//Jest prawdopodobnie dzieckiem DashboardPage z którego pobiera dane i zapisuje je na redux w finance

import Chart from '../Chart/Chart';
import Table from '../Table/Table';
import css from './DiagramTab.module.css';

export const DiagramTab = () => {
  return (
    <>
    <div className={css.diagramContainer}>
    <h3 className={css.diagramHeader}>Statistics</h3>
      <Chart/>
      <Table/>
    </div>
    </>
  );
};

export default DiagramTab;
