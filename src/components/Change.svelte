<script>
	export let change;
</script>

<article itemscope itemtype="https://schema.org/BlogPosting" class="container w-full md:max-w-3xl mx-auto pt-20">
		
    <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">
        
        <!--Title-->
        <!--TODO: replace with flex instead of float and clearfix-->
        <header class="font-sans">
            <span class="text-base md:text-sm text-teal-500 font-bold">&lt;<span> <a href class="text-base md:text-sm text-teal-500 font-bold no-underline hover:underline">BACK TO BLOG</a>
            <div class="clearfix pt-6 pb-2">
                <h1 itemprop="headline" class="float-left font-bold font-sans break-normal text-gray-900 text-3xl md:text-4xl mr-3">{change.title}</h1>
                {#if change.draft}
                    <p class="font-normal text-gray-400 pt-3">(Draft)</p>
                {/if}
            </div>
            <div class="clearfix">
                <span class="float-left bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mr-3">New</span>
                <p class="text-sm md:text-base font-normal text-gray-500 pt-1"><time itemprop="datePublished" datetime="{change.published}">{change.publishedAgo}</time></p>
            </div>
        </header>
    
        <!--Post Content-->
        <div itemprop="articleBody" class="article-body">
            {@html change.markdown}
        </div>

        <!--Lead Para-->
        <!-- <p class="py-6">
            👋 Welcome fellow <a class="text-teal-500 no-underline hover:underline" href="https://www.tailwindcss.com">Tailwind CSS</a> and miminal monochrome blog fan.  This starter template provides a starting point to create your own minimal monochrome blog using Tailwind CSS and vanilla Javascript.
        </p>

        <p class="py-6">The basic blog page layout is available and all using the default Tailwind CSS classes (although there are a few hardcoded style tags). If you are going to use this in your project, you will want to convert the classes into components.</p>				 -->
    
    </div>

</article>