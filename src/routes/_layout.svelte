<script>
	import Nav from '../components/Nav.svelte';
	import LogEntryEditor from '../components/LogEntryEditor.svelte';

	export let segment;
</script>

<Nav {segment}/>

<main>
	<LogEntryEditor></LogEntryEditor>
	<slot></slot>
</main>