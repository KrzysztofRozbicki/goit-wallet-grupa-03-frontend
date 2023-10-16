import { TbLogout } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import { useSelector, useDispatch } from 'react-redux';

import { openModalLogout } from '../../redux/global/globalSlice';
import { selectUserName } from '../../redux/session/selectors';

import css from './Header.module.css';
import walletSVG from '../../assets/icons/wallet.svg';

const Header = () => {
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();
  const shortUserName = user.length > 9 ? user.slice(0, 9) + '...' : user;

  const openModal = () => {
    dispatch(openModalLogout(true));
  };

  return (
    <>
      <div className={css.header}>
        <div className={css.logoContainer}>
          <img src={walletSVG} className={css.logo} alt="wallet logo" />
          <h2 className={css.title}>Wallet</h2>
        </div>
        <div className={css.logOutContainer}>
          <span className={css.name}>{shortUserName}</span>
          <div className={css.exit} onClick={openModal}>
            <IconContext.Provider value={{ size: 24, color: 'currentColor' }}>
              <TbLogout className={css.exitLogo} />
              <span className={css.exitText}>Exit</span>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
