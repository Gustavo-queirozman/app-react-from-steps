import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// Criação do middleware do Redux-Saga
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware) 
  );
  
  sagaMiddleware.run(rootSaga); 

  return store;
};

export default configureStore;
