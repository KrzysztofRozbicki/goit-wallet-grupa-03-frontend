// (Nie ma w makietach). W rzeczywistości jest to wyjaśnienie, czy użytkownik naprawdę chce wyjść i "tak" lub "nie".
//Pojawia się, gdy użytkownik naciska przycisk wyjścia z programu.

// Układ telefon, tablet, desktop (okno modalne powinno być na górze wszystkich elementów)

// Na przycisku "Nie" wykorzystywać akcję na zamykanie okna modalnego, także ta akcja powinna być
//wywoływana przez kliknięcie przycisku Escape, a także naciśnięcie na szare tło

// Na przycisku "Tak" napisać operację wylogowania, przy udanej operacji wyczyszczać cały redux store w initial state,
//przy nieudanej operacji za pomocą biblioteki react - toastify wyświetlać błąd i zamykać okno modalne

import css from './ModalLogout.module.css';

const ModalLogout = () => {
  return (
    <>
      <div className={css.test}></div>
    </>
  );
};

export default ModalLogout;
