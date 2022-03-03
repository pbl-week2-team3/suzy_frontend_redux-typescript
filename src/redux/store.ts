import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import postReducer from "./modules/posts";
import userReducer from "./modules/users";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
