import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import interview from './interview'
import favoriteList from './favoriteList'
import user from './user'
import allinterviews from './allinterviews'
import fullstack from './fullstack'
import reactJobs from './reactJobs'
import python from './python'
import dataEngineer from './dataEngineer'
// import userProfile from './profile'

const rootReducer = combineReducers({
  session,
  interview,
  favoriteList,
  user,
  allinterviews,
  fullstack,
  reactJobs,
  python,
  dataEngineer,
  // userProfile
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
