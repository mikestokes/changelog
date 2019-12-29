<script context="module">
  export async function preload({ params, query }) {
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
  import Entry from "../../components/Entry.svelte";
  import Back from "../../components/Back.svelte";

  export let log;
</script>

<svelte:head>
  <title>{log.title}</title>
</svelte:head>

<section class="pt-20">
  <Back {log} />

  {#each log.entries as entry}
    <Entry {entry} />
  {/each}
</section>
