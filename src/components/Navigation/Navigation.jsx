// To komponent bezstanowy (stateless component)

// Realizuje przejście na route "/home" lub "/diagram" przez NavLink

// Realizuje przejście na route "/home" lub "/diagram" przez NavLink

import css from './Navigation.module.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationButtons() {
  return (
    <div className={css.nav}>
      <NavLink to="/goit-wallet-grupa-03-frontend/home" className={({ isActive }) => (isActive ? `${css.active}` : `${css.navBtn}`)}>
        <div>
          <svg width="38" height="38" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="/src/assets/icons/homeBtn.svg#my-home-icon" />
          </svg>
        </div>
        <div className={css.description}>Home</div>
      </NavLink>
      <NavLink to="/goit-wallet-grupa-03-frontend/diagram" className={({ isActive }) => (isActive ? `${css.active}` : `${css.navBtn}`)}>
        <div>
          <svg width="38" height="38" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="/src/assets/icons/statisticsBtn.svg#my-statistics-icon" />
          </svg>
        </div>
        <div className={css.description}>Statistics</div>
      </NavLink>
      <NavLink to="/goit-wallet-grupa-03-frontend/currency" className={({ isActive }) => (isActive ? `${css.active}` : `${css.navBtn} ${css.currencyNavLink}`)}>
        <div>
          <svg width="38" height="38" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="/src/assets/icons/currencyBtn.svg#my-currency-icon" />
          </svg>
        </div>
      </NavLink>
    </div>
  );
}

export default NavigationButtons;

