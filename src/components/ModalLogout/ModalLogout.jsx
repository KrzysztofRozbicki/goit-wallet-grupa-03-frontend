import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalLogoutOpen } from '../../redux/global/selectors';
import ReactModal from 'react-modal';

import { closeModalLogout, resetGlobal } from '../../redux/global/globalSlice';
import { resetSession } from '../../redux/session/sessionSlice';
import { resetFinance } from '../../redux/finance/financeSlice';

import style from './ModalLogout.module.css';

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
      ariaHideApp={false}
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
