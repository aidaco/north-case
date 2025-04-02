<script lang="ts">
  import type { SavingsDashboardData } from '$lib/northCaseAPI';
  import { formatCurrency, formatPercentage } from '$lib/formatters';

  type OverviewData = SavingsDashboardData['overview']
  let {overview}: {overview: OverviewData} = $props();
  let totalSavings: string = $derived(formatCurrency(overview.totalSavings));
  let currentMonthSavings: string = $derived(formatCurrency(overview.currentMonthSavings))
  let percentageClass: string = $derived(overview.percentageChange >= 0 ? 'positive' : 'negative');
  let percentageSign: string = $derived(overview.percentageChange >= 0 ? '+' : '');
  let percentageChange: string = $derived(`${percentageSign}${formatPercentage(overview.percentageChange)}`)
</script>

<div class="overview-container">
  <div class="card">
    <h3>Total Savings</h3>
    <p class="value">{totalSavings}</p>
  </div>
  <div class="card">
    <h3>This Month</h3>
    <p class="value">{currentMonthSavings}</p>
  </div>
  <div class="card">
    <h3>Month Change</h3>
    <p class="value {percentageClass}">{percentageChange}</p>
  </div>
</div>

<style>
  .overview-container {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .card {
    flex: 1;
    min-width: 150px;
    border: 1px solid var(--light);
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
  }

  .card h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 0.9em;
    color: var(--light);
  }

  .card .value {
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
  }

  .positive {
    color: green;
  }
  .negative {
    color: red;
  }
</style>
