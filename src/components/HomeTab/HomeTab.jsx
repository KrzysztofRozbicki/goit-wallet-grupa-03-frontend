// Komponent zasubskrybowano na redux store, a mianowicie finance.data i renderuje całą jego zawartość

// Logika filtrowania transakcji jest zaimplementowana w tym komponencie,
//na górze powinny być najnowsze transakcje według daty

// Przemyślany max-height: 60vh; (na przykład, a następnie włącza się przewijanie wewnątrz komponentu,
// ile vh - porozmawiać o tym z autorem DashboardPage)

// Nie do końca rozumiem powiązanie z innymi komponentami - szczegolnie z DiagramTab oraz DashboardPage

import wallet from '../../assets/icons/wallet.svg';
import banner from '../../assets/icons/banner.svg';

import css from './HomeTab.module.css';

const HomeTab = () => {
  return (
    <>
      <div className={css.wrapper}>
        <div className={css.test}></div>
        <h1>This is the Quick Buck Devs</h1>
        <p>Below are the test shows of icons</p>
        <img src={wallet} />
        <img src={banner} />
      </div>
    </>
  );
};

export default HomeTab;
