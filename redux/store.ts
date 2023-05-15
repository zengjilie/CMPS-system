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
import records from "./slices/recordSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

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
  records,
});

//config persist config
const persistConfig = {
  key: "root",
  storage,
};

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

const persistedReducer = persistReducer(persistConfig, masterReducer);

// Batch write records
const makeStore = (context?: Context) => {
  const store: any = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
  store["__persistor"] = persistStore(store);
  return store;
};

export const wrapper = createWrapper<Store<any>>(makeStore, { debug: true });
