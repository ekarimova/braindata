<script lang="ts">
  import './KpiRow.css';
  import type { SummaryViewProps } from './KpiRow.ts';
  import { formatPercent, formatProbability } from './KpiRow.ts';

  const summaryView: SummaryViewProps = $props();
</script>

<div class="kpi-row">
  <div class="kpi-card">
    <div class="kpi-label">Anfalle</div>
    <div class="kpi-value kpi-value--seizures">
      {summaryView.summary.totalSeizures}
    </div>
    <div class="kpi-sub">aufgezeichnet bei dieser Aufnahme</div>
  </div>

  <div class="kpi-card">
    <div class="kpi-label">Maximale Wahrscheinlichkeit</div>
    <div class="kpi-value kpi-value--prob">
      {formatProbability(summaryView.summary.maxSeizureProbability)}
    </div>
    <div class="kpi-sub">hohes Modellvertauen</div>
  </div>

  <div class="kpi-card">
    <div class="kpi-label">Anfalllast</div>
    <div class="kpi-value kpi-value--burden">
      {formatPercent(summaryView.summary.seizureBurdenPercent)}
    </div>
    <div class="kpi-sub">von der Aufnahmezeit</div>
  </div>
</div>