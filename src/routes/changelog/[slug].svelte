<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`changelog.json`).then(r => r.json()).then(changes => {
			return { changes };
		});
	}
</script>

<script>
	import Change from '../../components/Change.svelte';
	
	export let changes;
</script>

<svelte:head>
	<title>Change Log</title>
</svelte:head>

<section>
	{#each changes as change}
		<Change change={change}/>
	{/each}
</section>