import { combineReducers } from 'redux';
import { rescueAnimals } from './rescueAnimals';
import { donations } from './donations';
import { hasErrored } from './hasErrored';
import { isLoading } from './isLoading';

export const rootReducer = combineReducers({
  rescueAnimals,
  donations,
  isLoading,
  hasErrored
});
