import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Gallery </Link>
      <Link to="/favorites">Favorites </Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default NavBar;
