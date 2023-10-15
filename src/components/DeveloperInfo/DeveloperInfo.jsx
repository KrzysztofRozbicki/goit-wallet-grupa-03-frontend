import css from './DeveloperInfo.module.css';
import logo from '../../assets/QBDLogo.svg';

export const DeveloperInfo = () => {
  return (
    <div className={css.footer}>
      <p>Developed by {'\u00a0'}</p>
      <img width="80px" src={logo} alt="Logo Quick Buck Devs" />
    </div>
  );
};

export default DeveloperInfo;
