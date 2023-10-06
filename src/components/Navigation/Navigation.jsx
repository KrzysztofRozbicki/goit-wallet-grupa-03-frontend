// To komponent bezstanowy (stateless component)

// Realizuje przejście na route "/home" lub "/diagram" przez NavLink

// Realizuje przejście na route "/home" lub "/diagram" przez NavLink

import css from './Navigation.module.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationButtons() {
  return (
    <div className={css.nav}>
      <NavLink exact to="/goit-wallet-grupa-03-frontend/home">
        <div className={css.navBtn}>
          <svg width="38" height="38" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="/dist/assets/homeBtn.svg#my-home-icon" />
          </svg>
        </div>
      </NavLink>
      <NavLink to="/goit-wallet-grupa-03-frontend/diagram">
        <div className={css.navBtn}>
          <svg width="38" height="38" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="/dist/assets/statisticsBtn.svg#my-statistics-icon" />
          </svg>
        </div>
      </NavLink>
      <NavLink to={'currency'}>
        <div className={css.navBtn}>
          <svg width="38" height="38" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="/dist/assets/currencyBtn.svg#my-currency-icon" />
          </svg>
        </div>
      </NavLink>
    </div>
  );
}

export default NavigationButtons;
