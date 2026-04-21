import { Routes, Route, Link } from 'react-router-dom';
import { FitnessProvider } from './context/FitnessContext';
import Activities from './components/Activities';
import ActivityDetail from './components/ActivityDetail';
import Filter from './components/Filter';
import Stats from './components/Stats';

function App() {
  return (
    <FitnessProvider>
      <nav>
        <Link to="/activities">Activities</Link>
        <Link to="/filter">Filter</Link>
        <Link to="/stats">Stats</Link>
      </nav>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:id" element={<ActivityDetail />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </FitnessProvider>
  );
}

export default App;
