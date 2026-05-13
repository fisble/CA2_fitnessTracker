import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div>
        <h1>Fitness Tracker</h1>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/filter">Filter</Link></li>
        <li><Link to="/stats">Stats</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
