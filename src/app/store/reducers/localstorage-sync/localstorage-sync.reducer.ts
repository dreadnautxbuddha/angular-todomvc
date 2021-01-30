import { ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

/**
 * Configures the localstorage sync configuration for our app
 *
 * @see {@link https://github.com/btroncone/ngrx-store-localstorage}
 *
 * @param reducer
 */
export const LocalStorageSyncReducer = (reducer: ActionReducer<any>): ActionReducer<any> => localStorageSync({
  keys: [
    'todos',
    'input',
    'filter',
  ],
  rehydrate: true,
  storageKeySerializer: (key) => `todomvc-angular:${key}`,
})(reducer);
