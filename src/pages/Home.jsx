import { useFitness } from '../context/FitnessContext';
import ActivityStats from '../components/ActivityStats';
import ActivityList from '../components/ActivityList';

const Home = () => {
  const { fitness, loading } = useFitness();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Fitness Tracker</h1>
      <ActivityStats activities={fitness} />
      <ActivityList activities={fitness} />
    </div>
  );
};

export default Home;
