import { combineReducers } from 'redux';
import { hasErrored } from './hasErrored';
import { isLoading } from './isLoading';

export const rootReducer = combineReducers({
  isLoading,
  hasErrored
});
