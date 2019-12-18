<script>
  export let change;
</script>

<article
  itemscope
  itemtype="https://schema.org/BlogPosting"
  class="container w-full md:max-w-3xl mx-auto pt-20">

  <div
    class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
    style="font-family:Georgia,serif;">

    <header class="font-sans pb-6">
      <!-- <span class="text-base md:text-sm text-teal-500 font-bold"> -->
      <!-- &lt; -->
      <!-- <span> -->
      <!-- <a
            href
            class="text-base md:text-sm text-teal-500 font-bold no-underline
            hover:underline">
            BACK TO BLOG
          </a> -->

      <div class="pt-6 pb-2">
        <h1
          itemprop="headline"
          class="inline-block font-bold font-sans break-normal text-gray-900
          text-3xl md:text-4xl mr-3">
          {@html change.title}
        </h1>
        {#if change.draft}
          <p class="inline-block font-normal text-gray-400">(Draft)</p>
        {/if}
      </div>
      <div>
        {#each change.tags as tag}
          <span
            class="inline-block hover:bg-blue-700 text-white text-base
            md:text-sm font-bold py-0.5 px-3 rounded-full mr-2 {'bg-' + tag.color + '-500'}">
            {tag.title}
          </span>
        {/each}
        <p
          class="inline-block text-sm md:text-base font-normal text-gray-500
          pt-1">
          <time itemprop="datePublished" datetime={change.published}>
            {change.publishedAgo}
          </time>
        </p>
      </div>
      <!-- </span> -->
      <!-- </span> -->
    </header>

    <div itemprop="articleBody" class="article-body font-sans">
      {@html change.markdown}
    </div>
  </div>
</article>
