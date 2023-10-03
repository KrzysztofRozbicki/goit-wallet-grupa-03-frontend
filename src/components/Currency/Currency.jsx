// Inteligentny komponent, statefull, otrzymane dane do wyświetlenia z żądania get przechowuje w sobie,
//loader i jego włączenia przechowuje w sobie

// Uwaga: ze względu na częste żądania, może wystąpić błąd (nie panikuj), po prostu za kilka minut jeszcze raz złóż żądanie

// Jako zadanie bonusowe, możesz zapisywać w localStorage odpowiedź z datą ostatniego żądania
//i nie wykonywać żądania w ciągu godziny.
//Aby to zrobić, porównaj datę, która obecnie idzie na żądanie i która jest zapisana w localStorage
//dla ostatniego żądania i jeśli minęło mniej, niż godzinę, po prostu zabierz z localStorage.
//Jeśli więcej wykonywać żądanie na otrzymanie kursów

import css from './Currency.module.css';

const Currency = () => {
  return (
    <>
      <div className={css.test}></div>
    </>
  );
};

export default Currency;
