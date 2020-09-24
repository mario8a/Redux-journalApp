import {combineReducers, createStore} from 'redux';
import { authReducer } from '../reducers/authReducer';

//combineReducers para usar a mas de un reducer
const reducers = combineReducers({
   auth: authReducer
})

///Importar el store en el punto mas alto de la app (JorunalApp)
export const store = createStore(
   reducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);