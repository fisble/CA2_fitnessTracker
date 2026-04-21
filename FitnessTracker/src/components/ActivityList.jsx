import ActivityCard from './ActivityCard';

const ActivityList = ({ activities }) => {
  if (activities.length === 0) {
    return <div>No activities found</div>;
  }

  return (
    <div>
      <h2>Activities List</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.activityId}>
            <ActivityCard activity={activity} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
