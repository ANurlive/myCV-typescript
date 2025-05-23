import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { educationsReducer } from "./educations/reducer";
import { skillsReducer } from "./skills/reducer";

const rootReducer = combineReducers({
  educations: educationsReducer,
  skills: skillsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export type StoreDispatch = typeof store.dispatch;

export default store;
