<script lang="ts">
  import PatientView from '$lib/components/patient/PatientView.svelte';
  import KpiRow from '$lib/components/kpi/KpiRow.svelte';
  import Seizures from '$lib/components/seizure/Seizures.svelte';
  import Graph from '$lib/components/graph/Graph.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

{#if data}
  <main class="page">
    <PatientView patient={data.patient} recording={data.recording} />
    <KpiRow summary={data.summary} />
    <Seizures seizures={data.seizures} />
    <Graph graphs={data.graphs} />
  </main>
{:else}
  <p>Wird geladen...</p>
{/if}