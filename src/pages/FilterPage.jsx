import { useFitness } from '../context/FitnessContext';
import ActivityCard from '../components/ActivityCard';

const FilterPage = () => {
  const { fitness, loading } = useFitness();

  if (loading) return <div>Loading...</div>;

  const achieved = fitness.filter(act => act.goalAchieved);
  const notAchieved = fitness.filter(act => !act.goalAchieved);

  return (
    <div>
      <h1>Filter Activities</h1>
      <h2>Goal Achieved</h2>
      <ul>
        {achieved.map(activity => (
          <li key={activity.activityId}>
            <ActivityCard activity={activity} />
          </li>
        ))}
      </ul>
      <h2>Goal Not Achieved</h2>
      <ul>
        {notAchieved.map(activity => (
          <li key={activity.activityId}>
            <ActivityCard activity={activity} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterPage;
