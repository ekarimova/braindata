<script lang="ts">
  import PatientView from '$lib/components/patient/PatientView.svelte';
  import KpiRow from '$lib/components/kpi/KpiRow.svelte';
  import Seizures from '$lib/components/seizure/Seizures.svelte';
  import Graph from '$lib/components/graph/Graph.svelte';
  import data from '$lib/data/mock.json';

</script>

<main class="page">
  <PatientView patient={data.patient} recording={data.recording} />
  <KpiRow summary={data.summary}/>
  <Seizures seizures={data.seizures} />
  <Graph graph={data.graph} />
</main>

