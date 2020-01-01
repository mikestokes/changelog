<script context="module">
  export async function preload({ params, query }) {
    // Preload can be called from the server or client.
    // Code needs to be callable by both client or server. 
    
		const res = await this.fetch(`./changelog/${params.slug}.json`);
    const data = await res.json();
    
    if (res.status === 200) {
      return { log: data };
    } else if (res.status === 404) {
      this.redirect(302, 'changelog')
		} else {
			this.error(res.status, data.message);
		}
  }
</script>

<!-- [slug] component -->

<script>
  import LogEntry from "../../components/LogEntry.svelte";

  export let log;
</script>

<svelte:head>
  <title>{log.title}</title>
</svelte:head>

<section class="pt-20">
  {#each log.entries as entry}
    <LogEntry {entry} />
  {/each}
</section>
