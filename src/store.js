import { writable } from "svelte/store";

export let user = writable({ 
  loggedIn: false 
});
