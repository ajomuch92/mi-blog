<script lang="ts">
  import { createEventDispatcher } from 'svelte';
	import type Columns from '../models/interfaces/Colums';

  const dispatch = createEventDispatcher();

  export const columns: Columns[] = [];
  export const rows: any[] = [];
  export const showNumber: boolean = false;
  export const showActions: boolean = false;
  export const search: string = '';

  function emitEvent(eventName: string) {
    dispatch(eventName);
  }

</script>

<table>
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
            <button on:click={() => emitEvent('edit')}>
              <i class="bi bi-pencil-square"></i>
            </button>
            <button on:click={() => emitEvent('delete')}>
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