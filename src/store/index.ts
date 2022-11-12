import { writable } from 'svelte/store';

export const tokenStore = writable('');

if (typeof localStorage !== 'undefined') {
  tokenStore.subscribe((value) => {
    if (value) {
      localStorage.setItem('token', value);
    } else {
      localStorage.removeItem('token');
    }
  });
}