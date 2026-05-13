const FitnessReducer = (state, action) => {
  switch (action.type) {
    case "SET_FITNESS":
      return {
        ...state,
        fitness: action.payload,
        loading: false,
      };
    case "SET_ERROR":
      return {
        ...state,
        loading: false,
      };
    case "SET_FAVORITES":
      return {
        ...state,
        favorites: state.fitness.filter((activity) => activity.favorite),
      };
    case "ADD_ACTIVITY":
      return {
        ...state,
        fitness: [...state.fitness, action.payload],
      };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        fitness: state.fitness.map((activity) =>
          activity.id === action.payload
            ? { ...activity, completed: !activity.completed }
            : activity
        ),
      };
    case "DELETE_ACTIVITY":
      return {
        ...state,
        fitness: state.fitness.filter((activity) => activity.id !== action.payload),
      };
    case "TOGGLE_FAVORITE":
      return {
        ...state,
        fitness: state.fitness.map((activity) =>
          activity.id === action.payload
            ? { ...activity, favorite: !activity.favorite }
            : activity
        ),
      };
    default:
      return state;
  }
};

export default FitnessReducer;