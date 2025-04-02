<script lang="ts">
  import type { SavingsDashboardData } from '$lib/northCaseAPI';
  import OverviewCards from './OverviewCards.svelte';
  import SavingsTrendChart from './SavingsTrendChart.svelte';
  import SavingsByCategoryChart from './SavingsByCategoryChart.svelte';
  import DetailedSavingsTable from './DetailedSavingsTable.svelte';

  export let savingsData: SavingsDashboardData;
</script>

<div class="dashboard-container">
  <OverviewCards overview={savingsData.overview} />

  <div class="charts-container">
    {#if savingsData.savingsTrends && savingsData.savingsTrends.length > 0}
      <div class="chart-wrapper">
        <SavingsTrendChart trendData={savingsData.savingsTrends} />
      </div>
    {:else}
      No savings trend data.
    {/if}

    {#if savingsData.savingsByCategory && savingsData.savingsByCategory.length > 0}
      <div class="chart-wrapper">
        <SavingsByCategoryChart categoryData={savingsData.savingsByCategory} />
      </div>
    {:else}
      No savings category data.
    {/if}
  </div>

  {#if savingsData.detailedSavings && savingsData.detailedSavings.length > 0}
    <DetailedSavingsTable detailedData={savingsData.detailedSavings} />
  {:else}
    No detailed savings data.
  {/if}
</div>

<style>
  .dashboard-container {
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .charts-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
</style>
