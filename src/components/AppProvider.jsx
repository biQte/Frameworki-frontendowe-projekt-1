import { useReducer } from "react";
import AppContext from "../data/AppContext";
import AppReducer from "../data/AppReducer";
import { data } from "../data/module-data";

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, data);

  return (
    <AppContext.Provider value={{ items: state, dispatch: dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
