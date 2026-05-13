import { useParams, useNavigate } from 'react-router-dom';
import { useFitness } from '../context/FitnessContext';

const ActivityDetailPage = () => {
  const { id } = useParams();
  const { fitness, loading } = useFitness();
  const navigate = useNavigate();

  if (loading) return <div>Loading activity details...</div>;

  const activity = fitness.find(act => act.activityId === id);

  if (!activity) {
    return (
      <div>
        <h1>Activity Not Found</h1>
        <p>The activity with ID {id} could not be found.</p>
        <button onClick={() => navigate('/')}>← Back to Home</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate('/')}>← Back to Home</button>
      <h1>Activity Details</h1>
      <div>
        <h2>{activity.name}</h2>
        <div>
          <h3>Activity Information</h3>
          <table>
            <tbody>
              <tr>
                <td>Activity ID:</td>
                <td>{activity.activityId}</td>
              </tr>
              <tr>
                <td>Activity Name:</td>
                <td>{activity.name}</td>
              </tr>
              <tr>
                <td>Steps:</td>
                <td>{activity.steps}</td>
              </tr>
              <tr>
                <td>Calories Burned:</td>
                <td>{activity.caloriesBurned}</td>
              </tr>
              <tr>
                <td>Goal Achieved:</td>
                <td>
                  {activity.goalAchieved ? '✓ Yes' : '✗ No'}
                </td>
              </tr>
              <tr>
                <td>Date:</td>
                <td>{activity.data}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailPage;
