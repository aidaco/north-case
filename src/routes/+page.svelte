<script lang="ts">
 import SavingsDashboard from '$lib/SavingsDashboard.svelte';
 import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<nav>
  <div class="north-logo">
    <img class="north-word" src="/north-word.svg" alt="North Inc.">
    <img class="north-symbol"src="/north-symbol.svg" alt="">
  </div>
  <h1>Cloud Savings Dashboard</h1>
</nav>
{#if data.savings}
  <SavingsDashboard savingsData={data.savings} />
{:else}
   <p>Loading...</p>
{/if}

<style>
  nav {
    width: 100dvw;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: baseline;
    background: var(--bruma800);
  }  

  h1 {
    margin: 0;
    padding: 0;
  }

  .north-logo {
    display: flex;
    gap: 3px;
    padding-inline-start: 2rem;
  }

  .north-word {
    width: 111px;
    height: 29px;
  }
  .north-symbol{
    width: 21px;
    height: 14px;
  }
</style>
