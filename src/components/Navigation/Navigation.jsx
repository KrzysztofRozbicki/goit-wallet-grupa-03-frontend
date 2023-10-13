// To komponent bezstanowy (stateless component)

// Realizuje przejście na route "/home" lub "/diagram" przez NavLink

// Realizuje przejście na route "/home" lub "/diagram" przez NavLink

import css from './Navigation.module.css';

import { NavLink } from 'react-router-dom';

import homeBtn from '../../assets/icons/homeBtn.svg';
import statisticsBtn from '../../assets/icons/statisticsBtn.svg';
import currencyBtn from '../../assets/icons/statisticsBtn.svg';

function NavigationButtons() {
  return (
    <div className={css.nav}>
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? `${css.active}` : `${css.navBtn}`)}
      >
        <div>
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38">
            <use xlinkHref={`${homeBtn}#my-home-icon`} />
          </svg>
        </div>
        <div className={css.description}>Home</div>
      </NavLink>
      <NavLink
        to="/diagram"
        className={({ isActive }) => (isActive ? `${css.active}` : `${css.navBtn}`)}
      >
        <div>
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38">
            <use xlinkHref={`${statisticsBtn}#my-statistics-icon`} />
          </svg>
        </div>
        <div className={css.description}>Statistics</div>
      </NavLink>
      <NavLink
        to="/currency"
        className={({ isActive }) =>
          isActive ? `${css.active}` : `${css.navBtn} ${css.currencyNavLink}`
        }
      >
        <div>
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38">
            <use xlinkHref={`${currencyBtn}#my-currency-icon`} />
          </svg>
        </div>
      </NavLink>
    </div>
  );
}

export default NavigationButtons;
