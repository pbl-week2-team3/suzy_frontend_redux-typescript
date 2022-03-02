import { combineReducers } from 'redux';
import postReducer from './posts';

const rootReducer = combineReducers({
  postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
