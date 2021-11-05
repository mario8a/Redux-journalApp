import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { login, logout } from '../../actions/auth';
import { types } from './../../types/types';
import { startLogout, startLoginEmailPassword } from './../../actions/auth';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let initState = {}
 
let store = initState

describe('Pruebas con las acciones de Auth', () => {

  beforeEach(() => {
    store = mockStore(initState)
  })

  test('Login y logout deben de crear la accion respectiva', () => {

    const uid = 'ABC123';
    const displayName = 'Mario';

    const loginAction = login(uid, displayName);
    const logoutAction = logout();

    expect(loginAction).toEqual({
      type: types.login,
      payload: {
          uid,
          displayName
      }
    });
    expect(logoutAction).toEqual({
      type: types.logout
    });
    
  });

  test('debe de realizar el startLogout', async () => {

    await store.dispatch(startLogout());
    const actions = store.getActions();
    
    expect(actions[0]).toEqual({
      type: types.logout
    });
    expect(actions[1]).toEqual({
      type: types.notesLogoutCleaning
    });

  });

  test('debe de iniciar el startLoginEmailPassword', async () => {

    await store.dispatch(startLoginEmailPassword('test@test.com', '123456'));

    const actions = store.getActions();
    
    expect(actions[1]).toEqual({
      type: types.login,
      payload: {
        uid: 'cAKZJSrpQRZq41X5w1sDb1mJlpp1',
        displayName: null
      }
    })
    
  });
});