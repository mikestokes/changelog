<script>
  import { fade } from 'svelte/transition';
	import { user, editing } from '../store';
	
	function deleteClick() {
    // editing.set({...$editing, id: null});
	}

	function cancelClick() {
    editing.set({...$editing, id: null});
	}

	function saveClick() {
    // editing.set({...$editing, id: null});
	}
</script>

<aside in:fade out:fade class:invisible={!Number.isInteger($editing.id)} class="overflow-hidden fixed h-full z-10 shadow-lg bg-white p-4 w-full md:w-1/2">
		<!-- <div> -->

			EDITOR
		<!-- </div> -->
	<div class="flex">
		<button on:click={deleteClick} class="flex-initial bg-transparent border border-gray-500 text-base text-sm text-gray-500 py-1 px-4 rounded-full">
			Delete
		</button>
		<button on:click={cancelClick} class="flex-initial bg-transparent border border-gray-500 text-base text-sm text-gray-500 py-1 px-4 rounded-full">
			Cancel
		</button>
		<div class="flex-grow"></div>
		<button on:click={saveClick} class="flex-initial bg-transparent border border-gray-500 text-base text-sm text-gray-500 py-1 px-4 rounded-full">
			Save
		</button>
	</div>
</aside>
