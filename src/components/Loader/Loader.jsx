// Powinien znajdować się w centrum ekranu. Pojawia się, gdy trwa pobieranie danych asynchronicznych

// Loader jest podłączony w komponencie App i reaguje na zmianę flagi redux store, global.isLoading

// Podczas tworzenia używać biblioteki react-loader-spinner (albo zrobić animację samodzielnie, albo wziąć przykład, który Ci się spodobał)

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
  wrapperStyle={{}}
  wrapperClass="Loader"
  visible={true}
/> </div>
  );
};

export default Loader;