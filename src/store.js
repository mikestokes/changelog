import { writable } from "svelte/store";

export let user = writable({ 
  loggedIn: true 
});

export let editing = writable({ 
  id: null
});
