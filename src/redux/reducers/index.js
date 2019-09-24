import { combineReducers } from 'redux';
import checkUpgradeReducer from './upgrade-reducer';

const reducers = combineReducers({
  checkUpgradeReducer,
});

export default reducers;
