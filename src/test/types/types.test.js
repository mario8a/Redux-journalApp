
import { types } from './../../types/types';

const typesDemo = {
  login: '[Auth] Login',
  logout: '[Auth] Logout',

  uiSetError: '[UI Set Error]',
  uiRemoveError: '[UI Remove Error]',

  uiStartLoading: '[UI] Start loading',
  uiFinishLoading: '[UI] Finish loading',

  notesAddNew: '[Notes] New note',
  notesActive: '[Notes] Set active note',
  notesLoad: '[Notes] Load note',
  notesUpdated: '[Notes] Updated note',
  notesFileUrl: '[Notes] Updated image note',
  notesDelete: '[Notes] Delete note',
  notesLogoutCleaning: '[Notes] logout Cleaning', //Esta accion purgara los datos al cerrar sesion
}

describe('Probando Types', () => {
  test('Debe de tener estos types', () => {
    expect(typesDemo).toEqual(types);
  });
});