import { Store, combineReducers, configureStore } from "@reduxjs/toolkit";
import { MakeStore, createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import tasks from "./slices/taskSlice";
import user from "./slices/userSlice";
import movieInfo from "./slices/movieInfoSlice";
import tentInfo from "./slices/tentInfoSlice";
import notes from "./slices/noteSlice";
import scrolls from "./slices/scrollSlice";
import dropdowns from "./slices/dropdownSlice";

const allReducers = combineReducers({
  tasks,
  user,
  movieInfo,
  tentInfo,
  notes,
  scrolls,
  dropdowns,
});

const masterReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      tasks: [...action.payload],
    };

    return nextState;
  }

  return allReducers(state, action);
};

const makeStore = (context: Context) => {
  return configureStore({
    reducer: masterReducer,
  });
};

export const wrapper = createWrapper<Store<any>>(makeStore, { debug: true });
