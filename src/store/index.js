import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducer';

const ReduxLogger = createLogger({
  collapsed: true,
});

const store = createStore(
        rootReducer,
        compose(applyMiddleware(ReduxThunk), applyMiddleware(ReduxLogger)),
      )

export default store;