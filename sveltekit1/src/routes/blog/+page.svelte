<script>
    /** @type {import('./$types').PageData} */
    export let data;
 </script>


{#if data.all_records.error}
   <h3 class="is-size2 has-text-primary">
      Cannot load blog content. Are you sure the server is running?
   </h3>

{:else}

<nav class="mb-5">
    <p>Let's have a nav bar in there</p>
</nav>
<h1 class="is-size-1 mb-2">Latest articles</h1>
{#each data.posts_only as record}
<section class="section">
    <p class="is-size-3">{record.title}</p>
    <div>{@html record.content}</div>

</section>

{/each}

{/if}