import { useFitness } from '../context/FitnessContext';

const StatsPage = () => {
  const { fitness, loading } = useFitness();

  if (loading) return <div>Loading...</div>;

  const totalSteps = fitness.reduce((sum, act) => sum + act.steps, 0);
  const totalCalories = fitness.reduce((sum, act) => sum + act.caloriesBurned, 0);
  const avgSteps = fitness.length ? (totalSteps / fitness.length).toFixed(2) : 0;
  const avgCalories = fitness.length ? (totalCalories / fitness.length).toFixed(2) : 0;

  return (
    <div>
      <h1>Statistics</h1>
      <p>Total Steps: {totalSteps}</p>
      <p>Total Calories Burned: {totalCalories}</p>
      <p>Average Steps per Activity: {avgSteps}</p>
      <p>Average Calories per Activity: {avgCalories}</p>
    </div>
  );
};

export default StatsPage;
