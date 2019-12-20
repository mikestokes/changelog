<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    // the fetch path starts at root
		const res = await this.fetch(`./changelog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { changes: data };
		} else {
			this.error(res.status, data.message);
		}
  }
</script>

<script>
  import Change from "../../components/Change.svelte";

  export let changes;
</script>

<svelte:head>
  <title>Change Log</title>
</svelte:head>

<section class="pt-20">
  {#each changes as change}
    <Change {change} />
  {/each}
</section>
