<script lang="ts">
  import './PatientView.css';
  import type { PatientViewProps } from './PatientView.ts';
  import { formatStart, formatDuration } from './PatientView.ts';

  const patientView: PatientViewProps = $props();
</script>

<div class="banner">
  <div class="banner-left">
    <h1 class="patient-name">{patientView.patient.name}</h1>
    <div class="meta-row">
      <span class="meta-chip">{patientView.patient.id}</span>
      <span class="meta-chip">
        {patientView.patient.ageYears} Jahre alt · {patientView.patient.sex}
      </span>
      <span class="meta-chip diagnosis">{patientView.patient.diagnosis}</span>
    </div>
    <div class="rec-info">
      Aufnahme:
      {formatDuration(patientView.recording.durationSec)}
      &nbsp;·&nbsp;
      Start: {formatStart(patientView.recording.startTime)}
    </div>
  </div>

  <div class="banner-right">
    <div class="rec-id">{patientView.recording.id}</div>
  </div>
</div>