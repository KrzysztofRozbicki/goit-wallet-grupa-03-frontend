// Pojawia się, gdy użytkownik się zalogował

// Podłączyć komponent ModalLogout z flagą global.isModalLogoutOpen i w zależności od niej jest ona zamknięta lub otwarta

// Kliknięcie na "Wyloguj się" zmienia flagę w redux store: global.isModalLogoutOpen na true i modal wylogowania powinien się otworzyć

// Nazwa jest pobierana selektorem z session.user.name i po prostu renderowana

//po kliknieciu na ikone logout zmienia isModalLogoutOpen w redux na true
//pobiera nazwe uzytkownika z redux i ja wyswietla

import { Link } from 'react-router-dom';

import css from './Header.module.css';
import walletSVG from '../../assets/icons/wallet.svg';
import logOutSVG from '../../assets/icons/lo.svg';

const Header = () => {
  /*
   const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const shortUserName = user.name.length > 8 ? user.name.slice(0, 8) + '...' : user.name;

  const openModal = () => {
    dispatch(setIsModalLogoutOpen(true));
  };

  oraz dodać poniżej po <span className={css.name}>Name</span> -->
  <button className="button" type="button">
              {shortUserName}
            </button>
  */
  return (
    <>
      <div className={css.header}>
        <div className={css.logoContainer}>
      <img src={walletSVG} className={css.logo} alt="wallet logo" />
      <h2 className={css.title}>Wallet</h2>
        </div>
        <div className={css.logOutContainer}>
          <span className={css.name}>Name</span>
          <div className={css.exit}>
            <img src={logOutSVG} className={css.exitLogo} alt="logout logo" />
            <span className={css.exitText}>Exit</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;