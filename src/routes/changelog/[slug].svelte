<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    // the fetch path starts at root
		const res = await this.fetch(`./changelog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { log: data };
		} else {
			this.error(res.status, data.message);
		}
  }
</script>

<script>
  import Change from "../../components/Change.svelte";
  import Back from "../../components/Back.svelte";

  export let log;
</script>

<svelte:head>
  <title>{log.title}</title>
</svelte:head>

<section class="pt-20">
  <Back {log} />

  {#each log.changes as change}
    <Change {change} />
  {/each}
</section>
