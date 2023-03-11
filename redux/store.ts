import { Store, combineReducers, configureStore } from "@reduxjs/toolkit";
import { MakeStore, createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import tasks from "./slices/taskSlice";
import user from "./slices/userSlice";

const allReducers = combineReducers({
  tasks,
  user,
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
  return configureStore({ reducer: masterReducer });
};

export const wrapper = createWrapper<Store<any>>(makeStore, { debug: true });
