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
            <Link to={'chart'}>Chart</Link>
          </li>
          <li>
            <Link to={'diagram'}>Diagram</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
