<script>
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  onMount(() => goto("/"));
</script>

<!-- <script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`./${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { change: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script><script>
	export let change;
</script><svelte:head>
	<title>{change.title}</title>
</svelte:head>

<h1>{change.title}</h1>

<div class='content'>
	{@html change.markdown}
</div> -->
