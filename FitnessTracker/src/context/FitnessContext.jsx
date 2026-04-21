import { createContext, useContext, useReducer, useEffect } from "react";
import FitnessReducer from "../reducer/FitnessReducer";
import axios from "axios";
import { getToken, getDataset } from "../api/api";

const initialState = {
  fitness: [],
  activities: [],
  loading: true,
};

export const FitnessContext = createContext();

export const FitnessProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FitnessReducer, initialState);

  // Fetch fitness data from server
  useEffect(() => {
    const fetchFitness = async () => {
      try {
        // Step 1: Get Token
        const tokenRes = await getToken(
          "E0423002",
          "197349", 
          "B", 
        );

        // Step 2: Fetch dataset
        const rawFitness = await getDataset(tokenRes.token, tokenRes.dataUrl);

        // Filter valid activities
        const validFitness = rawFitness.filter(activity => 
          activity.activityId &&
          typeof activity.name === 'string' &&
          typeof activity.steps === 'number' && activity.steps > 0 &&
          typeof activity.caloriesBurned === 'number' && activity.caloriesBurned > 0 &&
          typeof activity.goalAchieved === 'boolean' &&
          activity.data
        );

        dispatch({ type: "SET_FITNESS", payload: validFitness });
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchFitness();
  }, []);

  // Sync favorites automatically
  useEffect(() => {
    dispatch({ type: "SET_FAVORITES" });
  }, [state.fitness]);

  const addActivity = (activity) => dispatch({ type: "ADD_ACTIVITY", payload: activity });

  const toggleCompleted = (id) =>
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });

  const deleteActivity = (id) => dispatch({ type: "DELETE_ACTIVITY", payload: id });

  const toggleFavorite = (id) =>
    dispatch({ type: "TOGGLE_FAVORITE", payload: id });

  return (
    <FitnessContext.Provider
      value={{
        fitness: state.fitness,
        favorites: state.favorites,
        loading: state.loading,
        addActivity,
        toggleCompleted,
        deleteActivity,
        toggleFavorite,
      }}
    >
      {children}
    </FitnessContext.Provider>
  );
};

export const useFitness = () => useContext(FitnessContext);


