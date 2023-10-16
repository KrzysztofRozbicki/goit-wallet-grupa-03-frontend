import { Circles } from 'react-loader-spinner';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <Circles
        height="120"
        width="120"
        color="#4a56e2"
        ariaLabel="circles-loading"
        wrapperClass="Loader"
        visible={true}
      />
    </div>
  );
};

export default Loader;
