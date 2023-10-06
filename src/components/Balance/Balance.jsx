//Komponent, po prostu subskrybuje store finance.totalBalance i renderuje jego zawartość

import css from './Balance.module.css';

const Balance = () => {
  return (
    <>
      <div className={css.container}>
        <h2>YOUR BALANCE</h2>
        <div>€ 20000000</div>
      </div>
    </>
  );
};

export default Balance;
