import { Store, combineReducers, configureStore } from "@reduxjs/toolkit";
import { MakeStore, createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import taskProgress from "./slices/taskProgressSlice";
import user from "./slices/userSlice";
import movieInfo from "./slices/movieInfoSlice";
import tentInfo from "./slices/tentInfoSlice";
import notes from "./slices/noteSlice";
import scrolls from "./slices/scrollSlice";
import dropdowns from "./slices/dropdownSlice";
import calculator from "./slices/calculatorSlice";
import equation from "./slices/equationSlice";
import cses from "./slices/csesSlice";
import ms from "./slices/multiSelectSlice";
import text from "./slices/textSlice";
import taskExp from "./slices/taskExpSlice";
import mpsas from "./slices/mpsasSlice";
import modal from "./slices/modalSlice";

const allReducers = combineReducers({
  taskProgress,
  user,
  movieInfo,
  tentInfo,
  notes,
  scrolls,
  dropdowns,
  calculator,
  equation,
  cses,
  ms,
  text,
  taskExp,
  mpsas,
  modal,
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
