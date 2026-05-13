import { Link } from 'react-router-dom';
import { useFitness } from '../context/FitnessContext';

const Activities = () => {
  const { fitness, loading } = useFitness();

  if (loading) return <div>Loading...</div>;

  const totalActivities = fitness.length;
  const goalAchieved = fitness.filter(activity => activity.goalAchieved).length;
  const goalNotAchieved = totalActivities - goalAchieved;

  return (
    <div>
      <h1>Activities</h1>
      <div data-testid="total-activities">Total Activities: {totalActivities}</div>
      <div data-testid="goal-achieved">Goal Achieved: {goalAchieved}</div>
      <div data-testid="goal-not-achived">Goal Not Achieved: {goalNotAchieved}</div>
      <ul>
        {fitness.map(activity => (
          <li key={activity.activityId} data-testid="activity-item">
            <h3>{activity.name}</h3>
            <p>Steps: {activity.steps}</p>
            <p>Calories Burned: {activity.caloriesBurned}</p>
            <p>Goal Achieved: {activity.goalAchieved ? 'Yes' : 'No'}</p>
            <p>Date: {activity.data}</p>
            <Link to={`/activities/${activity.activityId}`}>
              View Details →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;