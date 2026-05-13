import { Link } from 'react-router-dom';

const ActivityCard = ({ activity }) => {
  return (
    <div data-testid="activity-item">
      <h3>{activity.name}</h3>
      <p>Steps: {activity.steps}</p>
      <p>Calories Burned: {activity.caloriesBurned}</p>
      <p>Goal Achieved: {activity.goalAchieved ? 'Yes' : 'No'}</p>
      <p>Date: {activity.data}</p>
      <Link to={`/activities/${activity.activityId}`}>
        View Details →
      </Link>
    </div>
  );
};

export default ActivityCard;
