<script>
   /** @type {import('./$types').PageData} */
   export let data;
</script>

{#if data.ships.error}
   <h3 class="is-size2 has-text-primary">
      Cannot load ships. Are you sure the server is running?
   </h3>

{:else}


<h2 class="is-size-4 has-text-info">Ships from pocketbase</h2>
<table class="table">
  <thead>
    <tr>
      <th>Ship name</th>
      <th>Class</th>
      <th>Type</th>
      <th>Cost index</th>
   </tr>
   </thead>
   <tbody>
      {#each data.ships as ship}
      <tr>
         <td>{ship.name}</td>
         <td>{ship.class}</td>
         <td>{ship.type}</td>
         <td>{ship.cost_index}</td>
      </tr>
      {/each}
   </tbody>
</table>
{/if}
