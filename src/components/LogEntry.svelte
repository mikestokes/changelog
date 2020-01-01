<script>
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';
  import { user, editing } from '../store';

  export let entry;

  dayjs.extend(relativeTime);

  $: publishedDateTime = dayjs.unix(entry.published._seconds);
  $: publishedAgo = dayjs.unix(entry.published._seconds).fromNow();
  
  function editClick() {
    editing.set({...$editing, id: entry.id});
  }
</script>

<article
  itemscope
  itemtype="https://schema.org/BlogPosting"
  class="container w-full md:max-w-3xl mx-auto pb-8">

  <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
    <div class="font-sans pb-6">

      <header class="pb-2 flex">
        <h1
          itemprop="headline"
          class="flex-initial font-bold font-sans break-normal text-gray-900
          text-3xl md:text-4xl mr-3">
          {@html entry.title}
        </h1>
        {#if entry.draft}
          <p class="flex-initial font-normal text-gray-400">(Draft)</p>
        {/if}
        <div class="flex-grow"></div>
        {#if $user.loggedIn}
          <button on:click={editClick} class="flex-initial bg-transparent border border-gray-500 text-base text-sm text-gray-500 py-1 px-4 rounded-full">
            Edit
          </button>
        {/if}
      </header>
      <div class="flex">
        {#each entry.tags as tag}
          <div
            class="flex-initial hover:{'bg-' + tag.color + '-700'} text-white text-base
            md:text-sm font-bold py-0.5 px-3 rounded-full mr-2 {'bg-' + tag.color + '-500'}">
            {tag.name}
          </div>
        {/each}
        <p class="flex-initial text-sm md:text-base font-normal text-gray-500">
          <time itemprop="datePublished" datetime={publishedDateTime}>
            {publishedAgo}
          </time>
        </p>
      </div>
    </div>

    <div itemprop="articleBody" class="article-body font-sans">
      {@html entry.content}
    </div>

    <hr class="mt-4" />
  </div>
</article>
