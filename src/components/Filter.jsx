import { useFitness } from '../context/FitnessContext';

const Filter = () => {
  const { fitness } = useFitness();

  const achieved = fitness.filter(act => act.goalAchieved);
  const notAchieved = fitness.filter(act => !act.goalAchieved);

  return (
    <div>
      <h1>Filter Activities</h1>
      <h2>Goal Achieved</h2>
      <ul>
        {achieved.map(activity => (
          <li key={activity.activityId}>
            {activity.name} - {activity.steps} steps
          </li>
        ))}
      </ul>
      <h2>Goal Not Achieved</h2>
      <ul>
        {notAchieved.map(activity => (
          <li key={activity.activityId}>
            {activity.name} - {activity.steps} steps
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;