<script lang="ts">
  import { createEventDispatcher } from 'svelte';
	import type { Columns } from '../models/interfaces';

  const dispatch = createEventDispatcher();

  export let columns: Columns[] = [];
  export let rows: any[] = [];
  export let showNumber: boolean = false;
  export let showActions: boolean = false;
  export let loading: boolean = false;
  // export let search: string = '';

  function emitEvent(eventName: string) {
    dispatch(eventName);
  }

</script>

<table aria-busy={loading}>
  <thead>
    <tr>
      {#if showNumber}
        <th scope="col">#</th>
      {/if}
      {#each columns as column}
        <th scope="col">{column.label}</th> 
      {/each}
      {#if showActions}
        <th scope="col"></th>
      {/if}
    </tr>
  </thead>
  <tbody>
    {#each rows as row, i}
      <tr>
        {#if showNumber}
          <th scope="row">{i + 1}</th>
        {/if}
        {#each columns as column}
          <td>{row[column.value]}</td>
        {/each}
        {#if showActions}
          <td>
            <button class="dense" on:click={() => emitEvent('edit')}>
              <i class="bi bi-pencil-square"></i>
            </button>
            <button class="dense" on:click={() => emitEvent('delete')}>
              <i class="bi bi-trash3"></i>
            </button>
          </td>
        {/if}
      </tr>
    {/each}
  </tbody>
  <tfoot>
    <slot name="footer" />
  </tfoot>
</table>