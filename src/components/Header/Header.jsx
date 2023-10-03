import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <p> This is Header</p>
      <nav>
        <ul>
          <li>
            <Link to={''}>Home</Link>
          </li>
          <li>
            <Link to={'login'}>Login</Link>
          </li>
          <li>
            <Link to={'registration'}>registration</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
