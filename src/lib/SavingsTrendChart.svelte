<script lang="ts">
  import {Chart} from "chart.js/auto";
  import regression from 'regression';
  import type { ChartConfiguration } from "chart.js/auto";
  import type { SavingsDashboardData } from "./northCaseAPI";

  type TrendData = SavingsDashboardData['savingsTrends']
  let { trendData }: {trendData: TrendData}= $props();
  let chartElement: HTMLCanvasElement;
  let projectionLength: number = $state(3);
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
  function* genProjectedValues(startIndex: number, projectionLength: number, projectionEquation: [number, number]): Generator<{x: string, y: number}> {
    let projection: (x: number)=>number = (x) => projectionEquation[0]*x + projectionEquation[1];
    for (let i=0;i<trendData.length+projectionLength;i++) {
      yield {
        x: MONTHS[(startIndex+i)%MONTHS.length] + "'".repeat(Math.floor((startIndex+i)/MONTHS.length)),
        y: projection(i)
      }
    }
  }
  let projectionEquation = $derived(regression.linear(trendData.map(({savings}, index)=>[index, savings])).equation);
  let startIndex = $derived(MONTHS.findIndex((v)=>v==trendData[0].month));
  let projection = $derived(Array.from(genProjectedValues(startIndex, projectionLength, projectionEquation)));

  function incrProjectionLength() {
    projectionLength = projectionLength+1
  }

  function decrProjectionLength() {
    projectionLength = Math.max(0, projectionLength-1)
  }

  $effect(() => {
    let light = window.getComputedStyle(document.documentElement).getPropertyValue('--light')
    let nebula100 = window.getComputedStyle(document.documentElement).getPropertyValue('--nebula100')
    let aurora = window.getComputedStyle(document.documentElement).getPropertyValue('--aurora')
    let data = {
      datasets: [
        {
          label: "Savings",
          data: trendData.map(({month, savings})=>({x: month, y: savings})),
          borderColor: nebula100,
          backgroundColor: nebula100,
        },
        {
          label: "Trend",
          data: projection,
          borderColor: aurora,
          fill: false,
          borderDash: [5, 5],
          pointRadius: 0,
        },
      ]
    };
    let config: ChartConfiguration = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        scales: {
          x: { title: { color: light }, grid: { color: light }, ticks: {color: light}},
          y: { title: { color: light }, grid: { color: light }, ticks: {color: light}}
        },
        plugins: {
          legend: {
            position: 'top',
            labels: { color: light} 
          },
          tooltip: {
            filter: function (tooltipItem) {
                return tooltipItem.datasetIndex === 0;
            }
          }
        }
      }
    };
    let chart = new Chart(chartElement, config);
    return () => chart.destroy()
  });
</script>


<div class="header">
  <h3>Monthy Savings Trend</h3>
  <div>
    <span class="projection-length"> Project {projectionLength} months</span>
    <button onclick={incrProjectionLength}>+1</button>
    <button onclick={decrProjectionLength}>-1</button>
  </div>
</div>
<div class="container">
  <canvas bind:this={chartElement} class="chart"></canvas>
</div>

<style>
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .projection-length {
      color: var(--aurora);
    }

    h3 {
      display: inline-block;
    }
  }
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
