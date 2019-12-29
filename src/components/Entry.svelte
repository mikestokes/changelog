<script>
  export let entry;
</script>

<article
  itemscope
  itemtype="https://schema.org/BlogPosting"
  class="container w-full md:max-w-3xl mx-auto pb-8">

  <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">

    <div class="font-sans pb-6">

      <header class="pb-2">
        <h1
          itemprop="headline"
          class="inline-block font-bold font-sans break-normal text-gray-900
          text-3xl md:text-4xl mr-3">
          {@html entry.title}
        </h1>
        {#if entry.draft}
          <p class="inline-block font-normal text-gray-400">(Draft)</p>
        {/if}
      </header>
      <div>
        {#each entry.tags as tag}
          <span
            class="inline-block hover:bg-blue-700 text-white text-base
            md:text-sm font-bold py-0.5 px-3 rounded-full mr-2 {'bg-' + tag.color + '-500'}">
            {tag.title}
          </span>
        {/each}
        <p
          class="inline-block text-sm md:text-base font-normal text-gray-500
          pt-1">
          <time itemprop="datePublished" datetime={entry.published}>
            {entry.publishedAgo}
          </time>
        </p>
      </div>
    </div>

    <div itemprop="articleBody" class="article-body font-sans">
      {@html entry.markdown}
    </div>

    <hr class="mt-4" />
  </div>
</article>
