<script lang="ts">
  import { Chart } from "chart.js/auto";
  import type { ChartConfiguration } from 'chart.js/auto';
  import type { SavingsDashboardData } from '$lib/types';

  type CategoryData = SavingsDashboardData["savingsByCategory"];
  let { categoryData }: { categoryData: CategoryData} = $props();
  let chartElement: HTMLCanvasElement;
  $effect(() => {
    let light = window.getComputedStyle(document.documentElement).getPropertyValue('--light')
    let nebula100 = window.getComputedStyle(document.documentElement).getPropertyValue('--nebula100')
    let aurora = window.getComputedStyle(document.documentElement).getPropertyValue('--aurora')
    let data = {
      datasets: [
        {
          label: 'Savings',
          data: categoryData.map(({service,savings})=>({x:service, y:savings})),
          backgroundColor: [nebula100, aurora],
        },
      ]
    };
    let config: ChartConfiguration = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        scales: {
          x: { title: { color: light }, grid: { color: light }, ticks: {color: light}},
          y: { title: { color: light }, grid: { color: light }, ticks: {color: light}}
        },
        plugins: { legend: { display: false } }
      }
    };
    new Chart(chartElement, config);
  });
</script>

<h3>Savings By Category</h3>
<div class="container">
  <canvas bind:this={chartElement} class="chart"></canvas>
</div>

<style>
  .container {
    width: var(100% - 5px);
    min-height: 300px;
    padding: 7px;
    border: 1px solid var(--light);
    border-radius: 4px;
  }

  .chart {
    width: 100%;
    height: 100%;
  }
</style>
