import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";


describe('Probando authReducer', () => {

    test('debe de hacer la auth ', () => {

      const initState = {};

      const action = {
        type: types.login,
        payload: {
          uid: 'abc',
          displayName: 'Mario'
        }
      }

      const state = authReducer(initState,action);
      expect(state).toEqual({
        uid: 'abc',
        name: 'Mario'
      })
    });

    test('debe de hacer logout ', () => {

      const initState = {
        uid: '78979789asdasd',
        name: 'Mario'
      };

      const action = {
        type: types.logout,
      }

      const state = authReducer(initState,action);
      expect(state).toEqual({})
    });

    test('No debe de hacer cambiosen el state', () => {

      const initState = {
        uid: '78979789asdasd',
        name: 'Mario'
      };

      const action = {
        type: 'asdaff',
      }

      const state = authReducer(initState,action);
      expect(state).toEqual(initState)
    });
    
});