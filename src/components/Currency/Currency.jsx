import css from './Currency.module.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CurrencyTable() {
  const [exchangeRates, setExchangeRates] = useState({});
  const selectedCurrencies = ['GBP', 'USD', 'PLN'];
  const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;
  const spread = 0.02;

  useEffect(() => {
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/EUR`;

    axios
      .get(apiUrl)
      .then(response => {
        const conversion_rates = response.data.conversion_rates;
        console.log(conversion_rates);
        const filteredRates = {};
        for (const currency of selectedCurrencies) {
          if (conversion_rates.hasOwnProperty(currency)) {
            filteredRates[currency] = conversion_rates[currency];
          }
        }
        setExchangeRates(filteredRates);
      })
      .catch(error => {
        console.error('Błąd podczas pobierania danych z API:', error);
      });
  }, []);

  const calculateSellRate = buyRate => {
    const sellRate = buyRate / (1 - spread);
    return sellRate.toFixed(2);
  };

  return (
    <div className={css.table}>
      <div className={css.header}>
        <div>Currency</div>
        <div>Buy</div>
        <div>Sell</div>
      </div>

      <div className={css.currencyContainer}>
        {selectedCurrencies.map(currency => (
          <div key={currency} className={css.currency}>
            <div>EUR/{currency}</div>
            <div className={css.buyValue}>{parseFloat(exchangeRates[currency]).toFixed(2)}</div>
            <div className={css.sellValue}>{calculateSellRate(exchangeRates[currency])}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrencyTable;
