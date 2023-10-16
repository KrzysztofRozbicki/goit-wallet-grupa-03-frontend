import RegistrationForm from '../RegistrationForm/RegistrationForm';
import bannerSVG from '../../assets/icons/banner-woman.svg';
import blob1 from '../../assets/icons/blob-1.svg';
import blob2 from '../../assets/icons/blob-2.svg';

import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <>
      <div className={css.wrapper}>
        <div className={css.header}>
          <img className={css.blob2} src={blob2} alt="blob" />
          <img className={css.blob1} src={blob1} alt="blob" />
          <img className={css.banner} src={bannerSVG} alt="banner" />
          <h2 className={css.title}>Finance App</h2>
        </div>
        <div className={css.container}>
          <RegistrationForm />
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
