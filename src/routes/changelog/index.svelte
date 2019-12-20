<script>
  // Redirect the user to the root
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  onMount(() => goto("/"));
</script>