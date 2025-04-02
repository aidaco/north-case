<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<h1>Cloud Savings Dashboard</h1>
<pre>{JSON.stringify(data.savings, null, '\t')}</pre>
