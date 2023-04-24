<script>
    /** @type {import('./$types').PageData} */  
    export let data;
    
    /** @type {import('./$types').ActionData} */  
    export let form;

    
</script>
     


<h2 class="is-size-2">Create ship</h2>

<form method="POST">
    <div class="field">
    <label class="label">Name</label>
      <div class="control">
        <input name="name" type="text">
      </div>
    </div>
      

    <label>
        Class
        <input name="class" type="text">
      </label>
    <label class="label">
        Type
        <input name="type" type="text">
    </label>
    <label class="label">
        Cost index
        <input name="cost_index" type="number">
    </label>
    
    <button>Create</button>
  </form>