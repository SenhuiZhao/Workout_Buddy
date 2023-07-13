import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an workout context provider"
    );
  }

  return context;
};

export default useWorkoutsContext;
