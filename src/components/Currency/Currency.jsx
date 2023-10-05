
import css from './Currency.module.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CurrencyTable() {
  const [exchangeRates, setExchangeRates] = useState({});
  const selectedCurrencies = ['USD', 'PLN'];
  const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;
  const spread = 0.02;

  useEffect(() => {
    const apiUrl = `http://data.fixer.io/api/latest?access_key=${apiKey}&symbols=${selectedCurrencies.join(',')}`;

    axios.get(apiUrl)
      .then((response) => {
        setExchangeRates(response.data.rates);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania danych z API:', error);
      });
  }, []);



  const calculateSellRate = (buyRate) => {
    const sellRate = buyRate / (1 - spread);
    return sellRate.toFixed(2);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Buy</th>
            <th>Sell</th>
          </tr>
        </thead>
        <tbody>
          {selectedCurrencies.map((currency) => (
            <tr key={currency}>
              <td>{currency}</td>
              <td>{parseFloat(exchangeRates[currency]).toFixed(2)}</td>
              <td>{calculateSellRate(exchangeRates[currency])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrencyTable;
