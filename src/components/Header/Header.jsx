// Pojawia się, gdy użytkownik się zalogował

// Podłączyć komponent ModalLogout z flagą global.isModalLogoutOpen i w zależności od niej jest ona zamknięta lub otwarta

// Kliknięcie na "Wyloguj się" zmienia flagę w redux store: global.isModalLogoutOpen na true i modal wylogowania powinien się otworzyć

// Nazwa jest pobierana selektorem z session.user.name i po prostu renderowana

//po kliknieciu na ikone logout zmienia isModalLogoutOpen w redux na true
//pobiera nazwe uzytkownika z redux i ja wyswietla

import { Link } from 'react-router-dom';

import css from './Header.module.css';

const Header = () => {
  return (
    <>
      {/* <p> This is Header</p>
      <nav>
        <ul>
          <li>
            <Link to={''}>Home</Link>
          </li>
          <li>
            <Link to={'chart'}>Chart</Link>
          </li>
          <li>
            <Link to={'diagram'}>Diagram</Link>
          </li>
        </ul>
      </nav> */}
      <div className={css.test}></div>
    </>
  );
};

export default Header;
