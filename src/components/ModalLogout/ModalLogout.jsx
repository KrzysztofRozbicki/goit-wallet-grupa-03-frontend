// (Nie ma w makietach). W rzeczywistości jest to wyjaśnienie, czy użytkownik naprawdę chce wyjść i "tak" lub "nie".
//Pojawia się, gdy użytkownik naciska przycisk wyjścia z programu.

// Układ telefon, tablet, desktop (okno modalne powinno być na górze wszystkich elementów)

// Na przycisku "Nie" wykorzystywać akcję na zamykanie okna modalnego, także ta akcja powinna być
//wywoływana przez kliknięcie przycisku Escape, a także naciśnięcie na szare tło

// Na przycisku "Tak" napisać operację wylogowania, przy udanej operacji wyczyszczać cały redux store w initial state,
//przy nieudanej operacji za pomocą biblioteki react - toastify wyświetlać błąd i zamykać okno modalne

import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalLogoutOpen } from '../../redux/global/selectors';
import style from './ModalLogout.module.css';
import ReactModal from 'react-modal';
import { closeModalLogout, resetGlobal } from '../../redux/global/globalSlice';
import { resetSession } from '../../redux/session/sessionSlice';
import { resetFinance } from '../../redux/finance/financeSlice';

const ModalLogout = () => {
  const dispatch = useDispatch();
  const isLogoutModalOpen = useSelector(selectIsModalLogoutOpen);

  const handleClose = () => {
    dispatch(closeModalLogout());
  };

  const handleLogout = () => {
    dispatch(resetSession());
    dispatch(resetGlobal());
    dispatch(resetFinance());
  };

  return (
    <ReactModal
      isOpen={isLogoutModalOpen}
      style={{
        overlay: {
          zIndex: 5,
        },
      }}
      contentLabel="onRequestClose Example"
      onRequestClose={handleClose}
      shouldCloseOnOverlayClick={true}
      className={style.modal}
    >
      <p className={style.title}>Log out from Wallet?</p>
      <div className={style.buttonContainer}>
        <button onClick={handleLogout} className={style.confirm}>
          Yes, log out
        </button>
        <button onClick={handleClose} className={style.cancel}>
          Cancel
        </button>
      </div>
    </ReactModal>
  );
};

export default ModalLogout;
