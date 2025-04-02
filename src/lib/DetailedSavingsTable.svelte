<script lang="ts">
  import type { SavingsDashboardData } from '$lib/northCaseAPI';
  import { formatCurrency, formatDate } from '$lib/formatters';

  type DetailedSavingsData = SavingsDashboardData['detailedSavings']
  let {detailedData}: {detailedData: DetailedSavingsData} = $props();
  let sortedData = detailedData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
</script>

<div class="table-container">
  <h3>Detailed Savings</h3>
  {#if detailedData.length > 0}
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Service</th>
          <th>Amount Saved</th>
        </tr>
      </thead>
      <tbody>
        {#each sortedData as item (item.date + item.service + item.amount)}  <!-- Basic keying -->
          <tr>
            <td>{formatDate(item.date)}</td>
            <td>{item.service}</td>
            <td class="amount">{formatCurrency(item.amount)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <p>No detailed savings data available.</p>
  {/if}
</div>

<style>
  .table-container {
    margin-top: 1.5rem;
    width: 100%;
    overflow-x: auto; /* Allow horizontal scrolling on small screens */
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9em;
  }
  th, td {
    border: 1px solid var(--light);
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: var(--bruma800);
    font-weight: bold;
  }
  tbody tr:nth-child(even) {
    background-color: var(--bruma800);
  }
  tbody tr:hover {
    background-color: var(--nebula);
    color: var(--nebula100);
  }
  .amount {
    text-align: right;
    font-family: monospace; /* Often good for numbers */
  }
</style>
