<script context="module">
  export function preload({ params, query }) {
    // changelog.json is /changelog/index.json.js
    return this.fetch(`changelog.json`)
      .then(r => r.json())
      .then(changes => {
        return { changes };
      });
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
