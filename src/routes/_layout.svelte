<script>
	import Nav from '../components/Nav.svelte';
	import Editor from '../components/Editor.svelte';

	export let segment;
</script>

<Nav {segment}/>

<main>
	<Editor></Editor>
	<slot></slot>
</main>