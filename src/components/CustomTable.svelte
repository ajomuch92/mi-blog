<script lang="ts">
	import type Columns from '../models/interfaces/Colums';

  export const columns: Columns[] = [];
  export const rows: any[] = [];
  export const showNumber: boolean = false;
  export const showActions: boolean = false;

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
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-trash3"></i>
          </td>
        {/if}
      </tr>
    {/each}
  </tbody>
  <tfoot>
    <slot name="footer" />
  </tfoot>
</table>