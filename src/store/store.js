import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//combineReducers para usar a mas de un reducer
const reducers = combineReducers({
   auth: authReducer
});

///Importar el store en el punto mas alto de la app (JorunalApp)
export const store = createStore(
   reducers,
   composeEnhancers(
      applyMiddleware(thunk)
   )
);