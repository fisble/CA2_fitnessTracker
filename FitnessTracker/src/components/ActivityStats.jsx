const ActivityStats = ({ activities }) => {
  const totalActivities = activities.length;
  const goalAchieved = activities.filter(activity => activity.goalAchieved).length;
  const goalNotAchieved = totalActivities - goalAchieved;

  return (
    <div>
      <h2>Activity Summary</h2>
      <div data-testid="total-activities">Total Activities: {totalActivities}</div>
      <div data-testid="goal-achieved">Goal Achieved: {goalAchieved}</div>
      <div data-testid="goal-not-achived">Goal Not Achieved: {goalNotAchieved}</div>
    </div>
  );
};

export default ActivityStats;
